import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Steffen — Founder, Developer, Berlin Mitte";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const photoData = await readFile(
    join(process.cwd(), "public/me-steffen.png"),
  );
  const photoSrc = `data:image/png;base64,${photoData.toString("base64")}`;

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
        {/* gerissene lila Fläche hinter dem Foto */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 40,
            width: 380,
            height: 550,
            background: "#7B5CF0",
            clipPath: "polygon(0% 8%, 88% 0%, 100% 55%, 92% 100%, 4% 96%)",
          }}
        />

        {/* Foto */}
        <img
          src={photoSrc}
          alt=""
          style={{
            position: "absolute",
            left: 40,
            bottom: 0,
            height: 560,
            width: "auto",
            objectFit: "contain",
          }}
        />

        {/* Text rechts */}
        <div
          style={{
            position: "absolute",
            left: 460,
            top: 100,
            display: "flex",
            flexDirection: "column",
            width: 680,
          }}
        >
          <div
            style={{
              fontSize: 52,
              fontWeight: 500,
              color: "#1A1A1A",
              lineHeight: 1.15,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Start before you can.</span>
            <span>Find the way while walking.</span>
            <span>Something always works.</span>
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 22,
              color: "#1A1A1A",
              opacity: 0.6,
              display: "flex",
            }}
          >
            Steffen — Founder · Developer · Berlin Mitte
          </div>
        </div>

        {/* Domain unten rechts */}
        <div
          style={{
            position: "absolute",
            right: 40,
            bottom: 30,
            fontSize: 18,
            color: "#1A1A1A",
            opacity: 0.4,
            display: "flex",
          }}
        >
          52n34s.app
        </div>
      </div>
    ),
    { ...size },
  );
}
