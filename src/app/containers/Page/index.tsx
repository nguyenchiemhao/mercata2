import { Layout } from "antd";
import PaginationCustom from "../../component/PaginationCustom";
import UploadFile from "../../component/UploadFile";
import List from "./List";
import "./style.css";

const { Content } = Layout;

function Page() {
  return (
    <Content
      style={{ minHeight: "calc( 100vh - 50px )", padding: "15px 5px"}}
      className="site-layout-background"
    >
      <UploadFile uploadVersion={false} />

      <div className="wrap-table">
        {/* TITLE */}
        <h1>Files</h1>

        {/* TABLE LIST */}
        <List />
      </div>

      {/* PAGINATION */}
      <PaginationCustom />
    </Content>
  );
}

export default Page;
