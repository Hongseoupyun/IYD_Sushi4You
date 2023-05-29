import React from "react";
import styled from "styled-components";
import MenuCard from "components/MenuCard";
import { signatureFoods } from "SignatureData.js";

export default function Signature() {
  return (
    <Container>
      <Heading>Signature Dishes</Heading>
      {/* <MenuContainer>
        {signatureFoods.map((dish, index) => (
          <MenuCard key={index} dish={dish} />
        ))}
      </MenuContainer> */}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 150vh;
  background-color: #fbf1dd;
`;

const Heading = styled.h1`
font-weight: 600;
color: #05493c;
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 40px;
`;

const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
