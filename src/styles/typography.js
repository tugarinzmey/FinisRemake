import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.h1`
  font-family: Gilroy-Bold;
  font-size: 36px;
  font-weight: 800;
  line-height: 43px;
  letter-spacing: 0.05em;
  text-align: left;
`;

export const OutlinedLink = styled(Link)`
  font-family: Gilroy-Light;
  font-size: 20px;
  font-weight: 300;
  line-height: 27px;
  letter-spacing: 0.06em;
  text-align: left;
  color: #000;
  text-decoration: underline;
`;

export const StyledPageHeader = styled.h1`
  text-align: center;
`;
