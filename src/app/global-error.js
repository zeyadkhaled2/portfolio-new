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
          background: "#090c10",
          color: "#f1f5f9",
          fontFamily: "system-ui, sans-serif",
          padding: "24px",
        }}
      >
        <div style={{ maxWidth: 520 }}>
          <p style={{ color: "#f472b6", fontSize: 12, letterSpacing: "0.14em" }}>
            CRITICAL ERROR
          </p>
          <h1 style={{ fontSize: 36, margin: "12px 0" }}>Something went wrong.</h1>
          <p style={{ color: "#94a3b8", lineHeight: 1.6 }}>
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
              border: "1px solid #2dd4bf",
              background: "#2dd4bf",
              color: "#041316",
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
