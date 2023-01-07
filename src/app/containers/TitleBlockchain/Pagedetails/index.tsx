import {
  Button,
  Col,
  Descriptions,
  Image,
  Layout,
  Row,
  Spin,
  Table,
  Typography,
} from "antd";
import { FileOutlined, CheckCircleOutlined } from "@ant-design/icons";
import "./index.css";
import UploadFile from "../../../component/UploadFile";
import { ColumnsType } from "antd/es/table";

import SelectCustom from "../../../component/SelectCustom";
import { useEffect, useState } from "react";
import {
  DataType,
  tableVersionData
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
import { Outlet, useParams } from "react-router-dom";
import { AuditLog, IList } from "../../../../model";
import customAxios from "../../../../services/customeAxios";
import { API } from "../../../../api";

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

function PageDetails() {
  const [selectedQR, setSelectedQR] = useState<any>({});
  const [versionOption, setVersionOption] = useState<any[]>([]);
  const [userData, setUserData] = useState<IList | undefined>(undefined);
  let { id } = useParams<"id">();
  const [members, setMembers] = useState<any[]>([]);
  const [auditLog, setAuditLog] = useState<AuditLog[]>([]);
  const [searchKey, setSearchKey] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  

  let membersFiltered = members.filter((x) => x.email.includes(searchKey));
  
  const onSearch = (value: string) => {
    setSearchKey(value);
  };

  const onSelect = (value: any) => {
    setSelectedQR(versionOption.find((x) => x.id === value));
  };

  const removeMember = async (id: any) => {
    setIsLoading(true);
    customAxios.delete(API + "/list_member/" + id).then((res) => {
      setIsLoading(false);
    });
    getMembers()
  };

  useEffect((): any => {
    setIsLoading(true);
    customAxios.get(API + "/list-file/" + id).then((res) => {
      setUserData(res.data);
      let versionOption: any[] = [];
      res.data.list_version.map((x: any) =>
        versionOption.push({
          value: x.id,
          label: "VERSION " + x.version,
          text: x.QR_code,
          ...x,
        })
      );
      setVersionOption(versionOption);
      setSelectedQR(versionOption[0]);
      setAuditLog(res.data.audit_log);
      setIsLoading(false);
    });
    getMembers();
  }, [id]);

  const getMembers = async () => {
    setIsLoading(true);
    await customAxios.get(API + "/list_member").then((res) => {
      setMembers(res.data);
      setIsLoading(false);
    });
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
                        <Text>{userData?.file_name}</Text>
                      </Descriptions.Item>
                      <Descriptions.Item label={<Text strong>Owner</Text>}>
                        <Text>{userData?.owner}</Text>
                      </Descriptions.Item>
                      <Descriptions.Item label={<Text strong>Created</Text>}>
                        <Text>{userData?.date_updated.toString()}</Text>
                      </Descriptions.Item>
                      <Descriptions.Item
                        label={<Text strong>Descriptions</Text>}
                        span={2}
                      >
                        <Text>{userData?.description}</Text>
                      </Descriptions.Item>
                      <Descriptions.Item
                        label={<Text strong>Last Activity</Text>}
                      >
                        <Text>{userData?.last_activity.toString()}</Text>
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
                        <Image
                          width={97}
                          height={97}
                          src={selectedQR.img_QR_code}
                        />
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
                        {membersFiltered.map((member: any) => (
                          <Row
                            key={member.id}
                            gutter={[8, 8]}
                            justify={"space-between"}
                            align={"middle"}
                            style={{ marginTop: 20 }}
                          >
                            <Col span={18}>
                              <Text>{member.email}</Text>
                            </Col>
                            <Col span={6} style={{ textAlign: "center" }}>
                              {member.permission === "owner" ? (
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
                style={{ minHeight: "calc(100vh - 145px)" }}
              >
                <h3 className="title-audit">Audit log</h3>
                <div className="version-infor">
                  {auditLog.map((log, index) => (
                    <div className="item-version" key={index}>
                      <DarkCard bodyStyle={{ padding: 16 }}>
                        <Title level={5}>Version {log.version_upload}</Title>
                        <Text>{log.auther}</Text>
                        <WhiteDivider />
                        <Text>{log.date_activity.toString()}</Text>
                      </DarkCard>
                    </div>
                  ))}
                </div>
              </AlmostDarkCard>
            </Col>
          </Row>
      </Layout>
      <Outlet />
      <Spin spinning={isLoading} />
    </Content>
);
}

export default PageDetails;
