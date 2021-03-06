import React, { useEffect } from "react";
import Icon from "../icon";
import right from "../svgs/right.svg";
import Wave from "../wave";

export interface DropPanelHeaderProps {
  drop?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
const DropPanelHeader: React.FC<DropPanelHeaderProps> = props => {
  return (
    <Wave>
      <div className="drop-panel-header" onClick={props.onClick}>
        {props.children}
        {/* <img className="svg-icon" src={right} /> */}
        <span className="icon-wrap">
          <Icon
            source={right}
            width={16}
            height={16}
            style={{
              transform: `rotate(${props.drop ? 90 : 0}deg)`
            }}
          />
        </span>
      </div>
    </Wave>
  );
};

DropPanelHeader.defaultProps = {
  drop: false
};

export default DropPanelHeader;
