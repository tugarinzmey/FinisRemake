import { StyledPageHeader } from "../styles/typography";
import { Flex } from "antd";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const StyledCollegiumPage = styled(Flex)`
  padding: 30px 50px;
`;

const CollegiumMember = ({ fullname, children }) => {
  return (
    <li>
      <strong>{fullname}</strong>, {children}
    </li>
  );
};

export const Collegium = () => {
  const { i18n } = useTranslation();
  return (
    <StyledCollegiumPage vertical gap={20}>
      <StyledPageHeader>{i18n.t("collegium_members")}:</StyledPageHeader>
      <ol>
        <CollegiumMember fullname={i18n.t("member1")}>
        {i18n.t("member1_definition")}
        </CollegiumMember>
        <CollegiumMember fullname={i18n.t("member2")}>
        {i18n.t("member2_definition")}
        </CollegiumMember>
        <CollegiumMember fullname={i18n.t("member3")}>
        {i18n.t("member3_definition")}
        </CollegiumMember>
        <CollegiumMember fullname={i18n.t("member4")}>
        {i18n.t("member4_definition")}
        </CollegiumMember>
        <CollegiumMember fullname={i18n.t("member5")}>
        {i18n.t("member5_definition")}
        </CollegiumMember>
        <CollegiumMember fullname={i18n.t("member6")}>
        {i18n.t("member6_definition")}
        </CollegiumMember>
        <CollegiumMember fullname={i18n.t("member7")}>
        {i18n.t("member7_definition")}
        </CollegiumMember>
        <CollegiumMember fullname={i18n.t("member8")}>
        {i18n.t("member8_definition")}
        </CollegiumMember>
        <CollegiumMember fullname={i18n.t("member9")}>
        {i18n.t("member9_definition")}
        </CollegiumMember>
        <CollegiumMember fullname={i18n.t("member10")}>
        {i18n.t("member10_definition")}
        </CollegiumMember>
        <CollegiumMember fullname={i18n.t("member11")}>
        {i18n.t("member11_definition")}
        </CollegiumMember>
        <CollegiumMember fullname={i18n.t("member12")}>
        {i18n.t("member12_definition")}
        </CollegiumMember>
        <CollegiumMember fullname={i18n.t("member13")}>
        {i18n.t("member13_definition")}
        </CollegiumMember>
        <CollegiumMember fullname={i18n.t("member14")}>
        {i18n.t("member14_definition")}
        </CollegiumMember>
        <CollegiumMember fullname={i18n.t("member15")}>
        {i18n.t("member15_definition")}
        </CollegiumMember>
        <CollegiumMember fullname={i18n.t("member16")}>
        {i18n.t("member16_definition")}
        </CollegiumMember>
        <CollegiumMember fullname={i18n.t("member17")}>
        {i18n.t("member17_definition")}
        </CollegiumMember>
        <CollegiumMember fullname={i18n.t("member18")}>
        {i18n.t("member18_definition")}
        </CollegiumMember>
        <CollegiumMember fullname={i18n.t("member19")}>
        {i18n.t("member19_definition")}
        </CollegiumMember>
        <CollegiumMember fullname={i18n.t("member20")}>
        {i18n.t("member20_definition")}
        </CollegiumMember>
        <CollegiumMember fullname={i18n.t("member21")}>
        {i18n.t("member21_definition")}
        </CollegiumMember>
        <CollegiumMember fullname={i18n.t("member22")}>
        {i18n.t("member22_definition")}
        </CollegiumMember>
        <CollegiumMember fullname={i18n.t("member23")}>
        {i18n.t("member23_definition")}
        </CollegiumMember>
        <CollegiumMember fullname={i18n.t("member24")}>
        {i18n.t("member24_definition")}
        </CollegiumMember>
        <CollegiumMember fullname={i18n.t("member25")}>
        {i18n.t("member25_definition")}
        </CollegiumMember>
      </ol>
    </StyledCollegiumPage>
  );
};
