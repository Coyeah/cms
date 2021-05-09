import React, { CSSProperties } from "react";
import "./index.css";

const Image: React.FC<{
  src: string;
  size: number;
  style?: CSSProperties;
  className?: string;
}> = ({ src, size, style = {}, className = "" }) => {
  const _style: CSSProperties = {
    width: size + "px",
    height: size + "px",
    backgroundImage: `url(${src})`,
    ...style,
  };
  return <div className={`component-image ${className}`} style={_style} />;
};

export default Image;
