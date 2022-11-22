import {
  Button,
  Card,
  Col,
  Descriptions,
  Divider,
  Image,
  Input,
  Layout,
  Row,
  Select,
  Space,
  Table,
  Timeline,
  Typography,
} from "antd";
import {
  ArrowLeftOutlined,
  FileOutlined,
  InfoCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import './index.css'
import styled from "styled-components";
import UploadFile from "../../component/UploadFile";
import { DataType } from "../Page/List";
import { ColumnsType } from "antd/es/table";
import { useNavigate } from "react-router-dom";
import SelectCustom from "../../component/SelectCustom";
import QR from "../../assets/images/QR.png";
import QR2 from "../../assets/images/QR2.png";
import { useState } from "react";

const { Search } = Input;
const { Content } = Layout;
const { Text } = Typography;

function Header() {
  const navigate = useNavigate();

  return (
    <div
      style={{ height: 40, display: "flex", justifyContent: "space-between" }}
    >
      <Button
        type="primary"
        icon={<ArrowLeftOutlined />}
        onClick={() => navigate(-1)}
        style={{ background: "none", border: "none", boxShadow: "none" }}
      ></Button>

      <Button
        type="primary"
        style={{ background: "#394b59", boxShadow: "none" }}
      >
        Transfer Ownership
      </Button>
    </div>
  );
}

const data: DataType[] = [
  {
    key: "1",
    tag: 0,
    file: "test_888376.txt",
    versions: 1,
    owner: "owner",
    date_update: "22 Jun 2020 02:47:53",
    date_active: "22 Jun 2020 02:47:53",
    uploaded_by: "user1@yopmail.com",
  },
  {
    key: "1",
    tag: 0,
    file: "test_888376.txt",
    versions: 2,
    owner: "owner",
    date_update: "22 Jun 2020 02:47:53",
    date_active: "22 Jun 2020 02:47:53",
    uploaded_by: "user1@yopmail.com",
  },
];

const columns: ColumnsType<DataType> = [
  {
    title: <CheckCircleOutlined />,
    dataIndex: "versions",
    key: "version",
    align: "center",
    render: (value, record, index) => {
      return (
        <Badge
          style={{
            fontSize: 12,
            padding: "0px 10px",
            background: "#EFDC60",
            color: "black",
          }}
        >
          {value}
        </Badge>
      );
    },
  },
  {
    title: "VERSION",
    dataIndex: "versions",
    key: "version",
    align: "center",
  },
  {
    title: "UPLOAD BY",
    dataIndex: "uploaded_by",
    key: "uploaded_by",
  },
  {
    key: "action",
    render: () => (
      <>
        <Button
          type="primary"
          ghost
          size="small"
          style={{
            color: "#dfe4e8",
            border: "none",
            background: "#293742",
          }}
        >
          Attest
        </Button>
        <Button
          size="small"
          type="primary"
          style={{ background: "#3452ff", border: "none" }}
        >
          Download
        </Button>
      </>
    ),
  },
];

const onSearch = (value: string) => console.log(value);
const versionOption = [
  {
    value: "version1",
    label: "Version 1",
    text: "e862dd7af4f62fe6d31a196fe6786fd",
    image: QR,
  },
  {
    value: "version2",
    label: "Version 2",
    text: "this is the image",
    image: QR2,
  },
];

function PageDetails() {
  const [selectedQR, setSelectedQR] = useState<any>(versionOption[0]);
  const onSelect = (value: any) => {
    setSelectedQR(versionOption.find((x) => x.value === value));
    console.log(value, selectedQR);
  };
  return (
    <Content
      style={{
        minHeight: "calc( 100vh - 64px )",
        padding: 15,
        background: "#293742",
        position: "relative",
      }}
      className="site-layout-background"
    >
      <Layout
        style={{
          background: "none",
          position: "absolute",
          height: "calc(100% - 30px)",
          width: "calc(100% - 30px)",
        }}
      >
        <Header />
        <Row
          gutter={[8, 8]}
          style={{
            position: "relative",
            height: "calc(100% - 75px)",
            marginTop: 10,
          }}
        >
          <Col span={18}>
            <AlmostDarkCard bordered={false} bodyStyle={{ padding: 16 }}>
              <Row>
                <Col span={16}>
                  <Descriptions
                    size="small"
                    title={<Text strong>User Info</Text>}
                    layout="vertical"
                    labelStyle={{ color: "#dfe4e8" }}
                  >
                    <Descriptions.Item label={<Text strong>File Name</Text>}>
                      <Text>test_86868.txt</Text>
                    </Descriptions.Item>
                    <Descriptions.Item label={<Text strong>Owner</Text>}>
                      <Text>user01@yopmail.com</Text>
                    </Descriptions.Item>
                    <Descriptions.Item label={<Text strong>Created</Text>}>
                      <Text>30 Jun 2022 02:47:54</Text>
                    </Descriptions.Item>
                    <Descriptions.Item
                      label={<Text strong>Descriptions</Text>}
                      span={2}
                    >
                      <Text>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quisquam suscipit, quas adipisci cupiditate in
                        veniam perferendis animi officia
                      </Text>
                    </Descriptions.Item>
                    <Descriptions.Item
                      label={<Text strong>Last Activity</Text>}
                    >
                      <Text>30 Jun 2022 02:47:54</Text>
                    </Descriptions.Item>
                  </Descriptions>
                </Col>
                <Col span={8}>
                  <Row
                    gutter={[8, 8]}
                    style={{ flexDirection: "column", alignItems: "center" }}
                  >
                    <Col>
                      <SelectCustom
                        options={versionOption}
                        defaultValue="version1"
                        onChange={(value: any) => onSelect(value)}
                      />
                    </Col>
                    <Col>
                      <Image width={150} height={150} src={selectedQR.image} />
                    </Col>
                    <Col>
                      <Text>
                        <FileOutlined />
                        {selectedQR.text}
                      </Text>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </AlmostDarkCard>
            <Row gutter={[8, 8]} style={{ marginTop: 16 }}>
              <Col span={10}>
                <AlmostDarkCard bodyStyle={{ padding: 16 }}>
                  <Row justify={"space-between"}>
                    <Col>
                      <Text strong>Members</Text>
                    </Col>
                    <Col>
                      <DarkSearch
                        placeholder="Search for users"
                        onSearch={onSearch}
                        style={{ width: 200 }}
                      />
                    </Col>
                  </Row>
                  <Row style={{ marginTop: 10 }}>
                    <Col span={24}>
                      <Row
                        gutter={[8, 8]}
                        justify={"space-between"}
                        align={"middle"}
                        style={{ marginTop: 20 }}
                      >
                        <Col span={18}>
                          <Text>user1@yopmail.com</Text>
                        </Col>
                        <Col span={6}>
                          <Badge>Owner</Badge>
                        </Col>
                      </Row>
                      <Row
                        gutter={[8, 8]}
                        justify={"space-between"}
                        align={"middle"}
                        style={{ marginTop: 20 }}
                      >
                        <Col span={18}>
                          <Text>user1@yopmail.com</Text>
                        </Col>
                        <Col span={6}>
                          <Button size="small" danger type="primary">
                            Remove
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </AlmostDarkCard>
              </Col>
              <Col span={14}>
                <AlmostDarkCard bodyStyle={{ padding: 14 }}>
                  <Row justify={"space-between"} style={{ marginBottom: 20 }}>
                    <Col>
                      <Text strong>Version</Text>
                    </Col>
                    <Col>
                      <Badge>2</Badge>
                    </Col>
                  </Row>
                  <UploadFile uploadVersion={true} />
                  <Table
                    className="custom-table table-version"
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                  />
                </AlmostDarkCard>
              </Col>
            </Row>
          </Col>
          <Col span={6}>
          <AlmostDarkCard bodyStyle={{ padding: "24px" }} bordered={false} style={{ height: "100%" }}>
              <h3 className="title-audit">Audit log</h3>
              <div className="version-infor">
                <div className="item-version">
                  <DarkCard bodyStyle={{ padding: 16 }}>
                    <Title level={5}>Version 1</Title>
                    <Text>user1@yopmail.com</Text>
                    <WhiteDivider />
                    <Text>30 Jun 2022 02:47:54</Text>
                  </DarkCard>
                </div>
                <div className="item-version">
                  <DarkCard bodyStyle={{ padding: 16 }}>
                    <Title level={5}>Version 2</Title>
                    <Text>user1@yopmail.com</Text>
                    <WhiteDivider />
                    <Text>30 Jun 2022 02:47:54</Text>
                  </DarkCard>
                </div>
                <div className="item-version">
                  <DarkCard bodyStyle={{ padding: 16 }}>
                    <Title level={5}>Version 3</Title>
                    <Text>user1@yopmail.com</Text>
                    <WhiteDivider />
                    <Text>30 Jun 2022 02:47:54</Text>
                  </DarkCard>
                </div>
              </div>
            </AlmostDarkCard>
          </Col>
        </Row>
      </Layout>
    </Content>
  );
}

export default PageDetails;

const AlmostDarkCard = styled(Card)`
  border-radius: 3px;
  background-color: #394b59;
  border: none;
`;

const DarkCard = styled(Card)`
  border-radius: 3px;
  background-color: #293742;
  border: none;
`;

const WhiteDivider = styled(Divider)`
  margin: 3px 0px;
  background-color: #dfe4e8;
`;

const DarkSearch = styled(Search)`
  input,
  button {
    background-color: #293742;
    border-color: #293742;
    color: #dfe4e8;
  }
  input::placeholder {
    color: #dfe4e8;
  }
  svg {
    color: #dfe4e8;
  }
`;

const Badge = styled(Text)`
  background: #293742;
  padding: 5px;
  border-radius: 20px;
`;

const Title = styled(Typography.Title)`
  color: #dfe4e8 !important;
`;
