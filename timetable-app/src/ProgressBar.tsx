import React from "react";

interface ProgressBarProps {
  progress: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => (
  <div
    style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      width: "100%",
      margin: "8px 0",
    }}
  >
    <div
      style={{
        height: "16px",
        width: `${progress}%`,
        backgroundColor: progress >= 100 ? "green" : "blue",
        borderRadius: "8px",
      }}
    />
  </div>
);
