import { Flex } from "antd";
import styled from "styled-components";
import { WaterMark } from "../assets";

const StyledWatermark = styled.div`
  background: url(${WaterMark}) no-repeat fixed;
  background-position: center;
  background-position-y: 65px;
  width: 100%;
  height: 100%;
`;

export const ContentWrapper = styled(Flex)`
  padding: 30px;
  height: 100%;
  width: 80rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 65rem;
  @media (max-width: 1320px) {
    width: 40rem;
  }

  @media (max-width: 820px) {
    width: auto;
  }
`;

export const PageWrapper = ({ children, ...rest }) => {
  return (
    <StyledWatermark>
      <ContentWrapper {...rest}>{children}</ContentWrapper>
    </StyledWatermark>
  );
};
