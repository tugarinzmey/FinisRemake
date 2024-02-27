/* eslint-disable no-irregular-whitespace */
import styled from "styled-components";
import { StyledPageHeader } from "../styles/typography";
import { Flex } from "antd";
import { useTranslation } from "react-i18next";

const StyledLicensingPage = styled(Flex)`
  padding: 30px;
`;

export const Licensing = () => {
  const { i18n } = useTranslation();
  return (
    <StyledLicensingPage vertical gap={20}>
      <StyledPageHeader>
      {i18n.t("license_header")}:
      </StyledPageHeader>
      <Flex vertical>
        <div>
          2.1.1. {i18n.t("license_text1")};
        </div>
        <div>2.1.2.{i18n.t("license_text2")};</div>
        <div>2.1.3.{i18n.t("license_text3")};</div>
        <div>2.1.4.{i18n.t("license_text4")};</div>
        <div>
          2.1.5. {i18n.t("license_text5")}.
        </div>
        <div>
          2.1.6. {i18n.t("license_text6")}.
        </div>
        <div>
          2.2.{i18n.t("license_text7")}.
        </div>
        <div>
          2.3.{i18n.t("license_text8")}.
        </div>
        <div>
          2.4. {i18n.t("license_text9")}.
        </div>
        <div>
          2.5.{i18n.t("license_text10")}.
        </div>
        <div>
          2.7.{i18n.t("license_text11")}:
        </div>
      </Flex>
      <Flex vertical>
        <div>•{i18n.t("license_personal_data1")};</div>
        <div>•{i18n.t("license_personal_data2")};</div>
        <div>•{i18n.t("license_personal_data3")};</div>
        <div>•{i18n.t("license_personal_data4")};</div>
        <div>
          •{i18n.t("license_personal_data5")}
        </div>
      </Flex>
      <div>
      {i18n.t("license_text12")}.
      </div>
      <div>
      {i18n.t("license_text13")}.
      </div>
      <Flex>
        <h1>3.{i18n.t("license_text14")}</h1>
        <div>
          3.1. {i18n.t("license_text15")}.
        </div>
        <div>
          3.2.{i18n.t("license_text16")}.
        </div>
      </Flex>
    </StyledLicensingPage>
  );
};
