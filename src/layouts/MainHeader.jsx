import { Flex, Image } from "antd";
import { Logo } from "../assets";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LanguagePicker } from "../components/LanguagePicker.jsx";
import { useTranslation } from "react-i18next";

const StyledHeader = styled.header`
  display: flex;
  background: #3f427c;
  padding: 0 20px;
`;

const StyledHeaderLink = styled(Link)`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  color: #fff;
  letter-spacing: 2px;
`;

const StyledLanguagePicker = styled(LanguagePicker)`
  width: 80px;
`;

export const MainHeader = () => {
  const { i18n } = useTranslation();

  return (
    <StyledHeader>
      <StyledHeaderLink to="/">
        <Image src={Logo} preview={false} />
      </StyledHeaderLink>
      <Flex align="center" flex={1} justify="space-around" wrap="wrap" gap={10}>
        <StyledHeaderLink to="/news">{i18n.t("news")}</StyledHeaderLink>
        <StyledHeaderLink to="/requirements">{i18n.t("requirements")}</StyledHeaderLink>
        <StyledHeaderLink to="/reviewment">{i18n.t("reviewment")}</StyledHeaderLink>
        <StyledHeaderLink to="/ethics">{i18n.t("ethics")}</StyledHeaderLink>
        <StyledHeaderLink to="/licensing">{i18n.t("licensing")}</StyledHeaderLink>
        <StyledHeaderLink to="/chief-editor">{i18n.t("editor")}</StyledHeaderLink>
        <StyledHeaderLink to="/collegium">{i18n.t("collegium")}</StyledHeaderLink>
        <StyledHeaderLink to="https://rsue.ru/">{i18n.t("RSUE")}</StyledHeaderLink>
        <StyledLanguagePicker />
      </Flex>
    </StyledHeader>
  );
};
