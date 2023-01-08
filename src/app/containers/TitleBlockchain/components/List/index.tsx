import React from "react";
import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import SelectCustom from "../../../../component/SelectCustom";
import { useNavigate } from "react-router-dom";
import { IList } from "../../../../../model";

function List(props: any) {
  const navigate = useNavigate();

  const columns: ColumnsType<IList> = [
    {
      title: "File Name",
      dataIndex: "file_name",
      key: "file_name",
    },
    {
      title: "Versions",
      dataIndex: "count_version",
      key: "count_version",
      render: (_, { count_version }) => (
        <span
          style={{
            background: "#293742",
            color: "#fff",
            padding: "2px 9px",
            borderRadius: "10px",
            lineHeight: "12px",
          }}
        >
          {count_version}
        </span>
      ),
    },
    {
      title: "Owner",
      dataIndex: "owner",
      key: "owner",
    },
    {
      title: "Date Uploaded",
      key: "date_updated",
      dataIndex: "date_updated",
    },
    {
      title: "Last Activity At",
      key: "last_activity",
      dataIndex: "last_activity",
    },
    {
      key: "action",
      align: "right",
      onCell: (record, rowIndex) => {
        return {
          onClick: (event) => {
            event.stopPropagation();
          },
        };
      },
      render: (_, record) => {
        const optionsVersion: any[] = [];
        record.list_version.map((x) =>
          optionsVersion.push({
            value: "VERSION" + x.version,
            label: "VERSION" + x.version,
          })
        );
        return (
          <Space size="middle">
            <SelectCustom placeholder="Download" options={optionsVersion} />
          </Space>
        );
      },
    },
  ];

  return (
    <Table
      className="custom-table"
      columns={columns}
      dataSource={props.list}
      pagination={false}
      onRow={(record, rowIndex) => {
        return {
          onClick: (event) => {
            navigate("/blockchain/details/" + record.id);
          },
        };
      }}
    />
  );
}

export default List;
