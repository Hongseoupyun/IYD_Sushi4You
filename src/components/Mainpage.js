import React from "react";
import styled from "styled-components";
import FoodImage from "../assets/Food_LandingPage.jpg";
import Arrow_Menu from "../assets/Arrow_Menu.png";
import Underlineimg from "../assets/Underline_Beige.png";
import { useNavigate } from "react-router-dom";

export default function Mainpage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/menu");
  };
  return (
    <Container>
      <Left>
        <Food src={FoodImage}></Food>
      </Left>
      <Right>
        <Address>
          <Paragraph>6465 Millcreek</Paragraph>
          <Paragraph>Drive #181</Paragraph>
          <Paragraph>Mississauga ON</Paragraph>
        </Address>
        <Underline src={Underlineimg} />
        <Hour>
          <BoldParagraph>Everyday</BoldParagraph>
          <RegularParagraph>11:30AM to 9:30PM</RegularParagraph>
        </Hour>
        <Wrapper>
          <Menu onClick={handleClick}>Menu</Menu>
          <Arrow src={Arrow_Menu} />
        </Wrapper>
      </Right>
    </Container>
  );
}

const Container = styled.div`
  background-color: #fdfaf5;
  height: 120vh;
  display: flex;
  padding-top: 15px;
`;
const Left = styled.div`
  height: 80%;
  width: 48%;
`;
const Food = styled.img`
  height: 100%;
  width: 100%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  height: 75%;
  justify-content: space-evenly;
  margin-left: 50px;
  width: 45%;
`;

const Address = styled.div`
  font-weight: 600;
  display: flex;
  flex-direction: column;
  font-size: 3.5rem; // updated font size
  color: #05493c;
`;
const Underline = styled.img``;

const Paragraph = styled.p`
  margin: 0; // removes default margin from paragraphs
  line-height: 1.2;
`;
const Hour = styled.div`
  font-size: 2.7rem; // updated font size
  color: #f14e23;
`;
const BoldParagraph = styled.p`
  margin: 0; // removes default margin from paragraphs
  font-weight: 600; // Bold font
`;

const RegularParagraph = styled.p`
  margin: 0; // removes default margin from paragraphs
  font-weight: 400; // Regular font
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center; // aligns items vertically
  justify-content: flex-start;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28%;
  height: 40px;
  min-width: 100px;
  max-width: 300px;
  border: 3px solid #05493c;
  border-radius: 180px;
  cursor: pointer;
  color: #05493c;
  font-size: 1.5rem;
  font-weight: 400;
  transition: all 0.3s ease; // transition effect to all changes

  &:hover {
    background-color: #05493c; // change the background color on hover
    color: #fdfaf5; // change the text color on hover
    transform: scale(1.1); // scales the button 10% larger on hover
  }

  &:active {
    transform: scale(0.9); // scales the button 10% smaller on click
  }
`;
const Arrow = styled.img`
  margin-left: 10px;
  height: 30px;
  width: 13%;
`;
