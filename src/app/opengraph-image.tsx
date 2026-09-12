import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const alt =
  "Steffen Giebler — Product Developer & Indie Founder, Berlin";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const HEADLINE = "I build my own apps.";
const ROLE_LINE = "Steffen · Berlin · shipping in public";
const WATERMARK = "steffendoesthings.com";
const HEADLINE_FONT_SIZE = 66;

async function loadGoogleFont(family: string, weight: number, text: string) {
  const cssUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
    family,
  )}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(cssUrl)).text();
  const match = css.match(/src: url\(([^)]+)\) format\('(opentype|truetype)'\)/);
  if (match) {
    const res = await fetch(match[1]);
    if (res.ok) return await res.arrayBuffer();
  }
  throw new Error(`Failed to load font: ${family}`);
}

export default async function Image() {
  const photoBuffer = await readFile(
    join(process.cwd(), "public/me-steffen.png"),
  );
  const photoSrc = `data:image/png;base64,${photoBuffer.toString("base64")}`;

  const loraBold = await loadGoogleFont("Lora", 700, HEADLINE);
  const loraRegular = await loadGoogleFont(
    "Lora",
    400,
    ROLE_LINE + WATERMARK,
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#F5F0E8",
          position: "relative",
        }}
      >
        <svg
          style={{ position: "absolute", left: -20, top: 0 }}
          width="400"
          height="630"
          viewBox="0 0 400 630"
        >
          <path
            fill="#7B5CF0"
            d="M0,0 L320,0 L280,70 L350,120 L290,180 L360,240 L300,310 L365,380 L310,450 L355,520 L300,580 L340,630 L0,630 Z"
          />
        </svg>

        <img
          src={photoSrc}
          alt=""
          width={400}
          height={630}
          style={{
            position: "absolute",
            left: -20,
            bottom: 0,
            height: 630,
            width: 400,
            objectFit: "contain",
            objectPosition: "bottom",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: 500,
            top: 0,
            right: 60,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "Lora",
              fontWeight: 700,
              fontSize: HEADLINE_FONT_SIZE,
              lineHeight: 1.1,
              color: "#1A1A1A",
              whiteSpace: "nowrap",
            }}
          >
            {HEADLINE}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontFamily: "Lora",
              fontWeight: 400,
              fontSize: 28,
              color: "#1A1A1A",
            }}
          >
            {ROLE_LINE}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            position: "absolute",
            right: 48,
            bottom: 40,
            fontFamily: "Lora",
            fontWeight: 400,
            fontSize: 24,
            color: "#9A9488",
          }}
        >
          {WATERMARK}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Lora", data: loraBold, weight: 700, style: "normal" },
        { name: "Lora", data: loraRegular, weight: 400, style: "normal" },
      ],
    },
  );
}
