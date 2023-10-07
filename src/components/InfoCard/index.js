import React from "react";
import styled from "styled-components";

export const THEME_TYPES = {
  DARK: "DARK",
  LIGHT: "LIGHT",
  BLUE: "BLUE",
};

const Wrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding: 25px;
  gap: 25px;
  box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.1);
  border-radius: 40px;
  border: 3.5px solid #444444;
  background: linear-gradient(159deg, #000000 3.01%, #333333 103.3%);
  backdrop-filter: blur(21px);

  ${(props) =>
    props.theme === THEME_TYPES.LIGHT &&
    `
    background: linear-gradient(159deg, #f5f5f5 3.01%, rgba(255, 255, 255, 0) 103.3%);
    border: 3.5px solid #e6e6e6;
  `}

  ${(props) =>
    props.theme === THEME_TYPES.BLUE &&
    `
    background: linear-gradient(159deg, #d4effc 3.01%, rgba(255, 255, 255, 0) 103.3%);
    border: 3.5px solid #a6d1f5;
  `}
`;

const Title = styled.div`
  color: #ffffff;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  ${(props) =>
    props.theme === THEME_TYPES.LIGHT &&
    `
    color: #333333;
  `}

  ${(props) =>
    props.theme === THEME_TYPES.BLUE &&
    `
    color: #0044cc;
  `}
`;

const SubTitle = styled.div`
  color: #ffffff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0.5px;

  ${(props) =>
    props.theme === THEME_TYPES.LIGHT &&
    `
    color: #666666;
  `}

  ${(props) =>
    props.theme === THEME_TYPES.BLUE &&
    `
    color: #003366;
  `}
`;

const InfoCard = ({
  title = "",
  description = "",
  theme = THEME_TYPES.LIGHT,
}) => {
  return (
    <Wrapper theme={theme}>
      <Title theme={theme}>{title}</Title>
      <SubTitle theme={theme}>{description}</SubTitle>
    </Wrapper>
  );
};

export default InfoCard;
