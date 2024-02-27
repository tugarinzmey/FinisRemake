/* eslint-disable no-irregular-whitespace */
import styled from "styled-components";
import { StyledPageHeader } from "../styles/typography";
import { Flex, Image } from "antd";
import { ChuvakImage } from "../assets";
import { useTranslation } from "react-i18next";

const StyledChiefPage = styled(Flex)`
  padding: 30px;
`;

export const ChiefEditor = () => {
  const { i18n } = useTranslation();
  return (
    <StyledChiefPage vertical gap={20} align="center">
      <StyledPageHeader>{i18n.t("chief_rules")}</StyledPageHeader>
      <Image src={ChuvakImage} preview={false} width={200} />
      <h1>
      {i18n.t("chuvak_definiton")}
      </h1>
      <StyledPageHeader>{i18n.t("shotout")}</StyledPageHeader>
      {i18n.t("chuvak_text")}
    </StyledChiefPage>
  );
};
