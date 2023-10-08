import React from "react";
import styled from "styled-components";
import Logo from "../../assets/fish.png";

const Wrapper = styled.div`
  width: 100%;
  padding: 10px 0px;
  z-index: 2;
  position: fixed;
  align-items: center;
  box-shadow: 2px 4px 12px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(8px); /* Apply the blurry glass effect */
  background-color: rgba(
    255,
    255,
    255,
    0.2
  ); /* Set a transparent background color */
  &:before {
    content: "";
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(10px);
  }
`;

const Image = styled.img`
  width: 24px;
  height: 24px;
`;

const NavBar = () => {
  return (
    <Wrapper>
      <Image src={Logo} alt="Logo" />
    </Wrapper>
  );
};

export default NavBar;
