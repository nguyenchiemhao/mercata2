import {Layout, Spin} from "antd";
import PaginationCustom from "../../component/PaginationCustom";
import UploadFile from "../../component/UploadFile";
import List from "./components/List";
import "./style.css";
import {useEffect, useState} from "react";
import customAxios from "../../../services/customeAxios";
import {API} from "../../../api";
import {IList} from "../../../model";


const { Content } = Layout;

function BlockchainPage() {

  const [userData, setUserData] = useState<IList[]>([]);
  const [currentPage, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData(page:number) {
    setIsLoading(true)
    await customAxios.get(API + `/list-file?_page=${page}&_limit=2`).then((res) => {
      let data: any = [];
      res.data.map((x: any) => data.push({ key: x.id, ...x }));
      setUserData(data);
  })
    setIsLoading(false)
  }

  useEffect((): any => {
    fetchData(currentPage)
  }, [currentPage]);

  return (
    <Content
      style={{
        minHeight: "calc( 100vh - 50px )",
        padding: "15px 18px 15px 5px",
      }}
      className="site-layout-background"
    >
      <UploadFile uploadVersion={false} />

      <div className="wrap-table">
        {/* TITLE */}
        <h1>Files</h1>

        {/* TABLE LIST */}
        <List list={userData} />

      </div>

      {/* PAGINATION */}
      <PaginationCustom page={currentPage}
                        handleChange={(page) => setPage(page)}/>
      <Spin spinning={isLoading} />
    </Content>
  );
}

export default BlockchainPage;
