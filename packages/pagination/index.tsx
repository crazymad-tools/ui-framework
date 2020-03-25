import React, { useEffect } from "react";
import usePagination from "./usePagination";
import Button from "../button";

import "./index.scss";

interface PaginationProps {
  total?: number;
  pageSize?: number;
  current?: number;
}

const Pagination: React.FC<PaginationProps> = props => {
  const { items, setCurrent, setPageSize, setTotal, current } = usePagination(props.pageSize, props.total);

  useEffect(() => {
    if (typeof props.total === "number") {
      setTotal(props.total);
    }
  }, [props.total]);

  useEffect(() => {
    if (typeof props.pageSize === "number") {
      setPageSize(props.pageSize);
    }
  }, [props.pageSize]);

  useEffect(() => {
    if (typeof props.current === "number") {
      setCurrent(props.current);
    }
  }, [props.current]);

  return (
    <div className="pagination-container">
      {items.map((item, idx) => {
        return (
          <Button key={item.type + idx} {...item.props}>
            <span
              style={{
                fontWeight: item.idx === current ? 600 : 400,
                color: item.idx === current ? "#1890ff" : "black"
              }}
            >
              {item.content}
            </span>
          </Button>
        );
      })}
    </div>
  );
};

Pagination.defaultProps = {
  total: 100,
  pageSize: 10,
  current: 1
};

export default Pagination;
