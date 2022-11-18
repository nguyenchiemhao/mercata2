import { Layout } from "antd";

const { Content } = Layout;

function PageDetails() {
  return (
    <Content
      style={{ minHeight: "calc( 100vh - 64px )", padding: 15 }}
      className="site-layout-background"
    >
      page details
    </Content>
  );
}

export default PageDetails;
