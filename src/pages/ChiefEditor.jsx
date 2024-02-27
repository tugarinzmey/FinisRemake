/* eslint-disable no-irregular-whitespace */
import { StyledPageHeader } from "../styles/typography";
import { Image } from "antd";
import { ChuvakImage } from "../assets";
import { useTranslation } from "react-i18next";
import { PageWrapper } from "../components/PageWrapper";

export const ChiefEditor = () => {
  const { i18n } = useTranslation();
  return (
    <PageWrapper vertical gap={20} align="center">
      <StyledPageHeader>{i18n.t("chief_rules")}</StyledPageHeader>
      <Image src={ChuvakImage} preview={false} width={200} />
      <h1 style={{ textAlign: "center" }}>{i18n.t("chuvak_definiton")}</h1>
      <StyledPageHeader>{i18n.t("shotout")}</StyledPageHeader>
      {i18n.t("chuvak_text")}
    </PageWrapper>
  );
};
