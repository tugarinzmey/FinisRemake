/* eslint-disable no-irregular-whitespace */
import { Flex } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledPageHeader } from "../styles/typography";
import { useTranslation } from "react-i18next";
import { PageWrapper } from "../components/PageWrapper";

const StyledSideInfo = styled(Flex)`
  min-width: 180px;
  @media (max-width: 650px) {
    display: none;
  }
`;

export const Requirements = () => {
  const { i18n } = useTranslation();
  return (
    <PageWrapper gap={30}>
      <Flex vertical gap={20}>
        <Flex vertical gap={10}>
          <StyledPageHeader>{i18n.t("requir_header")}</StyledPageHeader>
          <div>{i18n.t("requir_text1")}</div>
          <div>{i18n.t("requir_text2")}</div>
          <div>{i18n.t("requir_text3")}.</div>
        </Flex>
        <Flex vertical gap={10}>
          <h1>{i18n.t("requir_header2")}</h1>
          <div>
            1. {i18n.t("requir_text4")} <Link>http://antiplagiat.ru</Link>
          </div>
          <div>
            2.  {i18n.t("requir_text5_part1")}:{" "}
            <Link to="mailto:research@inbox.ru">research@inbox.ru</Link>
            ). {i18n.t("requir_text5_part2")}.
          </div>
          <h1>{i18n.t("requir_header3")}.</h1>
          <Flex vertical>
            <div>3. {i18n.t("requir_personal_data_header")}:</div>
            <div>• {i18n.t("requir_personal_data1")};</div>
            <div>• {i18n.t("requir_personal_data2")},</div>
            <div>• {i18n.t("requir_personal_data3")},</div>
            <div>• {i18n.t("requir_personal_data4")},</div>
            <div>• {i18n.t("requir_personal_data5")},</div>
            <div>• {i18n.t("requir_personal_data6")}</div>
            <div>• {i18n.t("requir_personal_data7")}</div>
            <div>
              {i18n.t("requir_text6_part1")} – (
              <Link to="https://finis.rsue.ru/docs/prilojenie1.doc">
                {i18n.t("requir_text6_part2")}
              </Link>
              )
            </div>
          </Flex>
          <div>
            4. {i18n.t("requir_header4")},  
            <strong> {i18n.t("requir_text7_part1")}</strong>,{" "}
            {i18n.t("requir_text7_part2")}.
          </div>
          <Flex vertical>
            <h1>{i18n.t("requir_header5")}:</h1>
            <div>• {i18n.t("requir_aspect1")};</div>
            <div>• {i18n.t("requir_aspect2")};</div>
            <div>• {i18n.t("requir_aspect3")};</div>
            <div>• {i18n.t("requir_aspect4")};</div>
            <div>• {i18n.t("requir_aspect5")}.</div>
            <div>
              ({i18n.t("requir_text8_part1")}
              <Link to="https://finis.rsue.ru/docs/prilojenie2.doc">
                {i18n.t("requir_text8_part2")}
              </Link>
              )
            </div>
          </Flex>
          <div>4a. {i18n.t("requir_text9")}.</div>
          <div>
            5. 
            <strong>{i18n.t("requir_text10_part1")}</strong> 
            {i18n.t("requir_text10_part2")} (
            <Link to="https://finis.rsue.ru/docs/prilojenie3.doc">
              {i18n.t("requir_text10_part3")}
            </Link>
            ){i18n.t("requir_text10_part4")}.
          </div>
          <div>6.{i18n.t("requir_text11")}.</div>
          <div>7. {i18n.t("requir_text12")}.</div>
          <div>
            8. {i18n.t("requir_text13_part1")}: 
            <strong>{i18n.t("requir_text13_part2")}.</strong>
          </div>
          <div>9. {i18n.t("requir_text14")}.</div>
          <div>10. {i18n.t("requir_text15")}.</div>
          <div>11. {i18n.t("requir_text16")}.</div>
          <div>12.{i18n.t("requir_text17")}.</div>
          <div>13.{i18n.t("requir_text18")}.</div>
          <div>
            14.{i18n.t("requir_text19_part1")} 
            <strong>{i18n.t("requir_text19_part2")} </strong>
            {i18n.t("requir_text19_2")}
          </div>
          <div>
            15. {i18n.t("requir_text20_part1")} 
            <strong> {i18n.t("requir_text20_part2")} </strong>-{" "}
            {i18n.t("requir_text20_part3")}.
          </div>
          <div>
            <strong>{i18n.t("requir_text21_part1")}!</strong>
            <div>
              {i18n.t("requir_text21_part2")}. 
              <strong>
                {i18n.t("requir_text21_part3")} (
                <Link to="https://finis.rsue.ru/docs/prilojenie3.doc">
                  {i18n.t("requir_text10_part3")}
                </Link>
                ) {i18n.t("requir_text21_part4")}.
              </strong>
            </div>
          </div>
          <div>
            {i18n.t("requir_text22_part1")} 
            <Link>{i18n.t("requir_text22_part2")}</Link>.{" "}
            {i18n.t("requir_text22_part3")}.
          </div>
          <div>{i18n.t("requir_text23")}.</div>
        </Flex>
      </Flex>
      <StyledSideInfo vertical gap={20}>
        <h1>{i18n.t("requir_theme_main_header")}:</h1>
        <div>
          <h1>{i18n.t("requir_theme_header1")}:</h1>
          <div>• {i18n.t("requir_theme1")};</div>
          <div>• {i18n.t("requir_theme2")};</div>
          <div>• {i18n.t("requir_theme3")}</div>
          <div>• {i18n.t("requir_theme4")};</div>
          <div>• {i18n.t("requir_theme5")};</div>
          <div>• {i18n.t("requir_theme6")};</div>
          <div>• {i18n.t("requir_theme7")};</div>
          <div>• {i18n.t("requir_theme8")};</div>
          <div>• {i18n.t("requir_theme9")};</div>
          <div>• {i18n.t("requir_theme10")};</div>
          <div>• {i18n.t("requir_theme11")};</div>
          <div>• {i18n.t("requir_theme12")}.</div>
        </div>
        <div>
          <h1>{i18n.t("requir_theme_header2")}:</h1>
          <div>• {i18n.t("requir_theme13")};</div>
          <div>• {i18n.t("requir_theme14")};</div>
          <div>• {i18n.t("requir_theme15")};</div>
          <div>• {i18n.t("requir_theme16")};</div>
          <div>• {i18n.t("requir_theme17")};</div>
          <div>• {i18n.t("requir_theme18")};</div>
          <div>• {i18n.t("requir_theme19")};</div>
          <div>• {i18n.t("requir_theme20")}.</div>
        </div>
        <div>
          <h1>{i18n.t("requir_theme_header3")}:</h1>
          <div>• {i18n.t("requir_theme21")};</div>
          <div>• {i18n.t("requir_theme22")};</div>
          <div>• {i18n.t("requir_theme23")};</div>
          <div>• {i18n.t("requir_theme24")};</div>
          <div>• {i18n.t("requir_theme25")};</div>
          <div>• {i18n.t("requir_theme26")}.</div>
        </div>
      </StyledSideInfo>
    </PageWrapper>
  );
};
