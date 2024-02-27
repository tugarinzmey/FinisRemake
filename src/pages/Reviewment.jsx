/* eslint-disable no-irregular-whitespace */
import { StyledPageHeader } from "../styles/typography";
import { Flex } from "antd";
import { useTranslation } from "react-i18next";
import { PageWrapper } from "../components/PageWrapper";

export const Reviewment = () => {
  const { i18n } = useTranslation();
  return (
    <PageWrapper vertical gap={20}>
      <StyledPageHeader>{i18n.t("review_header")}</StyledPageHeader>
      <div>{i18n.t("review_text1")}</div>
      <Flex vertical>
        <div>• {i18n.t("review_text2")}.</div>
        <div>• {i18n.t("review_rules1")}:</div>
        <div>• {i18n.t("review_rules2")};</div>
        <div>• {i18n.t("review_rules3")};</div>
        <div>• {i18n.t("review_rules4")}.</div>
        <div>• {i18n.t("review_rules5")}.</div>
        <div>• {i18n.t("review_rules6")}:</div>
        <div>• {i18n.t("review_rules7")};</div>
        <div>• {i18n.t("review_rules8")};</div>
        <div>• {i18n.t("review_rules9")};</div>
        <div>• {i18n.t("review_rules10")}.</div>
        <div>• {i18n.t("review_rules11")}.</div>
      </Flex>
      <div>{i18n.t("review_text3")}.</div>
      <div>• {i18n.t("review_text4")}.</div>
      <div>• {i18n.t("review_text5")}.</div>
      <div>•{i18n.t("review_text6")}.</div>
      <div>• {i18n.t("review_text7")}.</div>
      <div>• {i18n.t("review_text8")}.</div>
      <div>• {i18n.t("review_text9")}.</div>
      <div>• {i18n.t("review_text10")}.</div>
      <Flex>
        <div>
          {i18n.t("review_chel")}: {i18n.t("review_chel_definition")}
        </div>
      </Flex>
    </PageWrapper>
  );
};
