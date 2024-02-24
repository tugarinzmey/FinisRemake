import { Link } from "react-router-dom";
import { Flex } from "antd";
import styled from "styled-components";

const StyledFooterLink = styled(Link)`
  font-size: 21px;
  font-weight: 400;
  color: #000;
  letter-spacing: 3;
`;

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #fff;
  padding: 20px;
`;

export const MainFooter = () => {
  return (
    <StyledFooter>
      <Flex gap={16}>
        <StyledFooterLink to="/contacts">Контакты</StyledFooterLink>
        <StyledFooterLink to="mailto:research@rsue.ru">E-mail</StyledFooterLink>
        <StyledFooterLink to="/archive" replace>
          Архив
        </StyledFooterLink>
      </Flex>
    </StyledFooter>
  );
};
