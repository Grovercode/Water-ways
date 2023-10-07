import React from "react";
import { styled } from "styled-components";
import InfoCard, { THEME_TYPES } from "../InfoCard";

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  text-align: left;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 800;
`;

const SecondaryText = styled.div`
  font-size: 16px;
  font-weight: 200;
  margin-top: -12px;
`;

const Description = ({ title }) => {
  return (
    <Wrapper>
      {/* <Title>{title}</Title>
      <SecondaryText>
        The dugong is a marine mammal. It is one of four living species of the
        order Sirenia, which also includes three species of manatees. It is the
        only living representative of the once-diverse family Dugongidae; its
        closest modern relative, Steller's sea cow, was hunted to extinction in
        the 18th century.
      </SecondaryText> */}

      <InfoCard
        title={title}
        description={`The dugong is a marine mammal. It is one of four living species of the
        order Sirenia, which also includes three species of manatees. It is the
        only living representative of the once-diverse family Dugongidae; its
        closest modern relative, Steller's sea cow, was hunted to extinction in
        the 18th century.`}
        theme={THEME_TYPES.LIGHT}
      />

      <InfoCard
        title="Breeding & Behavior"
        description="After about a year-long pregnancy, both female manatees and dugongs birth calves that stay with them for a year and a half to two years as they gain their independence. Impressively, newborn manatees can swim on their own just an hour after they are born."
        theme={THEME_TYPES.BLUE}
      />
      <InfoCard
        title="Habitat & Population Status"
        description="Both manatees and dugongs are found in warm tropical or subtropical waters, however their habitats don’t overlap. The dugong’s range is from East Africa to Australia, while manatees are generally found in three species-specific regions."
        theme={THEME_TYPES.DARK}
      />
      <InfoCard
        title="Habitat & Population Status"
        description="Both manatees and dugongs are found in warm tropical or subtropical waters, however their habitats don’t overlap. The dugong’s range is from East Africa to Australia, while manatees are generally found in three species-specific regions."
        theme={THEME_TYPES.LIGHT}
      />
      <InfoCard
        title="Fun Fact"
        description="Dugongs are known to have a lifespan of up to 70 years, making them one of the longest-living marine mammals. They can live for several decades and have been known to reach ages comparable to those of humans."
        theme={THEME_TYPES.BLUE}
      />
    </Wrapper>
  );
};

export default Description;
