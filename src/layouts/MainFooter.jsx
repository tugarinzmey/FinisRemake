import { Link } from "react-router-dom";
import { Flex } from "antd";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

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
  const { i18n } = useTranslation();
  return (
    <StyledFooter>
      <Flex gap={16}>
        <StyledFooterLink to="/contacts">{i18n.t("contacs")}</StyledFooterLink>
        <StyledFooterLink to="mailto:research@rsue.ru">E-mail</StyledFooterLink>
        <StyledFooterLink to="/archive" replace>
        {i18n.t("archive")}
        </StyledFooterLink>
      </Flex>
    </StyledFooter>
  );
};
