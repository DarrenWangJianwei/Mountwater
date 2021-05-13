import React from "react";

const Hero: React.FC = ({ children }: any) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "space-between",
        background: "linear-gradient(180deg, #ffffff, #d4d3d3 100%)",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          flexShrink: 0,
          padding: "3rem 1.5rem",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Hero;
