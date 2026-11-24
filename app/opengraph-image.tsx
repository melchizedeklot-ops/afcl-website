import { ImageResponse } from "next/og";

export const alt = "AFCL | Afri Food Connect & Logistics";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#06130F",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 8,
            color: "#34d399",
            textTransform: "uppercase",
          }}
        >
          Afri Food Connect & Logistics
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, marginTop: 28, lineHeight: 1.05 }}>
          Connecting African Agriculture
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, color: "#34d399", lineHeight: 1.05 }}>
          to the World.
        </div>
        <div style={{ fontSize: 30, marginTop: 40, color: "rgba(255,255,255,0.6)" }}>
          afrifoodconnect.com
        </div>
      </div>
    ),
    size
  );
}
