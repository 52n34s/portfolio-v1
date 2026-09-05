import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CHALLENGE_APPS,
  DAYS_COVER_GOAL,
  daysCoveredFromRevenue,
  getCountdownStats,
  INSTAGRAM_URL,
  PITCH_URL,
  type ChallengeApp,
} from "@/lib/countdown";
import CountdownClock from "./CountdownClock";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Steffen",
  description:
    "Getting my own apps to €3,000 MRR before the money runs out. Public, from day one.",
};

const lora = { fontFamily: "var(--font-lora), Georgia, serif" } as const;
const mono = { fontFamily: "var(--font-jetbrains-mono), monospace" } as const;

function formatNumber(n: number) {
  return n.toLocaleString("en-US");
}

function ArrowUpRight() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0, marginTop: 2 }}
    >
      <path
        d="M4 11L11 4M11 4H5.5M11 4V9.5"
        stroke="#5F6D79"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AppLogo({ app }: { app: ChallengeApp }) {
  if (!app.logo) {
    return (
      <div
        aria-hidden="true"
        style={{
          width: 34,
          height: 34,
          borderRadius: 8,
          background: "#1A2732",
          flexShrink: 0,
        }}
      />
    );
  }

  return (
    <Image
      src={app.logo}
      alt={app.name}
      width={34}
      height={34}
      style={{
        width: 34,
        height: 34,
        borderRadius: 8,
        objectFit: "cover",
        flexShrink: 0,
      }}
    />
  );
}

function AppRowInner({ app }: { app: ChallengeApp }) {
  return (
    <>
      <AppLogo app={app} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 8,
          }}
        >
          <span style={{ fontSize: 14, color: "#F5F0E8" }}>{app.name}</span>
          {app.comingSoon ? (
            <span
              style={{
                ...mono,
                fontSize: 9,
                letterSpacing: "0.06em",
                color: "#55636F",
                flexShrink: 0,
              }}
            >
              COMING SOON
            </span>
          ) : app.href ? (
            <ArrowUpRight />
          ) : null}
        </div>
        {app.description ? (
          <p
            style={{
              margin: "4px 0 0",
              fontSize: 12,
              lineHeight: 1.55,
              color: "#8A9BA8",
            }}
          >
            {app.description}
          </p>
        ) : null}
      </div>
    </>
  );
}

const rowClass =
  "flex items-start gap-3 bg-[#111C26] p-[14px] no-underline text-inherit";

function AppRow({ app }: { app: ChallengeApp }) {
  if (app.href) {
    return (
      <a
        href={app.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${rowClass} hover:bg-[#16232F]`}
      >
        <AppRowInner app={app} />
      </a>
    );
  }

  return (
    <div className={rowClass}>
      <AppRowInner app={app} />
    </div>
  );
}

export default function CountdownPage() {
  const { monthlyRevenue, subscriberCount } = getCountdownStats();
  const daysCovered = daysCoveredFromRevenue(monthlyRevenue);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0E1620",
        color: "#F5F0E8",
      }}
    >
      <div
        style={{
          maxWidth: 480,
          margin: "0 auto",
          padding: "20px 20px 40px",
        }}
      >
        <header
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Image
            src="/me-steffen.png"
            alt="Steffen"
            width={26}
            height={26}
            style={{
              width: 26,
              height: 26,
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "top",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              ...mono,
              fontSize: 11,
              color: "#A8B4BE",
            }}
          >
            Steffen · Berlin
          </span>
        </header>

        <CountdownClock />

        <p
          style={{
            margin: "26px 0 0",
            textAlign: "center",
            fontSize: 13,
            lineHeight: 1.6,
            color: "#A8B4BE",
          }}
        >
          To make my own apps pay my rent before the money runs out.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 8,
            marginTop: 22,
          }}
        >
          <div
            style={{
              background: "#111C26",
              borderRadius: 8,
              padding: "14px 10px",
              textAlign: "center",
            }}
          >
            <div>
              <span style={{ ...lora, fontSize: 24, color: "#F5F0E8" }}>
                {formatNumber(daysCovered)}
              </span>
              <span style={{ ...lora, fontSize: 15, color: "#55636F" }}>
                {" "}
                / {formatNumber(DAYS_COVER_GOAL)}
              </span>
            </div>
            <div
              style={{
                ...mono,
                marginTop: 6,
                fontSize: 9,
                letterSpacing: "0.1em",
                color: "#7A8894",
              }}
            >
              DAYS MY APPS COVER
            </div>
          </div>
          <div
            style={{
              background: "#111C26",
              borderRadius: 8,
              padding: "14px 10px",
              textAlign: "center",
            }}
          >
            <div style={{ ...lora, fontSize: 24, color: "#F5F0E8" }}>
              {formatNumber(subscriberCount)}
            </div>
            <div
              style={{
                ...mono,
                marginTop: 6,
                fontSize: 9,
                letterSpacing: "0.1em",
                color: "#7A8894",
              }}
            >
              APP SUBSCRIBERS
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            marginTop: 34,
          }}
        >
          {CHALLENGE_APPS.map((app) => (
            <AppRow key={app.name} app={app} />
          ))}
        </div>

        <hr
          style={{
            margin: "32px 0 0",
            border: "none",
            height: 0.5,
            background: "#22303C",
          }}
        />

        <div
          style={{
            marginTop: 24,
            fontSize: 13,
            lineHeight: 1.75,
            color: "#C9D3DB",
          }}
        >
          <p style={{ margin: 0 }}>
            I built Bubble apps for other founders. That work has dried up. AI
            changed what clients are willing to pay for, and the requests
            stopped coming.
          </p>
          <p style={{ margin: "12px 0 0" }}>
            Five apps of my own are live. None of them earns money.
          </p>
          <p style={{ margin: "12px 0 0" }}>
            No job, no plan B, money for three or four months. So here is a
            number and a date.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            marginTop: 30,
          }}
        >
          <Link
            href={PITCH_URL}
            style={{
              display: "block",
              padding: 13,
              borderRadius: 8,
              border: "0.5px solid #7B5CF0",
              textAlign: "center",
              fontSize: 13,
              color: "#F5F0E8",
              textDecoration: "none",
            }}
          >
            Have your own idea?
          </Link>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              padding: 13,
              borderRadius: 8,
              border: "0.5px solid #2A3844",
              textAlign: "center",
              fontSize: 13,
              color: "#A8B4BE",
              textDecoration: "none",
            }}
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </main>
  );
}
