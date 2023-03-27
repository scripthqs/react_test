import styled from "styled-components";
import { primaryColor, largeSize } from "./style/variables";
export const AppWrapper = styled.div`
  .title {
    color: green;
    font-size: 50px;
    &:hover {
      background-color: ${(props) => props.color};
    }
  }
  .content {
    color: ${primaryColor};
    font-size: ${largeSize};
  }
`;
