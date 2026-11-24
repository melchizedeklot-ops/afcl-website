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
          background: "#fbf8f1",
          color: "#0f3d2b",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 8,
            color: "#8a6d26",
            textTransform: "uppercase",
          }}
        >
          Afri Food Connect & Logistics
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, marginTop: 28, lineHeight: 1.05 }}>
          Fresh from the farm,
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, color: "#8a6d26", lineHeight: 1.05 }}>
          delivered to your door.
        </div>
        <div style={{ fontSize: 30, marginTop: 40, color: "#5b6760" }}>
          afrifoodconnect.com
        </div>
      </div>
    ),
    size
  );
}
