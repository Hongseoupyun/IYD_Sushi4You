import React from "react";
import styled from "styled-components";

function MenuCard(props) {
  const { name, description, price, img } = props;
  return (
    <Card>
      <Image src={img} alt={name} />
      <Content>
        <Name>{name}</Name>
        <Description>{description}</Description>
        <Price>{price}</Price>
      </Content>
    </Card>
  );
}

export default MenuCard;

const Card = styled.div`
  position: relative;
  width: 230px;
  height: 420px;
  border-radius: 15px;
  overflow: unset;
  box-shadow: 0 5px 7.5px rgba(0, 0, 0, 0.1);
  margin: 20px;
  background-color: #fdfaf5;
  transition: transform 0.2s ease-in-out; /* Added transition for smooth animation */
  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

const Content = styled.div`
  padding: 13px;
  font-size: 10px;
`;

const Name = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #05493c;
`;

const Description = styled.p`
  color: #05493c;
  font-size: 14.5px;
  height: 120px;
  word-break: break-word; /* Break words properly */
  overflow: unset;
`;

const Price = styled.div`
  position: absolute;
  bottom: 10px;
  left: -15px;
  z-index: 5; /* Make sure the price is above the card */
  background: #f14e23;
  padding: 5px 10px;
  height: 25px; // set a fixed height
  width: 50px; // set a fixed width
  border-radius: 50px; // set the border radius to 50% to get a circle
  font-size: 15px;
  font-weight: 400;
  color: white;
  display: flex;
  justify-content: center; // center content horizontally
  align-items: center; // center content vertically
  text-align: center;
`;
