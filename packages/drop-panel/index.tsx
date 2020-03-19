import React, { useState, useRef } from "react";
import DropPanelHeader from "./DropPanelHeader";
import DropPanelContent from "./DropPanelContent";
import DropPanelGroup from "./DropPanelGroup";
import "./index.scss";

export interface DropPanelProps {
  style?: any;
}

type IDropPanel<P> = React.FC<P> & {
  DropPanelHeader: any;
  DropPanelContent: any;
  DropPanelGroup: any;
};

const DropPanel: IDropPanel<DropPanelProps> = props => {
  const [drop, setDrop] = useState(false);
  const [maxHeight, setMaxHeight] = useState(42);
  const currentRef = useRef<any>(null);

  function toggle() {
    setDrop(!drop);
    let content = currentRef.current.querySelector(".drop-panel-content");
    let header = currentRef.current.querySelector(".drop-panel-header");
    if (content.clientHeight + header.clientHeight !== maxHeight) {
      setMaxHeight(content.clientHeight + header.clientHeight);
    }
  }

  function clone() {
    return React.Children.map(props.children, (child: any, idx) => {
      if (child.type === DropPanelHeader) {
        return React.cloneElement(child, {
          ...child.props,
          onClick: (e: any) => {
            toggle();
            child.props.onClick && child.props.onClick();
          },
          drop: drop
        });
      }
      return child;
    });
  }

  return (
    <div
      ref={currentRef}
      className="drop-panel"
      style={{ ...props.style, height: `${drop ? maxHeight : 42}px` }}>
      {clone()}
    </div>
  );
};

DropPanel.DropPanelHeader = DropPanelHeader;
DropPanel.DropPanelContent = DropPanelContent;
DropPanel.DropPanelGroup = DropPanelGroup;

export default DropPanel;
