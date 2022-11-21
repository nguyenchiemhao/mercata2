import React from "react";
import type { PaginationProps } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Pagination } from "antd";

const itemRender: PaginationProps["itemRender"] = ( _, type, originalElement) => {
  if (type === "prev") {
    return <ArrowLeftOutlined style={{ color: "#BFCCD6" }} />;
  }
  if (type === "next") {
    return <ArrowRightOutlined style={{ color: "#BFCCD6" }} />;
  }
  return originalElement;
};

const PaginationCustom = () => (
  <>
    <Pagination
      simple
      showSizeChanger
      defaultCurrent={1}
      showTotal={(total, range) => `File ${range[0]}-${range[1]}`}
      total={50}
			itemRender={itemRender}
    />
  </>
);

export default PaginationCustom;
