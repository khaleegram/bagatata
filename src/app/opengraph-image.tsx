import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Bagatata Technologies Limited — Build what should exist.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ring = (
  inset: number,
  size: number,
  border: string,
  dashed = false,
) => ({
  position: "absolute" as const,
  top: -inset,
  right: -inset * 0.8,
  width: size,
  height: size,
  borderRadius: size,
  border: `${dashed ? 1 : 2}px ${dashed ? "dashed" : "solid"} ${border}`,
});

/**
 * The social share card. Rendered at build time from the supplied primary
 * mark and the site's own Archivo instances, so shares match the brand.
 */
export default async function OpengraphImage() {
  const [mark, archivoRegular, archivoBold] = await Promise.all([
    readFile(join(process.cwd(), "public", "brand", "ribbon-b-primary.png")),
    readFile(join(process.cwd(), "public", "fonts", "archivo-og-400.ttf")),
    readFile(join(process.cwd(), "public", "fonts", "archivo-og-800.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0c0c0b",
          padding: "64px 72px",
          color: "#f1eee6",
          fontFamily: "Archivo",
          position: "relative",
        }}
      >
        <div style={ring(130, 620, "rgba(221,180,122,0.22)")} />
        <div style={ring(40, 430, "rgba(221,180,122,0.16)", true)} />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={`data:image/png;base64,${mark.toString("base64")}`}
              width={116}
              height={116}
              alt=""
              style={{ objectFit: "contain" }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 18,
              }}
            >
              <span
                style={{ fontSize: 27, fontWeight: 800, letterSpacing: 1.5 }}
              >
                BAGATATA
              </span>
              <span
                style={{
                  fontSize: 14,
                  letterSpacing: 5,
                  color: "#bdc0b9",
                  marginTop: 6,
                }}
              >
                TECHNOLOGIES LIMITED
              </span>
            </div>
          </div>
          <span
            style={{
              fontSize: 14,
              letterSpacing: 4,
              color: "#ddb47a",
              marginRight: 10,
            }}
          >
            ABUJA · NIGERIA
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              width: 76,
              height: 3,
              backgroundColor: "#ddb47a",
              marginBottom: 30,
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 82,
              lineHeight: 1.04,
              letterSpacing: -2.5,
              fontWeight: 800,
            }}
          >
            <span>Build what</span>
            <span style={{ color: "#ddb47a" }}>should exist.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 19,
            color: "#bdc0b9",
            letterSpacing: 0.4,
          }}
        >
          <span>Loomis · EventTicketsNG · ChatCart · ArewaVanta</span>
          <span style={{ color: "#ddb47a" }}>bagatata.vercel.app</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Archivo",
          data: archivoRegular,
          weight: 400,
          style: "normal",
        },
        { name: "Archivo", data: archivoBold, weight: 800, style: "normal" },
      ],
    },
  );
}
