import React, { useEffect } from "react";

interface IconProps {
  source: any;
  width: number;
  height: number;
}

const Icon: React.FC<IconProps> = props => {  
  return <img className="img-icon" src={props.source} width={props.width} height={props.height} />;
};

export default Icon;
