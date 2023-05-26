import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import CircleIcon from "../assets/Circle.png"; // import the image file

export default function Navbar(props) {
  const { defaultMenuItem } = props;
  const [selectedMenuItem, setSelectedMenuItem] = useState(defaultMenuItem);

  const handleClick = (itemName) => {
    setSelectedMenuItem(itemName);
  };

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
            onClick={() => handleClick("Home")}
          >
            Home
            {selectedMenuItem === "Home" && <SelectedIcon src={CircleIcon} />}
          </MenuItem>
          <Circle />
          <MenuItem
            isSelected={selectedMenuItem === "Menu"}
            onClick={() => handleClick("Menu")}
          >
            Menu
            {selectedMenuItem === "Menu" && <SelectedIcon src={CircleIcon} />}
          </MenuItem>
          <Circle />
          <MenuItem
            isSelected={selectedMenuItem === "Location"}
            onClick={() => handleClick("Location")}
          >
            Location
            {selectedMenuItem === "Location" && (
              <SelectedIcon src={CircleIcon} />
            )}
          </MenuItem>
        </Menu>
      </Bottom>
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
  font-size: 1rem; // start with 1rem and adjust as necessary
  color: #05493c;
  font-weight: 600;
  cursor: pointer;
  background: transparent;
  border: none;
  transition: transform 0.3s;
  transform: ${(props) => (props.isSelected ? "scale(1.2)" : "scale(1)")};
  position: relative; // to position the SelectedIcon relative to this
  display: flex;
  align-items: center;
  justify-content: center;
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
