import React from "react";
import styled from "styled-components";
import Icon from "../assets/Phone.png";

export default function Footer() {
  return (
    <Container>
      <Top>
        <Menu>
          <MenuItem>Home</MenuItem>
          <Circle />
          <MenuItem>Menu</MenuItem>
          <Circle />
          <MenuItem>Location</MenuItem>
        </Menu>
      </Top>
      <Bottom>
        <Phone>
          <PhoneIcon src={Icon} />
          <PhoneNumber>1-905-858-9412</PhoneNumber>
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
  font-size: 1rem; // start with 1rem and adjust as necessary
  color: #05493c;
  font-weight: 600;
  cursor: pointer;
  background: transparent;
  border: none;
  transition: transform 0.3s;
  /* transform: ${(props) =>
    props.isSelected ? "scale(1.27)" : "scale(1)"}; */
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
const PhoneNumber = styled.div`
  color: #05493c;
  font-size: 1.7rem; // Adjust as necessary
`;

const PhoneIcon = styled.img`
  width: 3rem; // Adjust as necessary
  height: auto;
`;
