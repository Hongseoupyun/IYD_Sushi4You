import React from "react";
import styled from "styled-components";
import Icon from "../assets/Phone.png";
import Star from "../assets/Star_Beige.png";
import { mobile } from "responsive";

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
      <StarDeco1 src={Star} />
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

  ${mobile`
    padding-bottom: 1rem;
  `}
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25%;
  align-items: center;

  ${mobile`
    width: 50%;
  `}
`;

const MenuItem = styled.button`
  font-size: 1.25rem;
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

  ${mobile`
    font-size: 0.8rem;
  `}
`;

const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #d0dcd0;

  ${mobile`
    width: 8px;
    height: 8px;
  `}
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
  width: 25%;

  ${mobile`
    width: 50%;
  `}
`;

const PhoneNumber = styled.a`
  color: #05493c;
  font-size: 1.7rem;
  text-decoration: none;

  ${mobile`
    font-size: 1.2rem;
  `}
`;

const PhoneIcon = styled.img`
  width: 3rem;
  height: auto;
  margin-right: 10px;

  ${mobile`
    width: 2rem;
  `}
`;

const StarDeco1 = styled.img`
  position: absolute;
  right: 300px;
  width: 3rem;
  height: 3rem;
  z-index: 0;

  ${mobile`
    right: 150px;
    width: 3rem;
    height: 3rem;
`}
`;
