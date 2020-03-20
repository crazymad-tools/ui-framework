import React, { useState } from "react";

interface Props {
  single?: boolean;
}

const DropPanelGroup: React.FC<Props> = props => {
  const [drops, setDrops] = useState<boolean[]>([]);

  function clone() {
    let _drops: boolean[] = [];
    let children = React.Children.map(props.children, (child: any, idx) => {
      _drops.push(child.props.defaultDrop || child.props.drop);
      return React.cloneElement(child, {
        ...child.props,
        onChange: (e: any) => {
          drops[idx] = e;
          setDrops(drops.concat([]));
          child.props.onChange(e);
        },
        drop: drops[idx]
      });
    });
    setDrops(_drops);

    return children;
  }

  return <div className="drop-panel-group">{props.children}</div>;
};

DropPanelGroup.defaultProps = {
  single: false
};

export default DropPanelGroup;
