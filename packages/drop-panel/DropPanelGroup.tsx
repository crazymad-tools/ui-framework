import React from "react";

interface Props {}

const DropPanelGroup: React.FC<Props> = props => {
  return <div className="drop-panel-group">{props.children}</div>;
};

export default DropPanelGroup;
