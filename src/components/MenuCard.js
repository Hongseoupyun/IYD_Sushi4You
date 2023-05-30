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
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  margin: 20px;
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
`;

const Description = styled.p`
  color: grey;
  font-size: 16px;
`;

const Price = styled.div`
  position: absolute;
  bottom: 15px;
  left: 15px;
  background: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;
