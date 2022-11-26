import BlockchainPage from "../app/containers/TitleBlockchain";
import PageDetails from "../app/containers/TitleBlockchain/Pagedetails";

export const ROUTES = [
  {
    title: "Home Page",
    path: "/",
    component: <BlockchainPage />,
  },
  {
    title: "Blockchain Page",
    path: "/blockchain",
    component: <BlockchainPage />,
  },
  {
    title: "Blockchain Page Details",
    path: "/blockchain/details",
    component: <PageDetails />,
  },
];
