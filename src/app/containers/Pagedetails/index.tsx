import {
  Button,
  Card,
  Col,
  Descriptions,
  Divider,
  Image,
  Layout,
  Row,
  Select,
  Steps,
  Timeline,
  Typography,
} from "antd";
import {
  ArrowLeftOutlined,
  FileOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const { Content } = Layout;
const { Paragraph, Text } = Typography;

function Header() {
  return (
    <div
      style={{ height: 40, display: "flex", justifyContent: "space-between" }}
    >
      <Button type="primary" icon={<ArrowLeftOutlined />}></Button>

      <Button type="primary">Transfer Ownership</Button>
    </div>
  );
}

function CustomLayout(props: any) {
  const { children } = props;
  return (
    <div
      style={{ height: 40, display: "flex", justifyContent: "space-between" }}
    >
      {children}
    </div>
  );
}

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
        <Row gutter={[8, 8]} style={{ position: "relative", height: "100%" }}>
          <Col span={18}>
            <Card
              bordered={false}
              style={{ borderRadius: 3, background: "#394B59" }}
            >
              <Row>
                <Col span={16}>
                  <Descriptions
                    size="small"
                    title={<Text>User Info</Text>}
                    layout="vertical"
                    labelStyle={{ color: "white" }}
                  >
                    <Descriptions.Item label="File Name">
                      <Text>test_86868.txt</Text>
                    </Descriptions.Item>
                    <Descriptions.Item label="Owner">
                      <Text>user01@yopmail.com</Text>
                    </Descriptions.Item>
                    <Descriptions.Item label="Created">
                      <Text>30 Jun 2022 02:47:54</Text>
                    </Descriptions.Item>
                    <Descriptions.Item label="Descriptions" span={2}>
                      <Text>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quisquam suscipit, quas adipisci cupiditate in
                        veniam perferendis animi officia exercitationem culpa
                        atque nesciunt numquam excepturi tempora optio quasi
                        quaerat eligendi. Voluptas.
                      </Text>
                    </Descriptions.Item>
                    <Descriptions.Item label="Last Activity">
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
                        width={200}
                        height={200}
                        src="error"
                        fallback="data:image/png;base64,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"
                      />
                    </Col>
                    <Col>
                      <Paragraph>
                        {" "}
                        <FileOutlined />
                        This is a text.
                      </Paragraph>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              bordered={false}
              style={{ borderRadius: 3, background: "#394B59", height: "100%" }}
            >
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
            </Card>
          </Col>
        </Row>
      </Layout>
    </Content>
  );
}

export default PageDetails;

const DarkCard = styled(Card)`
  border-radius: 3;
  background-color: #293742;
  border: none;
`;

const WhiteDivider = styled(Divider)`
  margin: 3px 0px;
  background-color: white;
`;
