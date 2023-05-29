import React from "react";
import styled from "styled-components";
// import MenuCard from '../MenuCard';
// import SignatureData from '../../SignatureData';

export default function Signature() {
  return (
    <Container>
      Signature
      {/* <Heading>Signature Dishes</Heading>
      <MenuContainer>
        {SignatureData.map((dish, index) => (
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
  height: 140vh;
`;

// const Heading = styled.h1`
//   font-size: 2rem;
//   text-align: center;
//   margin-bottom: 20px;
// `;

// const MenuContainer = styled.div`
//   width: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-around;
// `;
