import styled from "styled-components";
import Link from "../ui/Link";
export const HeaderWrapper = styled.header`
  background: #fff;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  grid-area: hd;
  grid-column-end: span 2;
  align-items: center;
  padding: 8px;
  color: #788b99;
  @media (max-width: 40em) {
    justify-content: center;
  }
`;

export const LogoLink = styled(Link)`
  display: block;
  font-size: 0;
`;
