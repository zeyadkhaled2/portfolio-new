import { ImageResponse } from "next/og";
import { site } from "@/data";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #1d1e2c 0%, #131314 72%)",
          color: "#f6f2e7",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "2px solid #7e81f4",
              borderRadius: "999px",
              padding: "10px 24px",
              fontSize: 24,
              color: "#f6f2e7",
            }}
          >
            Hi, I&apos;m Ziad
          </div>
          <div style={{ fontSize: 22, color: "#969696" }}>{site.location}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <span>{site.name} ·&nbsp;</span>
            <span style={{ color: "#7e81f4" }}>{site.role}</span>
          </div>
          <div style={{ fontSize: 28, color: "#969696", maxWidth: 960, lineHeight: 1.35 }}>
            {site.description}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #2c2c30",
            paddingTop: 24,
            fontSize: 20,
            color: "#7e81f4",
          }}
        >
          <span>Full-Stack Web · React Native · AI &amp; Computer Vision</span>
          <span style={{ color: "#f6f2e7" }}>{site.email}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
