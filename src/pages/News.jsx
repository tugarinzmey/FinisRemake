/* eslint-disable no-irregular-whitespace */
import { Divider, Flex, Image } from "antd";
import styled from "styled-components";
import { ChuvakImage } from "../assets";
import { OutlinedLink } from "../styles/typography";

const StyledNewsPage = styled(Flex)`
  gap: 20px;
  padding: 20px 30px;
`;

const StyledChiefInfo = styled(Flex)`
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const News = () => {
  return (
    <StyledNewsPage gap={20}>
      <StyledChiefInfo vertical>
        <Image src={ChuvakImage} preview={false} />
        <Flex vertical>
          <h1>Кузнецов Николай Геннадьевич</h1>
          Главный редактор, д.э.н., профессор
        </Flex>
      </StyledChiefInfo>
      <Flex vertical>
        <h1>Актуальное:</h1>
        <div>
          • прием статей в журнал «Финансовые исследования» №1 заканчивается 10
          декабря
        </div>
        <div>
          • прием статей в журнал «Финансовые исследования» №2 заканчивается 10
          апреля
        </div>
        <div>
          • прием статей в журнал «Финансовые исследования» №1 заканчивается 10
          мая
        </div>
        <div>
          • прием статей в журнал «Финансовые исследования» №1 заканчивается 10
          сентября
        </div>
      </Flex>
      <Flex vertical>
        <h1>Подписка:</h1>
        <div>Подписку на журнал можно оформить на сайте:</div>
        <OutlinedLink to="https://podpiska.pochta.ru/">
          Почта России
        </OutlinedLink>
        <OutlinedLink to="https://ural-press.ru/">Урал Пресс</OutlinedLink>
        <div>или в Редакции журнала по договору подписки.</div>
        <Divider />

        <h1>Мы есть:</h1>
        <div>Журнал «Финансовые исследования» доступны:</div>
        <OutlinedLink to="https://cyberleninka.ru/journal/n/finansovye-issledovaniya?i=1127838">
          КиберЛенинка
        </OutlinedLink>
        <OutlinedLink to="https://elibrary.ru/title_profile.asp?id=10488">
          eLibrary
        </OutlinedLink>
        <div>или в Редакции журнала по договору подписки.</div>
        <Divider />
      </Flex>
    </StyledNewsPage>
  );
};
