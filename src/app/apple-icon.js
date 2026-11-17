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
        <svg viewBox="0 0 32 32" width="128" height="128" fill="none">
          <ellipse cx="16" cy="12.2" rx="7.2" ry="6.8" fill="#7e81f4" fillOpacity="0.22" />
          <path
            d="M8.5 12.2C8.5 8.22 11.86 5 16 5s7.5 3.22 7.5 7.2c0 2.32-1.08 4.38-2.75 5.68L23 25M11.25 17.88 9 25M14.2 19.2V26.2M17.8 19.2V26.2"
            stroke="#7e81f4"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="13.2" cy="12" r="1.4" fill="#f6f2e7" />
          <circle cx="18.8" cy="12" r="1.4" fill="#f6f2e7" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
