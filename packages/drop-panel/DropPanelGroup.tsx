import React, { useState, useEffect } from "react";

interface Props {
  style?: any;
  // 是否开启仅允许展开一个面板，默认为false
  single?: boolean;
}

/**
 * 折叠面板组
 * @param props
 */
const DropPanelGroup: React.FC<Props> = props => {
  const [drops, setDrops] = useState<boolean[]>([]);

  useEffect(() => {
    // console.log(
    //   React.Children.count(props.children)
    // );
    let count = React.Children.count(props.children);
    let drops = Array.from(new Array(count)).map(() => false);
    setDrops(drops);
  }, []);

  function clone() {
    // let _drops: boolean[] = [];
    // drops.splice(0, drops.length);
    let children: any = React.Children.map(
      props.children,
      (child: any, idx) => {
        drops.push(child.props.defualtDrop || child.props.drop);
        return React.cloneElement(child, {
          ...child.props,
          drop: drops[idx],
          onChange: (e: boolean) => {
            if (props.single) {
              drops[idx] = e;
              drops.forEach((drop, dropIdx) => {
                if (dropIdx === idx) {
                  drops[dropIdx] = e;
                } else {
                  drops[dropIdx] = false;
                }
              });
              console.log('single panel group')
              setDrops(drops.concat([]));
            } else {
              child.props.onchange && child.props.onChange(e);
            }
          }
        });
      }
    );
    return children;
  }

  return (
    <div className="drop-panel-group" style={props.style || {}}>
      {clone()}
    </div>
  );
};

DropPanelGroup.defaultProps = {
  single: false
};

export default DropPanelGroup;
