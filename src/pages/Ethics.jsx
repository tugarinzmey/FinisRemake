/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
import styled from "styled-components";
import { StyledPageHeader } from "../styles/typography";
import { Flex } from "antd";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PageWrapper } from "../components/PageWrapper";
const StyledUsefulContentContainer = styled(Flex)`
  margin-left: 10px;
`;

export const Ethics = () => {
  const { i18n } = useTranslation();
  return (
    <PageWrapper vertical gap={20}>
      <StyledPageHeader>{i18n.t("ethicks_header")}</StyledPageHeader>
      <div>{i18n.t("ethicks_text1")}</div>
      <Flex vertical>
        <h1>{i18n.t("ethics_avoid_")}:</h1>
        <div>• {i18n.t("ethics_avoid1_")}.</div>
        <div>• П{i18n.t("ethics_avoid2_")}</div>
        <div>• {i18n.t("ethics_avoid3_")}</div>
        <div>• {i18n.t("ethics_avoid4_")}</div>
      </Flex>
      <Flex vertical>
        <h1>{i18n.t("ethics_useful")}:</h1>
        <div>• {i18n.t("ethics_useful1")}.</div>
        <div>•{i18n.t("ethics_useful2")}:</div>
        <StyledUsefulContentContainer vertical>
          <div>
            • {i18n.t("ethics_useful3_part1")}.{" "}
            <Link to="https://www.rsl.ru/ru/root3444/root34443448/">
              {i18n.t("ethics_useful3_part2")}
            </Link>{" "}
            {i18n.t("ethics_useful3_part3")}
          </div>
          <div>
            •{" "}
            <Link to="https://elibrary.ru/">
              {i18n.t("ethics_useful4_part1")}
            </Link>{" "}
            - {i18n.t("ethics_useful4_part2")}
          </div>
          <div>
            • {i18n.t("ethics_useful5_part1")}{" "}
            <Link to="https://taylorandfrancis.com/">Taylor & Francis</Link>{" "}
            {i18n.t("ethics_useful5_part2")}
          </div>
          <div>
            • {i18n.t("ethics_useful6_part1")}{" "}
            <Link to="https://journals.sagepub.com/">SAGE</Link>.{" "}
            {i18n.t("ethics_useful6_part2")}
          </div>
          <div>
            • {i18n.t("ethics_useful7_part1")}{" "}
            <Link to="https://search.ebscohost.com/">EBSCO</Link>,{" "}
            {i18n.t("ethics_useful7_part2")}
          </div>
          <div>
            • {i18n.t("journal")} 
            <Link to="https://www.nature.com/">Nature.</Link>
          </div>
          <div>
            •{i18n.t("journal")}  
            <Link to="https://www.science.org/">Science</Link>
            {i18n.t("journal_part2")}
          </div>
          <div>
            • {i18n.t("ethics_useful8")}{" "}
            <Link to="https://academic.oup.com/journals/">
              Oxford University Press
            </Link>
          </div>
          <div>
            •{" "}
            <Link to="https://www.cambridge.org/core/product/identifier//type/BOOK">
              Cambridge University Press 
            </Link>{" "}
            {i18n.t("ethics_useful9")}
          </div>
          <div>
            •{" "}
            <Link to="http://www.berlin.iz-soz.de/">
              {i18n.t("ethics_useful10_part1")}
            </Link>
            {i18n.t("ethics_useful10_part2")}.
          </div>
          <div>
            • {i18n.t("ethics_useful11_part1")} 
            <Link to="https://inion.ru/index15.php">
               {i18n.t("ethics_useful11_part2")}
            </Link>
            .
          </div>
          <div>
            • <Link to="https://metapress.com/">SpringerLink</Link> –{" "}
            {i18n.t("ethics_useful12")}
          </div>
          <div>• {i18n.t("ethics_useful13")}</div>
        </StyledUsefulContentContainer>
      </Flex>
    </PageWrapper>
  );
};
