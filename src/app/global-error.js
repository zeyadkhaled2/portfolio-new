"use client";

export default function GlobalError({ error, retry }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#131314",
          color: "#f6f2e7",
          fontFamily: "system-ui, sans-serif",
          padding: "24px",
        }}
      >
        <div style={{ maxWidth: 520 }}>
          <p style={{ color: "#ef91a5", fontSize: 12, letterSpacing: "0.14em" }}>
            CRITICAL ERROR
          </p>
          <h1 style={{ fontSize: 36, margin: "12px 0" }}>Something went wrong.</h1>
          <p style={{ color: "#969696", lineHeight: 1.6 }}>
            {error instanceof Error ? error.message : "An unexpected error occurred."}
          </p>
          <button
            type="button"
            onClick={() => retry()}
            style={{
              marginTop: 20,
              height: 44,
              padding: "0 24px",
              borderRadius: 999,
              border: "1px solid #7e81f4",
              background: "#7e81f4",
              color: "#131314",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
