/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
import styled from "styled-components";
import { StyledPageHeader } from "../styles/typography";
import { Flex } from "antd";
import { Link } from "react-router-dom";

const StyledEthicsPage = styled(Flex)`
  padding: 30px;
`;

const StyledUsefulContentContainer = styled(Flex)`
  margin-left: 10px;
`;

export const Ethics = () => {
  return (
    <StyledEthicsPage vertical gap={20}>
      <StyledPageHeader>Публикационная этика. Памятка авторам</StyledPageHeader>
      <div>
        Этические стандарты в отношении публикаций нужны, чтобы гарантировать
        высокое качество научных публикаций, доверие к научным исследованиям со
        стороны общества и признание за ученым за их идеи.
      </div>
      <Flex vertical>
        <h1>Необходимо избегать:</h1>
        <div>
          • Фабрикации и фальсификации данных: фабрикация данных означает, что
          исследователь не проводил никакой работы, а придумал данные.
          Фальсификация данных означает, что исследователь выполнил эксперимент,
          но затем изменил некоторые данные. Оба этих действия подрывают доверие
          общества к ученым.
        </div>
        <div>
          • Плагиата: использование чужих идей и работ, не отдавая им должное –
          нечестно и несправедливо. Копирование хотя бы одного предложения из
          рукописи другого или даже своего собственного из ранее опубликованной
          рукописи без оформления цитаты считается плагиатом – передайте смысл
          своими словами.
        </div>
        <div>
          • Подачи статьи в несколько журналов одновременно: неэтично подавать
          одну рукопись в более чем один журнал одновременно. Такие действия
          отнимают время редакторов и рецензентов, а также могут повредить
          репутации журналов, если рукопись будет опубликована, более чем в
          одном из них.
        </div>
        <div>
          • Дублирующих публикаций: означает публикацию похожих рукописей,
          основанных на одном эксперименте. Это приведет к тому, что читатели не
          станут обращать внимания на Ваши работы.
        </div>
      </Flex>
      <Flex vertical>
        <h1>Полезно:</h1>
        <div>
          • Цитировать ученых научной школы, идеи которой Вы развиваете.
        </div>
        <div>• Использовать актуальный материал:</div>
        <StyledUsefulContentContainer vertical>
          <div>
            • Российская государственная библиотека RSL.RU -крупнейшая публичная
            библиотека мира.{" "}
            <Link to="https://www.rsl.ru/ru/root3444/root34443448/">
              Стать читателем
            </Link>{" "}
            библиотеки может любой гражданин России или другого государства,
            если он я­вляется студентом вуза либо достиг 18 лет. Свои фонды
            библиотека раскрывает не только посредством системы каталогов
            и картотек: создан и постоянно пополняется электронный каталог,
            доступ к которому можно получить как в браузере, так и через
            мобильное приложение eRSL.
          </div>
          <div>
            •{" "}
            <Link to="https://elibrary.ru/">
              Научная электронная библиотека eLibrary.Ru
            </Link>{" "}
            - крупнейшая в России коллекция электронных журналов и баз данных по
            всем отраслям наук. Около 7000 западных и более 2300 российских
            полнотекстовых научных электронных журналов. SCI и Российский индекс
            научного цитирования. Ко многим ресурсам доступ открыт всем
            пользователям.
          </div>
          <div>
            • Электронные журналы издательства{" "}
            <Link to="https://taylorandfrancis.com/">Taylor & Francis</Link>{" "}
            (более 1000 наименований). Доступ открыт к полным текстам журналов
            текущего года и всем полным текстам архивных номеров. Используйте
            ссылку "Journals", расположенную в верхней части страницы, или
            ссылку Search для поиска по названию журнала, фамилии автора,
            заглавию/реферату/ключевому слову и т.д.)
          </div>
          <div>
            • Коллекция электронных журналов издательства{" "}
            <Link to="https://journals.sagepub.com/">SAGE</Link>. В коллекцию
            входят лучшие мировые журналы по социологии, праву и другим отраслям
            наук.
          </div>
          <div>
            • Электронные журналы американской компании{" "}
            <Link to="https://search.ebscohost.com/">EBSCO</Link>, включая
            социологическую базу данных SocINDEX with Full Text. Более 7500
            электронных журналов в основном по общественным наукам.
          </div>
          <div>
            • Журнал <Link to="https://www.nature.com/">Nature.</Link>
          </div>
          <div>
            • Журнал <Link to="https://www.science.org/">Science</Link> (с 1997
            года) и информационная база SCIENCE NOW.
          </div>
          <div>
            • Электронные журналы издательства{" "}
            <Link to="https://academic.oup.com/journals/">
              Oxford University Press
            </Link>
          </div>
          <div>
            •{" "}
            <Link to="https://www.cambridge.org/core/product/identifier//type/BOOK">
              Cambridge University Press 
            </Link>{" "}
            (База данных Humanities & Social Sciences) - содержит 103
            электронных журнала по следующим отраслям: экономика; история;
            философия; политология; юриспруденция; лингвистика; социология;
            религия; культурология; музыка; театр; археология и антропология;
            региональные исследования.
          </div>
          <div>
            • <Link to="http://www.berlin.iz-soz.de/">Справочник</Link>
             электронных ресурсов по общественным наукам (Германия).
          </div>
          <div>
            • Ресурсы Интернет по 
            <Link to="https://inion.ru/index15.php"> политологии</Link>.
          </div>
          <div>
            • <Link to="https://metapress.com/">SpringerLink</Link> – это одна
            из ведущих мировых интерактивных баз данных, содержащих около 2
            тысяч высококачественных полнотекстовых журналов, 25 тысяч книг,
            справочные материалы и интерактивную коллекцию архивов.
          </div>
          <div>
            • Немецкий портал по международным отношениям и региональным
            исследованиям
          </div>
        </StyledUsefulContentContainer>
      </Flex>
    </StyledEthicsPage>
  );
};