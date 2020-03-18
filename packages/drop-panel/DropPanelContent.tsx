import React from "react";

export interface DropPanelContentProps {}

const DropPanelContent: React.FC<DropPanelContentProps> = props => {
  return <div className="drop-panel-content">{props.children}</div>;
};

export default DropPanelContent;
