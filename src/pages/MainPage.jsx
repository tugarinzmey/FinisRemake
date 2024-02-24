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
  return (
    <Flex vertical>
      <Flex>
        <StyledContentContainer>
          <StyledHeader>Финансовые исследования</StyledHeader>
          <StyledTitleContainer>
            Научно-образовательный и прикладной журнал
          </StyledTitleContainer>
          Рецензируемое научное издание, издаваемое Ростовским государственным
          экономическим университетом с 2000 года, специализирующееся в области
          финансов и кредита на юге России.
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
            «Финансовые исследования» – рецензируемое научное периодическое
            печатное издание, выходит в свет с 2000 года. Журнал является
            единственным на Юге России специализированным в области финансов и
            кредита. Издание на принципах самофинансирования осуществляется
            Ростовским государственным экономическим университетом (РИНХ),
            крупнейшим научно-учебным центром в области финансов и кредита в
            Южном федеральном округе.
          </StyledDescription>
        </StyledDescriptionWrapper>
        <TimelineContainer>
          <StyledLeftTimeline>
            Концепция журнала ориентирована на теоретическое обобщение и
            прикладной анализ развития мировой и национальных финансовой и
            денежно-кредитной систем, рынка ценных бумаг, а также выявление
            национальной и региональной специфики, особенностей и последствий
            включения национального и регионального финансового рынка в систему
            мирового финансового рынка.
          </StyledLeftTimeline>
          <StyledRightTimeline>
            Тематика журнала включает теоретические разработки, прикладные
            исследования, в том числе совместные с зарубежными учеными,
            методические разработки по ключевым финансовым направлениям.
          </StyledRightTimeline>
          <StyledLeftTimeline>
            <Flex vertical>
              <div>Основные тематические рубрики журнала:</div>
              <div>• Финансовые рынки;</div>
              <div>• Банковское дело;</div>
              <div>• Теория и методология финансов;</div>
              <div>• Финансовая система;</div>
              <div>• Государственные финансы;</div>
              <div>• Страховое дело;</div>
            </Flex>
            <Flex vertical>
              <div>• Финансовые риски;</div>
              <div>• Финансы предприятий и организаций;</div>
              <div>• Региональная экономика;</div>
              <div>• Экономика предприятий;</div>
              <div>• Макроэкономические процессы;</div>
              <div>• Международное сотрудничество;</div>
              <div>• Научная жизнь</div>
            </Flex>
          </StyledLeftTimeline>
          <StyledRightTimeline>
            <Flex vertical>
              <div>
                Содержание рубрик журнала соответствует отраслям науки и группам
                специальностей, по которым присуждаются ученые степени:
              </div>
              <div>5.2.4. Финансы (экономические науки)</div>
              <div>5.2.5. Мировая экономика (экономические науки)</div>
              <div>
                5.2.3. Региональная и отраслевая экономики (экономические науки)
              </div>
            </Flex>
          </StyledRightTimeline>
        </TimelineContainer>
      </Flex>
    </Flex>
  );
};
