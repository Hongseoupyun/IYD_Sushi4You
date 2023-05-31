import React from "react";
import styled from "styled-components";
import testImg from "../assets/signature/Black_Dragon_Roll-removebg-preview.png";

function MenuCard(props) {
  const { name, description, price } = props;
  return (
    <Card>
      <Image src={testImg} alt={name} />
      <Content>
        <Name>{name}</Name>
        <Description>{description}</Description>
      </Content>
      <Price>{price}</Price>
    </Card>
  );
}

export default MenuCard;

const Card = styled.div`
  position: relative;
  width: 250px;
  height: 370px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 7.5px rgba(0, 0, 0, 0.1);
  margin: 20px;
  background-color: #fdfaf5;
  transition: transform 0.2s ease-in-out ; /* Added transition for smooth animation */
  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 15px;
`;

const Name = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #05493c;
`;

const Description = styled.p`
  color: #05493c;
  font-size: 16px;
  height: 120px; /* Added height to make the description longer */
  overflow: auto; /* Add scroll bar if text overflows */
`;

const Price = styled.div`
  position: absolute;
  bottom: 15px;
  left: -15px;
  z-index: 5; /* Make sure the price is above the card */
  background: #f14e23;
  padding: 5px 10px;
  height: 25px; // set a fixed height
  width: 50px; // set a fixed width
  border-radius: 50px; // set the border radius to 50% to get a circle
  font-size: 15px;
  font-weight: bold;
  color: white;
  display: flex;
  justify-content: center; // center content horizontally
  align-items: center; // center content vertically
  text-align: center;
`;
