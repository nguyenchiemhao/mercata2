import {
  Button,
  Col,
  Descriptions,
  Image,
  Layout,
  Row,
  Table,
  Typography,
} from "antd";
import { FileOutlined, CheckCircleOutlined } from "@ant-design/icons";
import "./index.css";
import UploadFile from "../../../component/UploadFile";
import { ColumnsType } from "antd/es/table";

import SelectCustom from "../../../component/SelectCustom";
import { useState } from "react";
import {
  DataType,
  initMembers,
  tableVersionData,
  versionOption,
} from "../../../mockup";
import {
  AlmostDarkCard,
  Badge,
  DarkCard,
  DarkSearch,
  Title,
  WhiteDivider,
} from "./styles";
import Header from "../components/PageDetailsHeader";
import { Outlet } from "react-router-dom";

const { Content } = Layout;
const { Text } = Typography;

const columns: ColumnsType<DataType> = [
  {
    title: <CheckCircleOutlined />,
    dataIndex: "versions",
    key: "amount",
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
    align: "right",
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
            fontSize: 11,
            padding: "9px 10px",
            display: "inline-flex",
            alignItems: "center",
            height: "27px",
          }}
        >
          Attest
        </Button>
        <Button
          size="small"
          type="primary"
          style={{
            background: "#3452ff",
            border: "none",
            fontSize: 11,
            padding: "9px 10px",
            display: "inline-flex",
            alignItems: "center",
            height: "27px",
          }}
        >
          Download
        </Button>
      </>
    ),
  },
];

const onSearch = (value: string) => console.log(value);

function PageDetails() {
  const [selectedQR, setSelectedQR] = useState<any>(versionOption[0]);
  const [members, setMembers] = useState<any>(initMembers);

  const onSelect = (value: any) => {
    setSelectedQR(versionOption.find((x) => x.value === value));
  };

  const removeMember = (id: any) => {
    setMembers(members.filter((x: any) => x.id !== id));
  };

  return (
    <Content
      style={{
        minHeight: "calc( 100vh - 64px )",
        padding: "4px 18px 15px 13px",
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
                      <Image width={97} height={97} src={selectedQR.image} />
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
                        style={{
                          width: 150,
                        }}
                      />
                    </Col>
                  </Row>
                  <Row style={{ marginTop: 10 }}>
                    <Col span={24}>
                      {members.map((member: any) => (
                        <Row
                          key={member.id}
                          gutter={[8, 8]}
                          justify={"space-between"}
                          align={"middle"}
                          style={{ marginTop: 20 }}
                        >
                          <Col span={18}>
                            <Text>{member.user}</Text>
                          </Col>
                          <Col span={6} style={{ textAlign: "center" }}>
                            {member.isOwner ? (
                              <Badge>Owner</Badge>
                            ) : (
                              <Button
                                size="small"
                                danger
                                type="primary"
                                onClick={() => removeMember(member.id)}
                              >
                                Remove
                              </Button>
                            )}
                          </Col>
                        </Row>
                      ))}
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
                      <span className="number-version">2</span>
                    </Col>
                  </Row>
                  <UploadFile uploadVersion={true} />
                  <Table
                    className="custom-table table-version"
                    columns={columns}
                    dataSource={tableVersionData}
                    pagination={false}
                  />
                </AlmostDarkCard>
              </Col>
            </Row>
          </Col>
          <Col span={6}>
            <AlmostDarkCard
              bodyStyle={{ padding: "24px" }}
              bordered={false}
              style={{ height: "calc(100vh - 107px)" }}
            >
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
      <Outlet />
    </Content>
  );
}

export default PageDetails;
