import React, { useEffect, useState } from "react";

interface IconProps {
  source?: any;
  width?: number;
  height?: number;
  style?: any;
  type?: string;
}

const Icon: React.FC<IconProps> = props => {
  const [svgContent, setSvgContent] = useState("");
  const [Svg, setSvg] = useState<any>(null);

  useEffect(() => {
    if (props.source) {
    } else if (props.type) {
      const iconPath = require(`./svgs/${props.type}.svg`).default;
      // console.log(iconPath);
      fetch(iconPath)
        .then(res => res.text())
        .then(text => {
          // console.log(text);
          // setSvgContent(text);
          // setSvg(React.createElement(text));
          // let warp = document.createElement("div");
          // warp.innerHTML = text;
          // let svg = warp.childNodes;
          // console.log(svg);
          // let dom = React.createElement("div", {}, svg[0]);
          // React.createElement("div", {}, )
          // setSvg(dom);
        });
    }
  }, []);

  return (
    <>
      {props.source && (
        <img
          className="img-icon"
          style={{ ...props.style, userSelect: "none" }}
          src={props.source}
          width={props.width}
          height={props.height}
        />
      )}
      {props.type && <>{Svg && <Svg />}</>}
    </>
  );
};

Icon.defaultProps = {
  height: 16,
  width: 16
};

export default Icon;
