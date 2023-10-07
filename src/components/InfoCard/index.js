import React from "react";
import styled from "styled-components";
import BulbLogo from "../../assets/bulb-icon.png";

export const THEME_TYPES = {
  DARK: "DARK",
  LIGHT: "LIGHT",
  BLUE: "BLUE",
  YELLOW: "YELLOW",
};

const Wrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding: 25px;
  gap: 25px;
  box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: 1.5px solid #444444;
  background: linear-gradient(159deg, #000000 3.01%, #333333 103.3%);
  backdrop-filter: blur(21px);

  ${(props) =>
    props.theme === THEME_TYPES.LIGHT &&
    `
    background: linear-gradient(159deg, #f5f5f5 3.01%, rgba(255, 255, 255, 0) 103.3%);
    border: 1.5px solid #e6e6e6;
  `}

  ${(props) =>
    props.theme === THEME_TYPES.BLUE &&
    `
    background: linear-gradient(159deg, #d4effc 3.01%, rgba(255, 255, 255, 0) 103.3%);
    border: 1.5px solid #a6d1f5;
  `}

  ${(props) =>
    props.theme === THEME_TYPES.YELLOW &&
    `
    background: linear-gradient(159deg, #f7f1da 3.01%, rgba(255, 255, 255, 0) 103.3%);
    border: 1.5px solid #dbb84d;
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

  ${(props) =>
    props.theme === THEME_TYPES.YELLOW &&
    `
    color: #dbb84d;
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

  ${(props) =>
    props.theme === THEME_TYPES.YELLOW &&
    `
    color: #a68e27;
  `}
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  width: 100%;
`;

const InfoCard = ({
  title = "",
  description = "",
  theme = THEME_TYPES.LIGHT,
}) => {
  return (
    <Wrapper theme={theme}>
      <TitleContainer>
        <Title theme={theme}>{title}</Title>
        {theme === THEME_TYPES.YELLOW && (
          <img width={30} height={30} src={BulbLogo} />
        )}
      </TitleContainer>

      <SubTitle theme={theme}>{description}</SubTitle>
    </Wrapper>
  );
};

export default InfoCard;
