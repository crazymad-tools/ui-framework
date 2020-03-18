import React from "react";
import Icon from "../icon";
import right from "../svgs/right.svg";
import Wave from "../wave";

export interface DropPanelHeaderProps {
  drop?: boolean;
}

const DropPanelHeader: React.FC<DropPanelHeaderProps> = props => {
  return (
    <Wave>
      <div className="drop-panel-header">
        {props.children}
        {/* <img className="svg-icon" src={right} /> */}
        <Icon source={right} width={16} height={16} />
      </div>
    </Wave>
  );
};

DropPanelHeader.defaultProps = {
  drop: false
};

export default DropPanelHeader;
