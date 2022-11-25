import React from "react";
import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import SelectCustom from "../../component/SelectCustom";
import { useNavigate } from "react-router-dom";

export interface DataType {
  key: string;
  file: string;
  versions: number;
  owner: string;
  date_update: string;
  date_active: string;
  uploaded_by?: string;
  tag?: number
}

const data: DataType[] = [
  {
    key: "1",
    file: "test_888376.txt",
    versions: 2,
    owner: "owner",
    date_update: "22 Jun 2020 02:47:53",
    date_active: "22 Jun 2020 02:47:53",
  },
];

const optionsVersion: any[] = [
  {
    value: "VERSION 1",
    label: "VERSION 1",
  },
  {
    value: "VERSION 2",
    label: "VERSION 2",
  },
];

const List = () => {
  const navigate = useNavigate();

  const columns: ColumnsType<DataType> = [
    {
      title: "File Name",
      dataIndex: "file",
      key: "file",
      onCell: (record, rowIndex) => {
        return {
          onClick: (event) => {
            navigate("details");
          },
        };
      },
    },
    {
      title: "Versions",
      dataIndex: "versions",
      key: "versions",
      render: (_, { versions }) => (
        <span
          style={{
            background: "#293742",
            color: "#fff",
            padding: "2px 9px",
            borderRadius: "10px",
            lineHeight: "12px"
          }}
        >
          {versions}
        </span>
      ),
      onCell: (record, rowIndex) => {
        return {
          onClick: (event) => {
            navigate("details");
          },
        };
      },
    },
    {
      title: "Owner",
      dataIndex: "owner",
      key: "owner",
      onCell: (record, rowIndex) => {
        return {
          onClick: (event) => {
            navigate("details");
          },
        };
      },
    },
    {
      title: "Date Uploaded",
      key: "date_update",
      dataIndex: "date_update",
      onCell: (record, rowIndex) => {
        return {
          onClick: (event) => {
            navigate("details");
          },
        };
      },
    },
    {
      title: "Last Activity At",
      key: "date_active",
      dataIndex: "date_active",
      onCell: (record, rowIndex) => {
        return {
          onClick: (event) => {
            navigate("details");
          },
        };
      },
    },
    {
      key: "action",
      align: "right",
      render: (_, record) => (
        <Space size="middle">
          <SelectCustom placeholder="Download" options={optionsVersion} />
        </Space>
      ),
    },
  ];

  return (
    <Table
      className="custom-table"
      columns={columns}
      dataSource={data}
      pagination={false}
    />
  );
};

export default List;
