import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import CircleIcon from "../assets/Circle.png";
import Star from "../assets/Star_Beige.png";

export default function Navbar(props) {
  const { selectedMenuItem, handleMenuClick } = props;

  return (
    <Container>
      <Top>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      </Top>
      <Bottom>
        <Menu>
          <MenuItem
            isSelected={selectedMenuItem === "Home"}
            onClick={() => handleMenuClick("Home")}
          >
            Home
            {selectedMenuItem === "Home" && <SelectedIcon src={CircleIcon} />}
          </MenuItem>
          <Circle />
          <MenuItem
            isSelected={selectedMenuItem === "Menu"}
            onClick={() => handleMenuClick("Menu")}
          >
            Menu
            {selectedMenuItem === "Menu" && <SelectedIcon src={CircleIcon} />}
          </MenuItem>
          <Circle />
          <MenuItem
            isSelected={selectedMenuItem === "Location"}
            onClick={() => handleMenuClick("Location")}
          >
            Location
            {selectedMenuItem === "Location" && (
              <SelectedIcon src={CircleIcon} />
            )}
          </MenuItem>
        </Menu>
      </Bottom>
      <StarDeco1 src={Star} />
    </Container>
  );
}

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: #fdfaf5;
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 35px;
  margin-bottom: 40px;
`;

const LogoWrapper = styled.div`
  svg {
    fill: #05493c;
    width: 30vw; // Adjust this to suit your needs
    height: auto;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%; // Adjust this to suit your needs
  margin-bottom: 50px;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%; // Adjust this to suit your needs
  align-items: center;
`;

const MenuItem = styled.button`
  font-size: 1.25rem; // start with 1rem and adjust as necessary
  color: #05493c;
  font-weight: 600;
  cursor: pointer;
  background: transparent;
  border: none;
  transition: transform 0.3s;
  transform: ${(props) => (props.isSelected ? "scale(1.27)" : "scale(1)")};
  position: relative; // to position the SelectedIcon relative to this
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: scale(1.2);
  }
`;

const SelectedIcon = styled.img`
  position: absolute;
  top: -5px;
  width: 6rem;
  height: 2rem;
  font-weight: 600;
  z-index: 5;
`;

const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #d0dcd0;
`;

const StarDeco1 = styled.img`
  position: absolute;
  top: 200px;
  right: 200px;
  width: 3.5rem;
  height: 3.5rem;
  z-index: 0;
`;
