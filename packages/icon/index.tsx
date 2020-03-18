import React, { useEffect } from "react";

interface IconProps {
  source: any;
  width: number;
  height: number;
  style?: any;
}

const Icon: React.FC<IconProps> = props => {
  return (
    <img
      className="img-icon"
      style={{ ...props.style, userSelect: "none" }}
      src={props.source}
      width={props.width}
      height={props.height}
    />
  );
};

export default Icon;
