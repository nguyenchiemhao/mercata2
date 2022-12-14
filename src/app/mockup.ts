import QR from "./assets/images/QR.png";
import QR2 from "./assets/images/QR.png";

export interface DataType {
  key: string;
  file?: string;
  versions?: number;
  owner?: string;
  date_update?: string;
  date_active?: string;
  uploaded_by?: string;
  tag?: number;
}

export const versionOption = [
  {
    value: "version1",
    label: "Version 1",
    text: "e862dd7af4f62fe6d31a196fe6786fd",
    image: QR,
  },
  {
    value: "version2",
    label: "Version 2",
    text: "this is the image",
    image: QR2,
  },
];

export const initMembers = [
  {
    id: 1,
    user: "user1@yopmail.com",
    isOwner: true,
  },
  {
    id: 2,
    user: "user2@yopmail.com",
    isOwner: false,
  },
];

export const tableVersionData: DataType[] = [
  {
    key: "1",
    tag: 0,
    file: "test_888376.txt",
    versions: 1,
    owner: "owner",
    date_update: "22 Jun 2020 02:47:53",
    date_active: "22 Jun 2020 02:47:53",
    uploaded_by: "user1@yopmail.com",
  },
  {
    key: "2",
    tag: 0,
    file: "test_888376.txt",
    versions: 2,
    owner: "owner",
    date_update: "22 Jun 2020 02:47:53",
    date_active: "22 Jun 2020 02:47:53",
    uploaded_by: "user1@yopmail.com",
  },
];
