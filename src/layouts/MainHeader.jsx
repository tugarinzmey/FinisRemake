import { Button, Flex } from "antd";
import { Logo } from "../assets";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LanguagePicker } from "../components/LanguagePicker.jsx";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const StyledHeader = styled.header`
  display: flex;
  background: #3f427c;
  padding: 10px 20px;
  height: 100px;
`;

const StyledHeaderLink = styled(Link)`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  color: #fff;
  letter-spacing: 2px;
`;

const StyledBurgerMenu = styled(Flex)`
  position: relative;
  background-color: #3f427c;
  padding-bottom: 10px;
`;

const StyledLinks = styled(Flex)`
  width: 100%;
  gap: 10px;
  flex-wrap: wrap;
  padding: 0 10px;
  @media (max-width: 769px) {
    display: none;
  }
`;

const StyledBurgerMenuButton = styled(Button)`
  @media (min-width: 770px) {
    display: none;
  }
`;

const StyledContentContainer = styled(Flex)`
  /* align-items: center; */
  @media (max-width: 770px) {
    /* align-items: flex-end; */
    justify-content: flex-end;
  }
`;

const Links = () => {
  const { i18n } = useTranslation();
  return (
    <>
      <StyledHeaderLink to="/news">{i18n.t("news")}</StyledHeaderLink>
      <StyledHeaderLink to="/requirements">
        {i18n.t("requirements")}
      </StyledHeaderLink>
      <StyledHeaderLink to="/reviewment">
        {i18n.t("reviewment")}
      </StyledHeaderLink>
      <StyledHeaderLink to="/ethics">{i18n.t("ethics")}</StyledHeaderLink>
      <StyledHeaderLink to="/licensing">{i18n.t("licensing")}</StyledHeaderLink>
      <StyledHeaderLink to="/chief-editor">{i18n.t("editor")}</StyledHeaderLink>
      <StyledHeaderLink to="/collegium">{i18n.t("collegium")}</StyledHeaderLink>
      <StyledHeaderLink to="https://rsue.ru/">
        {i18n.t("RSUE")}
      </StyledHeaderLink>
    </>
  );
};

export const MainHeader = () => {
  const [burgerMenuOpened, setBurgerMenuOpened] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuOpened(!burgerMenuOpened);
  };

  return (
    <>
      <StyledHeader>
        <StyledHeaderLink to="/">
          <img src={Logo} style={{ position: "relative", bottom: "10px" }} />
        </StyledHeaderLink>
        <StyledContentContainer
          align="center"
          flex={1}
          justify="space-around"
          wrap="wrap"
          gap={10}
        >
          <StyledLinks align="center" justify="space-around">
            <Links />
            <LanguagePicker />
          </StyledLinks>
          <StyledBurgerMenuButton
            icon={<MenuOutlined />}
            onClick={toggleBurgerMenu}
          />
        </StyledContentContainer>
      </StyledHeader>
      {burgerMenuOpened && (
        <StyledBurgerMenu vertical gap={20} align="center">
          <Links />
          <LanguagePicker />
        </StyledBurgerMenu>
      )}
    </>
  );
};
