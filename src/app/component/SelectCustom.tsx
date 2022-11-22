import React from "react";
import { Select } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

// const onChange = (value: string) => {
//   console.log(`selected ${value}`);
// };

const SelectCustom = (props:any) => {
  const { options=[], placeholder="select" } = props
  return (
    <div className="custom-select">
      <Select
        suffixIcon={<CaretDownOutlined style={{ color: '#BFCCD6' }}/>}
        popupClassName="custom-popup"
        optionFilterProp="children"
        placeholder={placeholder}
        onChange={props?.onChange}
        options={options}
        {...props}
      />
    </div>
  );
};

export default SelectCustom;
