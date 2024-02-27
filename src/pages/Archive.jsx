import styled from "styled-components";
import { StyledPageHeader } from "../styles/typography";
import { Flex } from "antd";
import { OutlinedLink } from "../styles/typography";
import { useTranslation } from "react-i18next";

const StyledArchivePage = styled(Flex)`
  padding: 30px;
`;

const getReleaseLinks = (year, count) => {
  let links = [];
  for (let num = 1; num < count; num++) {
    links.push(`https://finis.rsue.ru/${year}_N${num}/${year}-${num}.pdf`);
  }
  return links;
};

const getAnnotationLinks = (year, count) => {
  let links = [];
  for (let num = 1; num < count; num++) {
    links.push(`https://finis.rsue.ru/docs/annotac/ФИ-${num}-${year}.pdf`);
  }
  return links;
};

// журналы на "сервере" хранятся в идиотском виде,
// поэтому некоторые (большинство) ссылки не действительны
// заводить константу под все номера или хранить файлы тут - глупо,
// потому что в обоих случаях сильно увеличится размер бандла
const magazines = [
  {
    year: 2023,
    releases: getReleaseLinks(2023, 3),
  },
  {
    year: 2022,
    releases: getReleaseLinks(2022, 4),
  },
  {
    year: 2021,
    releases: getReleaseLinks(2021, 4),
  },
  {
    year: 2020,
    releases: getReleaseLinks(2020, 4),
  },
  {
    year: 2019,
    releases: getReleaseLinks(2019, 4),
  },
  {
    year: 2018,
    releases: getReleaseLinks(2018, 4),
  },
  {
    year: 2017,
    releases: getReleaseLinks(2017, 4),
  },
  {
    year: 2016,
    releases: getReleaseLinks(2016, 4),
  },
  {
    year: 2015,
    releases: getReleaseLinks(2015, 4),
  },
  {
    year: 2014,
    releases: getReleaseLinks(2014, 4),
  },
  {
    year: 2013,
    releases: getReleaseLinks(2013, 4),
  },
  {
    year: 2012,
    releases: getReleaseLinks(2012, 4),
  },
  {
    year: 2011,
    releases: getReleaseLinks(2011, 4),
  },
  {
    year: 2010,
    releases: getReleaseLinks(2010, 4),
  },
  {
    year: 2009,
    releases: getReleaseLinks(2009, 4),
  },
  {
    year: 2008,
    releases: getReleaseLinks(2008, 4),
  },
  {
    year: 2007,
    releases: getReleaseLinks(2007, 4),
  },
];

const annotations = [
  {
    year: 2023,
    releases: getAnnotationLinks(2023, 3),
  },
  {
    year: 2022,
    releases: getAnnotationLinks(2022, 4),
  },
  {
    year: 2021,
    releases: getAnnotationLinks(2021, 4),
  },
  {
    year: 2020,
    releases: getAnnotationLinks(2020, 4),
  },
  {
    year: 2019,
    releases: getAnnotationLinks(2019, 4),
  },
  {
    year: 2015,
    releases: getAnnotationLinks(2015, 2),
  },
  {
    year: 2014,
    releases: getAnnotationLinks(2014, 4),
  },
];

const Magazine = ({ magazine }) => {
  
  return (
    <div>
      {magazine.year} г.{" "}
      {magazine.releases.map((release, index) => (
        <OutlinedLink key={index} to={release}>
          №{index + 1}{" "}
        </OutlinedLink>
      ))}
    </div>
  );
};

const Annotation = ({ annotation }) => {
  return (
    <div>
      {annotation.year} г.{" "}
      {annotation.releases.map((release, index) => (
        <OutlinedLink key={index} to={release}>
          №{index + 1}{" "}
        </OutlinedLink>
      ))}
    </div>
  );
};

export const Archive = () => {
  const { i18n } = useTranslation();
  return (
    <StyledArchivePage vertical gap={20}>
      <Flex vertical>
        <StyledPageHeader>
        {i18n.t("journal_definition")}
        </StyledPageHeader>
        <StyledPageHeader>{i18n.t("journal_name")}</StyledPageHeader>
      </Flex>
      <Flex justify="space-evenly">
        <Flex vertical gap={20}>
          <h1>{i18n.t("annotations")}:</h1>
          <Flex vertical>
            {annotations.map((annotation, index) => (
              <Annotation key={index} annotation={annotation} />
            ))}
          </Flex>
        </Flex>
        <Flex vertical gap={20}>
          <h1>{i18n.t("journal_issues")}:</h1>
          <Flex gap={30} justify="space-between">
            <Flex vertical>
              {magazines.map((magazine, index) => (
                <Magazine key={index} magazine={magazine} />
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </StyledArchivePage>
  );
};
