import React, { useState } from "react";
import DropPanelHeader from "./DropPanelHeader";
import "./index.scss";
import DropPanelContent from "./DropPanelContent";

export interface DropPanelProps {
  style: any;
}

type IDropPanel<P> = React.FC<P> & {
  DropPanelHeader: any;
  DropPanelContent: any;
};

const DropPanel: IDropPanel<DropPanelProps> = props => {
  const [drop, setDrop] = useState(false);
  const [maxHeight, setMaxHeight] = useState(84);

  return (
    <div
      className="drop-panel"
      style={Object.assign(props.style || {}, {
        height: `${drop ? maxHeight : 42}px`
      })}>
      {props.children}
    </div>
  );
};

DropPanel.DropPanelHeader = DropPanelHeader;
DropPanel.DropPanelContent = DropPanelContent;

export default DropPanel;
