import React, { useEffect, useState } from "react";

type PageItem = {
  type: "page" | "prev" | "next";
  idx: number;
  content: any;
  props: {
    onClick: React.MouseEventHandler<HTMLElement>;
  };
};

export default function(_pageSize: number = 10, _total: number = 100) {
  const [items, setItems] = useState<PageItem[]>([]);
  const [pageSize, setPageSize] = useState(_pageSize);
  const [pageCount, setPageCount] = useState(Math.ceil(_total / _pageSize));
  const [total, setTotal] = useState(_total);
  const [current, setCurrent] = useState(1);

  const [showCount, setShowCount] = useState(7);

  useEffect(() => {
    createItems();
  }, []);

  useEffect(() => {
    createItems();
  }, [current, pageSize, total]);

  function createItems() {
    let items: PageItem[] = [
      {
        type: "prev",
        idx: 0,
        content: React.createElement("span", {}, "prev"),
        props: {
          onClick: () => {
            setCurrent(Math.max(current - 1, 1));
          }
        }
      }
    ];

    let half = Math.floor(showCount / 2);
    let beginIdx = Math.max(1, current - half);
    let endIdx = Math.min(pageCount, beginIdx + showCount - 1);
    beginIdx = Math.max(1, endIdx - showCount + 1);
    for (let i = beginIdx; i <= endIdx; i++) {
      items.push({
        type: "page",
        idx: i,
        content: React.createElement("span", {}, i),
        props: {
          onClick: () => {
            i !== current && setCurrent(i);
          }
        }
      });
    }

    items.push({
      type: "next",
      idx: pageCount + 1,
      content: React.createElement("span", {}, "next"),
      props: {
        onClick: () => {
          setCurrent(Math.min(current + 1, pageCount));
        }
      }
    });
    setItems(items);
  }

  return {
    items,
    setItems,
    setPageSize,
    setTotal,
    setCurrent,
    current,
    total,
    pageSize
  };
}
