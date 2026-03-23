import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fdc003",
          borderRadius: "8px",
          fontSize: 22,
          fontWeight: 800,
          color: "#553e00",
          fontFamily: "sans-serif",
        }}
      >
        G
      </div>
    ),
    { ...size }
  );
}
