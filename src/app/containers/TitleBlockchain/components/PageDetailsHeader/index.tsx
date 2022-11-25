import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

function Header() {
  const navigate = useNavigate();

  return (
    <div
      style={{ height: 28, display: "flex", justifyContent: "space-between" }}
    >
      <Button
        type="primary"
        icon={<ArrowLeftOutlined />}
        onClick={() => navigate(-1)}
        style={{ background: "none", border: "none", boxShadow: "none" }}
      ></Button>

      <Button
        type="primary"
        style={{ background: "#394b59", boxShadow: "none" }}
      >
        Transfer Ownership
      </Button>
    </div>
  );
}

export default Header;
