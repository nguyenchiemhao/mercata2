import React from "react";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";
import uploadSGV from "../../assets/images/upload.svg";

const { Dragger } = Upload;

const prop: UploadProps = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

interface IProps {
  uploadVersion?: boolean;
}
const UploadFile = ({ uploadVersion = false }: IProps) => (
  <Dragger {...prop}>
    {uploadVersion ? (
      <div className="drag-upload upload-version">
        <div className="wrap-upload">
          <button>Add new version</button>
          <p>or drop file to upload</p>
        </div>
      </div>
    ) : (
      <div className="drag-upload">
        <img src={uploadSGV} alt="icon-upload" />
        <div className="wrap-upload">
          <button>Select file</button>
          <p>or drop file to upload</p>
        </div>
      </div>
    )}
  </Dragger>
);

export default UploadFile;
