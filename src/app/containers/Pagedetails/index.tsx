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
} from "@ant-design/icons";
import styled from "styled-components";
import UploadFile from "../../component/UploadFile";
import { DataType } from "../Page/List";
import { ColumnsType } from "antd/es/table";
import { useNavigate } from "react-router-dom";

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
      ></Button>

      <Button type="primary">Transfer Ownership</Button>
    </div>
  );
}

const data: DataType[] = [
  {
    key: "1",
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
    title: "Version",
    dataIndex: "versions",
    key: "version",
  },
  {
    title: "Uploaded by",
    dataIndex: "uploaded_by",
    key: "uploaded_by",
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space.Compact block>
        <Button type="primary" ghost style={{ width: 100, color: "#dfe4e8" }}>
          Attest
        </Button>
        <Button type="primary" style={{ width: 100 }}>
          Download
        </Button>
      </Space.Compact>
    ),
  },
];

const onSearch = (value: string) => console.log(value);

function PageDetails() {
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
          style={{ position: "relative", height: "100%", marginTop: 10 }}
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
                      <Select
                        defaultValue="lucy"
                        size="small"
                        style={{ width: 120 }}
                        options={[
                          {
                            value: "version1",
                            label: "Version 1",
                          },
                          {
                            value: "version2",
                            label: "Version 2",
                          },
                        ]}
                      />
                    </Col>
                    <Col>
                      <Image
                        width={150}
                        height={150}
                        src="error"
                        fallback="data:image/png;base64,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"
                      />
                    </Col>
                    <Col>
                      <Text>
                        <FileOutlined />
                        This is a text.
                      </Text>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </AlmostDarkCard>
            <Row gutter={[8, 8]} style={{ marginTop: 16 }}>
              <Col span={11}>
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
                        style={{ marginTop: 10 }}
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
                        style={{ marginTop: 10 }}
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
              <Col span={13}>
                <AlmostDarkCard>
                  <Row justify={"space-between"} style={{ marginBottom: 20 }}>
                    <Col>
                      <Text strong>Version</Text>
                    </Col>
                    <Col>
                      <Badge>2</Badge>
                    </Col>
                  </Row>
                  <UploadFile />
                  <Table
                    className="custom-table"
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                  />
                </AlmostDarkCard>
              </Col>
            </Row>
          </Col>
          <Col span={6}>
            <AlmostDarkCard bordered={false} style={{ height: "100%" }}>
              <Timeline>
                <Timeline.Item
                  style={{ background: "none" }}
                  dot={<InfoCircleOutlined />}
                >
                  <DarkCard bodyStyle={{ padding: 16 }}>
                    <Text strong>Version 1</Text>
                    <Text>user1@yopmail.com</Text>
                    <WhiteDivider />
                    <Text>30 Jun 2022 02:47:54</Text>
                  </DarkCard>
                </Timeline.Item>
                <Timeline.Item dot={<InfoCircleOutlined />}>
                  <DarkCard bodyStyle={{ padding: 16 }}>
                    <Text strong>Version 2</Text>
                    <Text>user1@yopmail.com</Text>
                    <WhiteDivider />
                    <Text>30 Jun 2022 02:47:54</Text>
                  </DarkCard>
                </Timeline.Item>
                <Timeline.Item dot={<InfoCircleOutlined />}>
                  <DarkCard bodyStyle={{ padding: 16 }}>
                    <Text strong>Version 3</Text>
                    <Text>user1@yopmail.com</Text>
                    <WhiteDivider />
                    <Text>30 Jun 2022 02:47:54</Text>
                  </DarkCard>
                </Timeline.Item>
              </Timeline>
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
  background-color: dfe4e8;
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
