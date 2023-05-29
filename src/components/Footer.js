import React from "react";
import styled from "styled-components";
import Icon from "../assets/Phone.png";

export default function Footer(props) {
  const { handleMenuClick } = props;

  return (
    <Container>
      <Top>
        <Menu>
          <MenuItem onClick={() => handleMenuClick("Home")}>Home</MenuItem>
          <Circle />
          <MenuItem onClick={() => handleMenuClick("Menu")}>Menu</MenuItem>
          <Circle />
          <MenuItem onClick={() => handleMenuClick("Location")}>
            Location
          </MenuItem>
        </Menu>
      </Top>
      <Bottom>
        <Phone>
          <PhoneIcon src={Icon} />
          <PhoneNumber href="tel:1-905-858-9412">1-905-858-9412</PhoneNumber>
        </Phone>
      </Bottom>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fdfaf5;
  height: 25vh;
  justify-content: space-evenly;
  padding-bottom: 2rem;
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25%; // Adjust this to suit your needs
  align-items: center;
`;

const MenuItem = styled.button`
  font-size: 1rem;
  color: #05493c;
  font-weight: 600;
  cursor: pointer;
  background: transparent;
  border: none;
  transition: transform 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: scale(1.2);
  }
`;

const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #d0dcd0;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Phone = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 25%; // Adjust this to suit your needs
`;
const PhoneNumber = styled.a`
  color: #05493c;
  font-size: 1.7rem; // Adjust as necessary
  text-decoration: none; // optional: to remove underline from link
`;

const PhoneIcon = styled.img`
  width: 3rem; // Adjust as necessary
  height: auto;
  margin-right: 10px; // adding some space between icon and number
`;
