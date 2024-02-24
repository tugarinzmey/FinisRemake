/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
import styled from "styled-components";
import { StyledPageHeader } from "../styles/typography";
import { Divider, Flex } from "antd";
import { Link } from "react-router-dom";

const StyledContactsPage = styled(Flex)`
  padding: 30px;
`;

export const Contacts = () => {
  return (
    <StyledContactsPage vertical gap={20} align="center">
      <StyledPageHeader>Контактная информация</StyledPageHeader>
      <Flex vertical>
        <h1>По всем вопросам просьба обращаться в адрес Редакции журнала:</h1>
        <div>344002, Ростов-на-Дону, ул. Б.Садовая, 69. ауд. 452.</div>
        <div>Тел./факс: (863) 261-38-01</div>
        <div>WhatsApp: +7-903-47-43-777</div>
        <div>E-mail: research@inbox.ru</div>
        <div>
          Интернет-страница: <Link to="">www.finis.rsue.ru</Link>
        </div>
        <div>
          Главный редактор – д.э.н., профессор Кузнецов Николай Геннадьевич
        </div>
        <div>
          Зам. главного редактора – д.э.н., профессор – Алифанова Елена
          Николаевна
        </div>
        <div>
          Зам. главного редактора – д.э.н., профессор – Семенюта Ольга Гетовна
        </div>
        <div>
          Ответственный секретарь – к.э.н., доцент - Шапиро Ирина Евгеньевна
        </div>
      </Flex>
      <Divider />
      <Flex vertical>
        <div>
          Адрес издателя - Издательско-полиграфический комплекс РГЭУ (РИНХ)
        </div>
        <div>344002, Ростов-на-Дону, ул. Б.Садовая, 69. к. 152.</div>
        <div>Тел./факс: (863) 261-38-02, 261-38-77, 266-42-34</div>
        <div>E-mail: ipkrinh@gmail.com</div>
        <div>Главный редактор ИПК РГЭУ (РИНХ) – Лазарева Юлия Сергеевна</div>
        <div>
          Редактирование, корректировка, верстка и макетирование – Климова Вера
        </div>
      </Flex>
    </StyledContactsPage>
  );
};
