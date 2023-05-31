import React from "react";
import styled from "styled-components";
import MenuCard from "components/MenuCard";
import { signatureFoods } from "SignatureData.js";

export default function Signature() {
  return (
    <Container>
      <Heading>Signature Dishes</Heading>
      <MenuContainer>
        <MenuCard
          name="name1"
          description="adaknfaosnfiunaradaknfaosnfiunar"
          price="13.99"
        />
        <MenuCard
          name="name1"
          description="adaknfaosnfiunaradaknfaosnfiunar"
          price="13.99"
        />
        <MenuCard
          name="name1"
          description="adaknfaosnfiunaradaknfaosnfiunar"
          price="13.99"
        />
        <MenuCard
          name="name1"
          description="adaknfaosnfiunaradaknfaosnfiunar"
          price="13.99"
        />
        <MenuCard
          name="name1"
          description="adaknfaosnfiunaradaknfaosnfiunar"
          price="13.99"
        />
        <MenuCard
          name="name1"
          description="adaknfaosnfiunaradaknfaosnfiunar"
          price="13.99"
        />
        <MenuCard
          name="name1"
          description="adaknfaosnfiunaradaknfaosnfiunar"
          price="13.99"
        />
        <MenuCard
          name="name1"
          description="adaknfaosnfiunaradaknfaosnfiunar"
          price="13.99"
        />
      </MenuContainer>
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
  font-weight: bold;
  color: #05493c;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 50px;
`;

const MenuContainer = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
