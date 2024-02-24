import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { MainHeader } from "./MainHeader";
import { MainFooter } from "./MainFooter";
import styled from "styled-components";

const StyledLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledContent = styled.article`
  background: #fff;
  flex: 1;
`;

export const MainLayout = () => {
  return (
    <StyledLayout>
      <MainHeader />
      <StyledContent>
        <Outlet />
      </StyledContent>
      <MainFooter />
    </StyledLayout>
  );
};
