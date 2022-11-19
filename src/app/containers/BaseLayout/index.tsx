import React from "react";
import { Layout, Menu } from "antd";
import { Routes, Route } from "react-router-dom";
import Page from "../Page";
import PageDetails from "../Pagedetails";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import SelectCustom from "../../component/SelectCustom";
import { useNavigate } from "react-router-dom";

const { Header, Sider } = Layout;

const BaseLayout = () => {
  const navigate = useNavigate();

  const onClick = (e: any) => {
    return navigate(e.key);
  };
  return (
    <Layout>
      <Header
        className="header"
        style={{ position: "sticky", top: 0, zIndex: 1 }}
      >
        <div className="logo">
          <img
            src={require("../../assets/images/logo.svg").default}
            alt="logo"
          />
          Mercata Document Management
        </div>

        <div className="content-center">
          <SelectCustom />
          <span>STRATO 7.7.1-b42a1959f</span>
          <p>
            Prometheus Graphs<span>demo.@gmail.com</span>
          </p>
        </div>

        <button className="btn-auth">Logout</button>
      </Header>
      <Layout>
        <Sider
          width={319}
          className="site-layout-background"
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 53,
            bottom: 0,
          }}
        >
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            onClick={onClick}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "Dashboard",
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "Chains",
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "Blocks",
              },
              {
                key: "4",
                icon: <UploadOutlined />,
                label: "Transactions",
              },
              {
                key: "5",
                icon: <UploadOutlined />,
                label: "Accounts",
              },
              {
                key: "6",
                icon: <UploadOutlined />,
                label: "Contracts",
              },
              {
                key: "/page",
                icon: <UploadOutlined />,
                label: "Mercata Title Blockchain",
              },
            ]}
          />

          <img
            className="logo-sidebar"
            src={require("../../assets/images/logo-sidebar.svg").default}
            alt="logo"
          />
        </Sider>
        <Layout style={{ marginLeft: 319, height: "100%" }}>
          <Routes>
            <Route path="/" element={<div>home</div>}></Route>
            <Route path="/page" element={<Page />} />
            <Route path="/page/details" element={<PageDetails />} />
          </Routes>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
