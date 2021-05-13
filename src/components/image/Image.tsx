import React from "react";
import "./image.css";

const Image: React.FC<{ ratio: number; src: string; alt: string }> = ({
  ratio,
  src,
  alt,
}: any) => {
  return (
    <div className="image-container">
      <div className="image-inner-container">
        <div
          className="ratio"
          style={{
            paddingTop: ratio * 100 + "%",
          }}
        >
          <div className="ratio-inner">
            <img src={src} alt={alt} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
