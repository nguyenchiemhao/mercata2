import React from "react";
import { Layout, Menu } from "antd";
import { Routes, Route } from "react-router-dom";
import Page from "../Page";
import './index.css'
import PageDetails from "../Pagedetails";
import SelectCustom from "../../component/SelectCustom";
import { useNavigate } from "react-router-dom";

const { Header, Sider } = Layout;

const optionsFile: any[] = [
  {
      value: 'Product-723712-chain',
      label: 'Product-723712-chain',
  },
  {
      value: 'Product-000000-chain',
      label: 'Product-000000-chain',
  }
]

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
          <span  className="line"/>
          <SelectCustom options={optionsFile} defaultValue="Product-723712-chain"/>
          <span  className="line"/>
          <span>STRATO 7.7.1-b42a1959f</span>
          <span  className="line"/>
          <p className="nick-name">
            Prometheus Graphs<span>demo.@gmail.com</span>
          </p>
        </div>

        <button className="btn-auth">Logout</button>
      </Header>
      <Layout>
        <Sider
          width={300}
          className="site-layout-background"
          style={{
            overflow: "auto",
            height: "calc(100vh - 107px)",
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
                icon: <img src = {require("../../assets/images/icon-menu-1.svg").default} alt = "icon-menu" />,
                label: "Dashboard",
              },
              {
                key: "2",
                icon: <img src = {require("../../assets/images/icon-menu-2.svg").default} alt = "icon-menu" />,
                label: "Chains",
              },
              {
                key: "3",
                icon: <img src = {require("../../assets/images/icon-menu-3.svg").default} alt = "icon-menu" />,
                label: "Blocks",
              },
              {
                key: "4",
                icon: <img src = {require("../../assets/images/icon-menu-4.svg").default} alt = "icon-menu" />,
                label: "Transactions",
              },
              {
                key: "5",
                icon: <img src = {require("../../assets/images/icon-menu-5.svg").default} alt = "icon-menu" />,
                label: "Accounts",
              },
              {
                key: "6",
                icon: <img src = {require("../../assets/images/icon-menu-6.svg").default} alt = "icon-menu" />,
                label: "Contracts",
              },
              {
                key: "7",
                icon: <img src = {require("../../assets/images/icon-menu-7.svg").default} alt = "icon-menu" />,
                label: "Contract Editor",
              },
              {
                key: "/page",
                icon: <img src = {require("../../assets/images/icon-menu-8.svg").default} alt = "icon-menu" />,
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
        <Layout style={{ marginLeft: 300, height: "100%" }}>
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
