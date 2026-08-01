"use client";

import { useCallback, useRef, useState } from "react";

const CHAR_DELAY = 40;
const LINE_DELAY = 300;

type CaseId =
  | "i-have-an-idea"
  | "i-need-a-blueprint"
  | "my-build-is-broken"
  | "i-need-a-partner"
  | "i-need-a-feature"
  | "i-dont-know-the-stack";

type CaseDef = {
  id: CaseId;
  command: string;
  lines: string[];
};

const CASES: CaseDef[] = [
  {
    id: "i-have-an-idea",
    command: "./i-have-an-idea",
    lines: [
      "> analyzing your situation...",
      '> case detected: "I have an idea, no clue how to build it"',
      "> status: this is where it gets exciting ✓",
      "",
      "> what steffen does:",
      "  → Sits down with you and maps the idea",
      "  → Defines what needs to be built (and what doesn't)",
      "  → Picks the right stack for your goals and budget",
      "  → Builds it — from zero to launch",
      "",
      "> recommended engagement: Full Build",
      "> timeline: 4–12 weeks depending on scope",
    ],
  },
  {
    id: "i-need-a-blueprint",
    command: "./i-need-a-blueprint",
    lines: [
      "> analyzing your situation...",
      '> case detected: "I need architecture before I build"',
      "> status: smart move ✓",
      "",
      "> what steffen does:",
      "  → Documents your full product architecture",
      "  → Designs the data model and user flows",
      "  → Defines the tech stack with reasoning",
      "  → Delivers a senior-level Blueprint document",
      "  → Estimates realistic build hours per scenario",
      "",
      "> recommended engagement: Blueprint Session",
      "> deliverable: Architecture document, not code",
      "> timeline: 1–2 weeks",
    ],
  },
  {
    id: "my-build-is-broken",
    command: "./my-build-is-broken",
    lines: [
      "> analyzing your situation...",
      '> case detected: "My existing build has structural problems"',
      "> status: diagnosable and fixable ✓",
      "",
      "> what steffen does:",
      "  → Full system audit of your existing platform",
      "  → Identifies structural issues, privacy gaps, role logic",
      "  → Delivers a remediation roadmap",
      "  → Can take over and fix it milestone by milestone",
      "",
      "> recommended engagement: Platform Audit + Takeover",
      "> timeline: Audit in 1 week, fixes from there",
    ],
  },
  {
    id: "i-need-a-partner",
    command: "./i-need-a-partner",
    lines: [
      "> analyzing your situation...",
      '> case detected: "I need a senior technical partner ongoing"',
      "> status: available for the right project ✓",
      "",
      "> what steffen does:",
      "  → Acts as your product architect in the background",
      "  → Reviews architecture decisions before you build",
      "  → Builds features, integrations, and complex workflows",
      "  → Available on retainer or per milestone",
      "",
      "> recommended engagement: Ongoing Partnership",
      "> timeline: Ongoing, flexible",
    ],
  },
  {
    id: "i-need-a-feature",
    command: "./i-need-a-feature",
    lines: [
      "> analyzing your situation...",
      '> case detected: "I need a specific feature or integration"',
      "> status: scoped and buildable ✓",
      "",
      "> what steffen does:",
      "  → Stripe, Auth, AI integrations",
      "  → Complex workflows and automation",
      "  → Clean, documented, production-ready code",
      "  → No fluff — just the feature, built right",
      "",
      "> recommended engagement: Scoped Feature Build",
      "> timeline: 1–3 weeks depending on complexity",
    ],
  },
  {
    id: "i-dont-know-the-stack",
    command: "./i-dont-know-the-stack",
    lines: [
      "> analyzing your situation...",
      '> case detected: "I have an idea but no idea what to build with"',
      "> status: this is exactly what I'm here for ✓",
      "",
      "> what steffen does:",
      "  → Listens to your idea and goals",
      "  → Maps out the right stack for your situation",
      "  → Explains the tradeoffs in plain language",
      "  → Gives you a clear path forward — with or without me",
      "",
      "> recommended engagement: Stack Strategy Session",
      "> timeline: 1–2 days, fast turnaround",
    ],
  },
];

/** Fixed per-note tilt — max ±1.5deg, matches app-card paper feel */
const CASE_ROTATIONS = [
  "-1.2deg",
  "0.8deg",
  "-0.5deg",
  "1.4deg",
  "-1.5deg",
  "0.3deg",
] as const;

function sleep(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

export default function Room05() {
  const [activeCase, setActiveCase] = useState<CaseId | null>(null);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showTalkButton, setShowTalkButton] = useState(false);
  const typingRef = useRef(0);

  const runTyping = useCallback(async (caseId: CaseId) => {
    const runId = ++typingRef.current;
    const caseData = CASES.find((c) => c.id === caseId);
    if (!caseData) return;

    setActiveCase(caseId);
    setTerminalLines([]);
    setShowTalkButton(false);
    setIsTyping(true);

    const completedLines: string[] = [];

    for (const line of caseData.lines) {
      if (typingRef.current !== runId) return;

      completedLines.push("");
      const lineIndex = completedLines.length - 1;
      setTerminalLines([...completedLines]);

      for (let i = 1; i <= line.length; i++) {
        if (typingRef.current !== runId) return;
        completedLines[lineIndex] = line.slice(0, i);
        setTerminalLines([...completedLines]);
        await sleep(CHAR_DELAY);
      }

      await sleep(LINE_DELAY);
    }

    if (typingRef.current === runId) {
      setIsTyping(false);
      setShowTalkButton(true);
    }
  }, []);

  const handleCaseClick = (caseId: CaseId) => {
    typingRef.current += 1;
    void runTyping(caseId);
  };

  const handleTalk = () => {
    document.getElementById("room-06")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="room-05" className="room-05">
      <div className="room-05-ghost" aria-hidden="true">
        WORK
      </div>

      <div className="room-05-inner">
        <header className="room-05-header">
          <p className="room-05-label">./work-with-me</p>
          <h2 className="room-05-title">
            What&apos;s your
            <br />
            situation?
          </h2>
          <p className="room-05-sub">
            Click your case. I&apos;ll show you exactly how I can help.
          </p>
        </header>

        <div className="room-05-cases">
          {CASES.map((caseItem, index) => (
            <button
              key={caseItem.id}
              type="button"
              className={`room-05-case-btn ${
                activeCase === caseItem.id ? "room-05-case-btn-active" : ""
              }`}
              style={{
                ["--case-rotate" as string]:
                  CASE_ROTATIONS[index % CASE_ROTATIONS.length],
              }}
              onClick={() => handleCaseClick(caseItem.id)}
              disabled={isTyping && activeCase === caseItem.id}
            >
              <span className="room-05-case-prompt">&gt; </span>
              {caseItem.command}
            </button>
          ))}
        </div>

        {(activeCase !== null || terminalLines.length > 0) && (
          <div className="room-05-terminal">
            {terminalLines.map((line, index) => (
              <div key={index} className="room-05-terminal-line">
                {line || "\u00A0"}
              </div>
            ))}
            {isTyping && <span className="room-05-cursor blink-cursor" />}
            {showTalkButton && (
              <button
                type="button"
                className="room-05-talk-btn"
                onClick={handleTalk}
              >
                [ → Let&apos;s talk ]
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
