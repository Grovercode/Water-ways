import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: linear-gradient(
    272.3deg,
    rgba(0, 132, 255, 0.8) 2.13%,
    rgba(0, 191, 255, 0.8) 99.78%
  );
  backdrop-filter: blur(8px);
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Card = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Card;
