/* eslint-disable no-irregular-whitespace */
import { Flex, Image } from "antd";
import { StyledHeader } from "../styles/typography";
import {
  BuildingImage,
  MinObrLogo,
  ElibLogo,
  CrossRefImage,
} from "../assets/index";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const StyledTitleContainer = styled.div`
  background: #353980;
  border-radius: 30px;
  color: #fff;
  padding: 20px;
  width: 350px;
  font-family: Gilroy-Light;
  font-size: 24px;
  display: flex;
`;

const StyledContentContainer = styled(Flex)`
  flex-direction: column;
  padding: 50px;
  gap: 20px;
  width: 100vw;
`;

const StyledBigImage = styled(Image)`
  @media (max-width: 1000px) {
    display: none;
  }
`;

const StyledDescriptionWrapper = styled(Flex)`
  width: 100%;
  justify-content: center;
`;

const StyledDescription = styled.div`
  margin: 100px 0;
  font-family: Gilroy-Medium;
  font-size: 25px;
  font-weight: 500;
  line-height: 35px;
  letter-spacing: 0.08em;
  text-align: center;
  width: 60%;
`;

const Timeline = styled.div`
  font-family: Gilroy-Light;
  font-size: 22px;
  font-weight: 600;
  line-height: 29px;
  letter-spacing: 0.1em;
  color: #fff;
  padding: 20px 40px;
  width: 60%;
  display: flex;
  margin-bottom: 30px;
  gap: 10px;
  overflow-x: auto;
`;

const StyledLeftTimeline = styled(Timeline)`
  background: #353980;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
`;

const StyledRightTimeline = styled(Timeline)`
  float: right;
  background: #8fc73f;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  text-align: right;
`;

const TimelineContainer = styled.div`
  width: 100%;
`;

export const MainPage = () => {
  const { i18n } = useTranslation();
  return (
    <Flex vertical>
      <Flex>
        <StyledContentContainer>
          <StyledHeader>{i18n.t("fin_research")}</StyledHeader>
          <StyledTitleContainer>
          {i18n.t("journal_definition")}
          </StyledTitleContainer>
          {i18n.t("journal_info")}
          <Flex gap={20}>
            <Link to="https://vak.minobrnauki.gov.ru/documents#tab=_tab:editions~">
              <Image src={MinObrLogo} preview={false} />
            </Link>
            <Link>
              <Image src={ElibLogo} preview={false} />
            </Link>
            <Link>
              <Image src={CrossRefImage} preview={false} />
            </Link>
          </Flex>
        </StyledContentContainer>
        <StyledBigImage src={BuildingImage} preview={false} />
      </Flex>
      <Flex vertical>
        <StyledDescriptionWrapper>
          <StyledDescription>
          {i18n.t("main_text1")}
          </StyledDescription>
        </StyledDescriptionWrapper>
        <TimelineContainer>
          <StyledLeftTimeline>
          {i18n.t("main_text2")}
          </StyledLeftTimeline>
          <StyledRightTimeline>
          {i18n.t("main_text3")}
          </StyledRightTimeline>
          <StyledLeftTimeline>
            <Flex vertical>
              <div>{i18n.t("main_categories")}:</div>
              <div>• {i18n.t("main_category1")};</div>
              <div>• {i18n.t("main_category2")};</div>
              <div>• {i18n.t("main_category3")};</div>
              <div>• {i18n.t("main_category4")};</div>
              <div>• {i18n.t("main_category5")};</div>
              <div>• {i18n.t("main_category6")};</div>
            </Flex>
            <Flex vertical>
              <div>• {i18n.t("main_category7")};</div>
              <div>• {i18n.t("main_category8")};</div>
              <div>• {i18n.t("main_category9")};</div>
              <div>• {i18n.t("main_category10")};</div>
              <div>• {i18n.t("main_category11")};</div>
              <div>• {i18n.t("main_category12")};</div>
              <div>• {i18n.t("main_category13")}</div>    
            </Flex>
          </StyledLeftTimeline>
          <StyledRightTimeline>
            <Flex vertical>
              <div>
              {i18n.t("magazin_content")}:
              </div>
              <div>5.2.4.{i18n.t("magazin_content1")}</div>
              <div>5.2.5. {i18n.t("magazin_content2")}</div>
              <div>
                5.2.3.{i18n.t("magazin_content3")}
              </div>
            </Flex>
          </StyledRightTimeline>
        </TimelineContainer>
      </Flex>
    </Flex>
  );
};
