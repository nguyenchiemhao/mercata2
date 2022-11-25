import { Divider, Input, Typography } from "antd";
import Card from "antd/es/card/Card";
import styled from "styled-components";

const { Search } = Input;
const { Text } = Typography;

export const AlmostDarkCard = styled(Card)`
  border-radius: 3px;
  background-color: #394b59;
  border: none;
`;

export const DarkCard = styled(Card)`
  border-radius: 3px;
  background-color: #293742;
  border: none;
`;

export const WhiteDivider = styled(Divider)`
  margin: 3px 0px;
  background-color: #dfe4e8;
`;

export const DarkSearch = styled(Search)`
  input,
  button {
    background-color: #293742;
    border-color: #293742;
    color: #dfe4e8;
    font-size: 11px;
  }
  input::placeholder {
    color: #dfe4e8;
  }
  svg {
    color: #dfe4e8;
  }
`;

export const Badge = styled(Text)`
  background: #293742;
  padding: 5px;
  border-radius: 20px;
`;

export const Title = styled(Typography.Title)`
  color: #dfe4e8 !important;
`;
