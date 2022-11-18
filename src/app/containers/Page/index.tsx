import { Layout } from "antd";

const { Content } = Layout;

function Page() {
  return (
    <Content
      style={{ minHeight: "calc( 100vh - 64px )", padding: 15 }}
      className="site-layout-background"
    >
      page
    </Content>
  );
}

export default Page;
