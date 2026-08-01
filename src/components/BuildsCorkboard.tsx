"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type MutableRefObject,
  type RefObject,
} from "react";
import { projects, type Project } from "@/data/projects";

const THREAD = "#7B5CF0";
const PAPER_SHADOW = "2px 6px 18px rgba(26, 26, 26, 0.16)";
const PAPER_SHADOW_ACTIVE = "3px 8px 20px rgba(26, 26, 26, 0.22)";

/** Fixed organic tilt per stable project index — not re-randomized. */
const PIN_ROTATIONS = [
  -1.2, 0.8, -0.5, 1.4, -1.5, 0.3, 1.1, -0.9,
] as const;

function NdaBadge({ size = "sm" }: { size?: "sm" | "md" }) {
  const dim = size === "md" ? 44 : 36;
  return (
    <div
      className="builds-cork-nda"
      style={{ width: dim, height: dim }}
      aria-label="NDA project"
    >
      <span>NDA</span>
    </div>
  );
}

function StackTags({
  items,
  compact = false,
}: {
  items: string[];
  compact?: boolean;
}) {
  const shown = compact ? items.slice(0, 2) : items;
  return (
    <ul className={`builds-cork-stack${compact ? " is-compact" : ""}`}>
      {shown.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
      {compact && items.length > 2 ? (
        <li className="builds-cork-stack-more">+{items.length - 2}</li>
      ) : null}
    </ul>
  );
}

function DetailCard({
  project,
  fading,
  cardRef,
}: {
  project: Project;
  fading: boolean;
  cardRef?: RefObject<HTMLElement | null>;
}) {
  const hasBody =
    Boolean(project.role?.trim()) ||
    Boolean(project.problem?.trim()) ||
    Boolean(project.approach?.trim()) ||
    Boolean(project.timeline?.trim()) ||
    Boolean(project.outcome?.trim());

  return (
    <article
      ref={cardRef}
      className={`builds-cork-detail${fading ? " is-fading" : ""}`}
      style={{ transform: "rotate(-0.8deg)" }}
    >
      <div className="builds-cork-detail-top">
        <div>
          <p
            className={`builds-cork-detail-eyebrow${
              project.isNda ? " is-nda" : ""
            }`}
          >
            {project.isNda ? "NDA Project" : "Project"}
          </p>
          <h2 className="builds-cork-detail-title">{project.title}</h2>
        </div>
        {project.isNda ? <NdaBadge size="md" /> : null}
      </div>

      <StackTags items={project.stack} />

      {hasBody ? (
        <div className="builds-cork-detail-body">
          {project.role?.trim() ? (
            <div>
              <p className="builds-cork-label">Role</p>
              <p className="builds-cork-copy">{project.role}</p>
            </div>
          ) : null}
          {project.problem?.trim() ? (
            <div>
              <p className="builds-cork-label">The Challenge</p>
              <p className="builds-cork-copy">{project.problem}</p>
            </div>
          ) : null}
          {project.approach?.trim() ? (
            <div>
              <p className="builds-cork-label">The Approach</p>
              <p className="builds-cork-copy">{project.approach}</p>
            </div>
          ) : null}
          {project.timeline?.trim() ? (
            <div>
              <p className="builds-cork-label">Timeline</p>
              <p className="builds-cork-copy">{project.timeline}</p>
            </div>
          ) : null}
          {project.outcome?.trim() ? (
            <div>
              <p className="builds-cork-label">Outcome</p>
              <p className="builds-cork-copy">{project.outcome}</p>
            </div>
          ) : null}
        </div>
      ) : null}

      <p className="builds-cork-detail-footnote">
        Full-cycle build — architecture, planning &amp; complete implementation.
      </p>
    </article>
  );
}

function ProjectPin({
  project,
  active,
  style,
  pinRef,
  onSelect,
}: {
  project: Project;
  active: boolean;
  style: CSSProperties;
  pinRef: (el: HTMLButtonElement | null) => void;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      ref={pinRef}
      className={`builds-cork-pin${active ? " is-active" : ""}`}
      style={style}
      onClick={onSelect}
      aria-pressed={active}
      aria-label={`Show ${project.title}`}
    >
      {project.isNda ? (
        <span className="builds-cork-pin-nda-wrap">
          <NdaBadge size="sm" />
        </span>
      ) : null}
      <p className="builds-cork-pin-title">{project.title}</p>
      <StackTags items={project.stack} compact />
    </button>
  );
}

function PinColumn({
  items,
  side,
  activeId,
  pinRefs,
  onSelect,
}: {
  items: { project: Project; index: number }[];
  side: "left" | "right";
  activeId: string;
  pinRefs: MutableRefObject<Map<string, HTMLButtonElement>>;
  onSelect: (id: string) => void;
}) {
  return (
    <div className={`builds-cork-pins builds-cork-pins-${side}`}>
      {items.map(({ project, index }) => {
        const isActive = project.id === activeId;
        const rotate = PIN_ROTATIONS[index % PIN_ROTATIONS.length];
        return (
          <ProjectPin
            key={project.id}
            project={project}
            active={isActive}
            pinRef={(el) => {
              if (el) pinRefs.current.set(project.id, el);
              else pinRefs.current.delete(project.id);
            }}
            onSelect={() => onSelect(project.id)}
            style={{
              transform: `rotate(${rotate}deg)${
                isActive ? " translateY(-4px)" : ""
              }`,
              boxShadow: isActive ? PAPER_SHADOW_ACTIVE : PAPER_SHADOW,
              zIndex: isActive ? 4 : 2,
            }}
          />
        );
      })}
    </div>
  );
}

export default function BuildsCorkboard() {
  const [activeId, setActiveId] = useState(projects[0]?.id ?? "");
  const [fading, setFading] = useState(false);
  const [thread, setThread] = useState<{ d: string; key: number } | null>(
    null,
  );

  const boardRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLElement>(null);
  const pinRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  const active = projects.find((p) => p.id === activeId) ?? projects[0];

  // Stable column assignment by original index — positions never reshuffle.
  const indexed = projects.map((project, index) => ({ project, index }));
  const leftPins = indexed.filter(({ index }) => index % 2 === 0);
  const rightPins = indexed.filter(({ index }) => index % 2 === 1);

  useEffect(() => {
    if (process.env.NODE_ENV === "development" && projects.length === 0) {
      console.warn("projects.ts ist leer — /builds zeigt keine Projekte.");
    }
  }, []);

  const updateThread = useCallback(() => {
    if (!active || !boardRef.current || !detailRef.current) {
      setThread(null);
      return;
    }
    const pinEl = pinRefs.current.get(active.id);
    if (!pinEl) {
      setThread(null);
      return;
    }

    const board = boardRef.current.getBoundingClientRect();
    const pin = pinEl.getBoundingClientRect();
    const card = detailRef.current.getBoundingClientRect();

    const from = {
      x: pin.left + pin.width / 2 - board.left,
      y: pin.top + pin.height / 2 - board.top,
    };
    const to = {
      x: card.left + card.width / 2 - board.left,
      y: card.top + Math.min(card.height / 2, 100) - board.top,
    };
    const midX = (from.x + to.x) / 2;
    const midY =
      (from.y + to.y) / 2 + Math.min(56, Math.abs(to.y - from.y) * 0.25 + 28);
    const d = `M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`;
    setThread({ d, key: Date.now() });
  }, [active]);

  useLayoutEffect(() => {
    updateThread();
  }, [updateThread, fading]);

  useEffect(() => {
    window.addEventListener("resize", updateThread);
    return () => window.removeEventListener("resize", updateThread);
  }, [updateThread]);

  const selectProject = (id: string) => {
    if (id === activeId) return;
    setFading(true);
    window.setTimeout(() => {
      setActiveId(id);
      setFading(false);
    }, 120);
  };

  if (projects.length === 0) {
    return (
      <div className="builds-cork-empty">
        <p className="builds-cork-empty-label">./builds</p>
        <h1 className="builds-cork-empty-title">What I&apos;ve built.</h1>
        <p className="builds-cork-empty-copy">
          Projects will appear here once they&apos;re pinned to the board.
        </p>
      </div>
    );
  }

  return (
    <div className="builds-cork">
      <header className="builds-cork-header">
        <p className="builds-cork-header-label">./builds</p>
        <h1 className="builds-cork-header-title">What I&apos;ve built.</h1>
        <p className="builds-cork-header-sub">
          Selected work — own products and client projects.
        </p>
      </header>

      <div className="builds-cork-mobile">
        <div className="builds-cork-tabs" role="tablist" aria-label="Projects">
          {projects.map((project) => {
            const isActive = project.id === active?.id;
            return (
              <button
                key={project.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`builds-cork-tab${isActive ? " is-active" : ""}`}
                onClick={() => selectProject(project.id)}
              >
                {project.isNda ? (
                  <span className="builds-cork-tab-nda">NDA</span>
                ) : null}
                <span>{project.title}</span>
              </button>
            );
          })}
        </div>
        {active ? <DetailCard project={active} fading={fading} /> : null}
      </div>

      <div className="builds-cork-board-wrap">
        <div ref={boardRef} className="builds-cork-board">
          <svg
            className="builds-cork-thread"
            aria-hidden="true"
            width="100%"
            height="100%"
          >
            {thread ? (
              <path
                key={thread.key}
                d={thread.d}
                fill="none"
                stroke={THREAD}
                strokeWidth="1.5"
                strokeLinecap="round"
                className="builds-cork-thread-path"
              />
            ) : null}
          </svg>

          <PinColumn
            items={leftPins}
            side="left"
            activeId={activeId}
            pinRefs={pinRefs}
            onSelect={selectProject}
          />

          <div className="builds-cork-detail-slot">
            {active ? (
              <DetailCard
                project={active}
                fading={fading}
                cardRef={detailRef}
              />
            ) : null}
          </div>

          <PinColumn
            items={rightPins}
            side="right"
            activeId={activeId}
            pinRefs={pinRefs}
            onSelect={selectProject}
          />
        </div>
      </div>
    </div>
  );
}
