import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { Routes, Route } from "react-router-dom";
import Page from "../Page";
import PageDetails from "../Pagedetails";

const { Header, Sider } = Layout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key: any = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey: any = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const BaseLayout = () => (
  <Layout>
    <Header
      className="header"
      style={{ position: "sticky", top: 0, zIndex: 1 }}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items1}
      />
    </Header>
    <Layout>
      <Sider
        width={200}
        className="site-layout-background"
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 64,
          bottom: 0,
        }}
      >
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
          items={items2}
        />
      </Sider>
      <Layout style={{ marginLeft: 200, height: "100%" }}>
        <Routes>
          <Route path="/" element={<div>home</div>}></Route>
          <Route path="/page" element={<Page />} />
          <Route path="/page/details" element={<PageDetails />} />
        </Routes>
      </Layout>
    </Layout>
  </Layout>
);

export default BaseLayout;
