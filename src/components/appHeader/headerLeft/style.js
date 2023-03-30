import styled from "styled-components";

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  .logo {
    margin-left: 10px;
    cursor: pointer;
    svg g {
      /* fill: var(--primary-color); */
      fill: ${(props) => props.theme.color.primaryColor};
    }
  }
`;
