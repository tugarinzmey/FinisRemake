/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
import styled from "styled-components";
import { StyledPageHeader } from "../styles/typography";
import { Divider, Flex } from "antd";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const StyledContactsPage = styled(Flex)`
  padding: 30px;
`;

export const Contacts = () => {
  const { i18n } = useTranslation();
  return (
    <StyledContactsPage vertical gap={20} align="center">
      <StyledPageHeader>{i18n.t("Contact information")}</StyledPageHeader>
      <Flex vertical>
        <h1>{i18n.t("info")}:</h1>
        <div>344002, {i18n.t("adres")}.</div>
        <div>{i18n.t("phone")}: (863) 261-38-01</div>
        <div>WhatsApp: +7-903-47-43-777</div>
        <div>E-mail: research@inbox.ru</div>
        <div>
        {i18n.t("The web page")}: <Link to="">www.finis.rsue.ru</Link>
        </div>
        <div>
        {i18n.t("chuvak_info")}
        </div>
        <div>
        {i18n.t("zam_chuvak1_info")}
        </div>
        <div>
        {i18n.t("zam_chuvak2_info")}
        </div>
        <div>
        {i18n.t("secretary_info")}
        </div>
      </Flex>
      <Divider />
      <Flex vertical>
        <div>
        {i18n.t("adres2")}
        </div>
        <div>344002, {i18n.t("adres3")}.</div>
        <div>{i18n.t("phone")}: (863) 261-38-02, 261-38-77, 266-42-34</div>
        <div>E-mail: ipkrinh@gmail.com</div>
        <div>{i18n.t("ipc_redactor")}</div>
        <div>
        {i18n.t("Klimova")}
        </div>
      </Flex>
    </StyledContactsPage>
  );
};
