import React from "react";
import ThreeDModel from "../../components/3DModel";
import Card from "../../components/Card";
import NavBar from "../../components/NavBar";
import { styled } from "styled-components";
import Description from "../../components/Description";

const Wrapper = styled.div``;

const WhiteBox = styled.div`
  position: relative;
  background-color: white;
  height: 25px;
  border-radius: 50% 50% 0 0;
  margin-top: -20px;
  box-shadow: 2px -28px 12px 0px rgba(0, 0, 0, 0.25);
`;

const SpeciesDetails = ({ name = "Dingus" }) => {
  return (
    <Wrapper>
      <NavBar />
      <Card>
        <ThreeDModel />
      </Card>
      <WhiteBox />

      <Description title={"Dugong (Sea Cow)"} />
    </Wrapper>
  );
};

export default SpeciesDetails;
