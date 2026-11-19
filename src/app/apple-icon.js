import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#131314",
        }}
      >
        <svg viewBox="0 0 32 32" width="132" height="132" fill="none">
          <rect
            x="2.25"
            y="2.25"
            width="27.5"
            height="27.5"
            rx="9"
            fill="#7e81f4"
            fillOpacity="0.14"
            stroke="#7e81f4"
            strokeOpacity="0.55"
            strokeWidth="1.5"
          />
          <path
            d="M9.75 10.5H21.75L10.25 21.5"
            stroke="#f6f2e7"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.25 21.5H22.25"
            stroke="#7e81f4"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <circle cx="22.25" cy="10.5" r="1.4" fill="#78dfc0" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
