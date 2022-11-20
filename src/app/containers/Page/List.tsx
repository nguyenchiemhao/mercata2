import React from 'react';
import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import SelectCustom from '../../component/SelectCustom';
import { useNavigate } from 'react-router-dom';

export interface DataType {
  key: string;
  file: string;
  versions: number;
  owner: string;
  date_update: string;
  date_active: string;
  uploaded_by?: string;
}

const data: DataType[] = [
  {
    key: '1',
    file: 'test_888376.txt',
    versions: 2,
    owner: 'owner',
    date_update: '22 Jun 2020 02:47:53',
    date_active: '22 Jun 2020 02:47:53'
  }
];

const List = () => {
  const navigate = useNavigate();

  const columns: ColumnsType<DataType> = [
    {
      title: 'File Name',
      dataIndex: 'file',
      key: 'file',
      onCell: (record, rowIndex) => {
        return {
          onClick: (event) => {
            navigate('details');
          }
        };
      }
    },
    {
      title: 'Versions',
      dataIndex: 'versions',
      key: 'versions',
      onCell: (record, rowIndex) => {
        return {
          onClick: (event) => {
            navigate('details');
          }
        };
      }
    },
    {
      title: 'Owner',
      dataIndex: 'owner',
      key: 'owner',
      onCell: (record, rowIndex) => {
        return {
          onClick: (event) => {
            navigate('details');
          }
        };
      }
    },
    {
      title: 'Date Uploaded',
      key: 'date_update',
      dataIndex: 'date_update',
      onCell: (record, rowIndex) => {
        return {
          onClick: (event) => {
            navigate('details');
          }
        };
      }
    },
    {
      title: 'Last Activity At',
      key: 'date_active',
      dataIndex: 'date_active',
      onCell: (record, rowIndex) => {
        return {
          onClick: (event) => {
            navigate('details');
          }
        };
      }
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <SelectCustom />
        </Space>
      )
    }
  ];

  return <Table className="custom-table" columns={columns} dataSource={data} pagination={false} />;
};

export default List;
