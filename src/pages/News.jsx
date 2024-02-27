/* eslint-disable no-irregular-whitespace */
import { Divider, Flex, Image } from "antd";
import styled from "styled-components";
import { ChuvakImage } from "../assets";
import { OutlinedLink } from "../styles/typography";
import { useTranslation } from "react-i18next";
import { PageWrapper } from "../components/PageWrapper";

const StyledChiefInfo = styled(Flex)`
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const News = () => {
  const { i18n } = useTranslation();
  return (
    <PageWrapper gap={20}>
      <StyledChiefInfo vertical>
        <Image src={ChuvakImage} preview={false} />
        <Flex vertical>
          <h1>{i18n.t("chuvak_news")}</h1>
          {i18n.t("chuvak_news_definiton")}
        </Flex>
      </StyledChiefInfo>
      <Flex vertical>
        <h1>{i18n.t("actual")}:</h1>
        <div>• {i18n.t("news_december")}</div>
        <div>• {i18n.t("news_april")}</div>
        <div>• {i18n.t("news_may")}</div>
        <div>• {i18n.t("news_september")}</div>
      </Flex>
      <Flex vertical>
        <h1>{i18n.t("subsc")}:</h1>
        <div>{i18n.t("subscribe")}:</div>
        <OutlinedLink to="https://podpiska.pochta.ru/">
          {i18n.t("post")}
        </OutlinedLink>
        <OutlinedLink to="https://ural-press.ru/">
          {i18n.t("press")}
        </OutlinedLink>
        <div>{i18n.t("redact_subs")}.</div>
        <Divider />

        <h1>{i18n.t("we_are")}:</h1>
        <div>{i18n.t("journal_able")}:</div>
        <OutlinedLink to="https://cyberleninka.ru/journal/n/finansovye-issledovaniya?i=1127838">
          {i18n.t("leninka")}
        </OutlinedLink>
        <OutlinedLink to="https://elibrary.ru/title_profile.asp?id=10488">
          eLibrary
        </OutlinedLink>
        <div>{i18n.t("or")}.</div>
        <Divider />
      </Flex>
    </PageWrapper>
  );
};
