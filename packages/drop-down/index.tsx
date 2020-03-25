import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import "./index.scss";

export interface DropDownProps {
  overlay: any;
  trigger: string[];
}

const DropDown: React.FC<DropDownProps> = props => {
  const [drop, setDrop] = useState(false);
  const [offset, setOffset] = useState([0, 0]);
  const [fade, setFade] = useState("in");
  const [width, setWidth] = useState(0);
  const wrapRef = useRef<any>(null);
  const contentRef = useRef<any>(null);

  function getOffset(ref: any) {
    let dom = ref.current;
    let rect = dom.getBoundingClientRect();
    let left = rect.x;
    let top = rect.y;
    let height = rect.height;
    top += height;
    setOffset([left, top]);
    setWidth(rect.width);

    return [left, top];
  }

  function toggle(ref: any, timer?: any) {
    getOffset(ref);
    if (drop) {
      timer = setTimeout(() => {
        setDrop(false);
      }, 300);
    } else {
      clearTimeout(timer);
      setDrop(true);
      setTimeout(() => {
        contentRef.current.focus();
      })
    }
    setFade(drop ? "out" : "in");

    return timer;
  }

  function clone() {
    return React.Children.map(props.children, (child: any, idx) => {
      let events: any = {};
      let timer: any;
      for (let type of props.trigger) {
        if (type === "click") {
          events.onClick = (e: any) => {
            timer = toggle(wrapRef, timer);
            child.props.onClick && child.props.onClick(e);
          };
        } else if (type === "hover") {
          events.onMouseOver = (e: any) => {
            timer = toggle(wrapRef, timer);
            child.props.onMouseOver && child.props.onMouseOver(e);
          };
        }
      }
      return React.cloneElement(child, {
        ...child.props,
        ...events
      });
    });
  }

  function cloneContent() {
    return React.Children.map(props.overlay, (child: any, idx) => {
      let element = React.cloneElement(
        <div className="drop-down-content" tabIndex={-1} ref={contentRef}>
          {child}
        </div>,
        {
          ...child.props,
          style: {
            ...child.props.style,
            position: "fixed",
            left: `${offset[0]}px`,
            top: `${offset[1]}px`,
            minWidth: `${width}px`
          },
          "data-drop-fade": fade,
          onBlur: (e: any) => {
            child.onBlur && child.onBlur(e);
            toggle(wrapRef);
          }
        }
      );
      return element;
    });
  }

  return (
    <>
      <div className="drop-down-wrap" ref={wrapRef}>
        {clone()}
      </div>
      {drop && ReactDOM.createPortal(cloneContent(), document.body)}
    </>
  );
};

export default DropDown;
