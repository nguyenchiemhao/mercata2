import { useEffect, useState } from "react";
import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import SelectCustom from "../../../../component/SelectCustom";
import { useNavigate } from "react-router-dom";
import { DataType } from "../../../../mockup";
import customAxios from "../../../../../services/configAxios";

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
  const [userData, setUserData] = useState<DataType[]>([]);
  const navigate = useNavigate();

  useEffect((): any => {
    customAxios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        let updatedData: DataType[] = [];
        res.data.map((x: any, index: any) =>
          updatedData.push({
            key: index + 1,
            file: x.name,
            owner: x.username,
            versions: index + 1,
            date_active: "22 Jun 2020 02:47:53",
            date_update: "22 Jun 2020 02:47:53",
          })
        );
        setUserData(updatedData);
      });
  }, []);

  const columns: ColumnsType<DataType> = [
    {
      title: "File Name",
      dataIndex: "file",
      key: "file",
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
            lineHeight: "12px",
          }}
        >
          {versions}
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
      key: "date_update",
      dataIndex: "date_update",
    },
    {
      title: "Last Activity At",
      key: "date_active",
      dataIndex: "date_active",
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
      dataSource={userData}
      pagination={false}
      onRow={(record, rowIndex) => {
        return {
          onClick: (event) => {
            navigate("/blockchain/details");
          },
        };
      }}
    />
  );
};

export default List;
