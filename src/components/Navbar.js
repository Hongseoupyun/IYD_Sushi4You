import React, { useEffect } from "react";
import styled from "styled-components";
import media from "responsive";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import CircleIcon from "../assets/Circle.png";
import Star from "../assets/Star_Beige.png";

export default function Navbar(props) {
  const { selectedMenuItem, handleMenuClick, setSelectedMenuItem } = props;
  // function to update selected menu item
  useEffect(() => {
    // function to handle scroll event
    const handleScroll = () => {
      if (window.pageYOffset === 0 && selectedMenuItem !== "Menu") {
        setSelectedMenuItem("Home");
      }
    };

    // add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [selectedMenuItem]);

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

  ${media.tablet`
    align-items: center;
  `}
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
    width: 30vw;
    height: auto;
  }

  ${media.tablet`
    svg {
      width: 50vw; 
    }
  `}

  ${media.mobile`
    svg {
      width: 60vw; 
    }
  `}
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 50px;

  ${media.tablet`
    flex-direction: column;
    margin-bottom: 40px;
  `}
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  align-items: center;

  ${media.tablet`
    width: 50%;
  `}

  ${media.mobile`
    width: 80%;
  `}
`;

const MenuItem = styled.button`
  font-size: 1.25rem;
  color: ${(props) => (props.isSelected ? "#f14e23" : "#05493c")};
  font-weight: 600;
  cursor: pointer;
  background: transparent;
  border: none;
  transition: transform 0.3s;
  transform: ${(props) => (props.isSelected ? "scale(1.27)" : "scale(1)")};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.2);
  }

  ${media.tablet`
    font-size: 1.0625rem;
  `}

  ${media.mobile`
    font-size: 0.85rem;
  `}
`;

const SelectedIcon = styled.img`
  position: absolute;
  top: -1px;
  width: 6rem;
  height: 2rem;
  font-weight: 600;
  z-index: 5;
  ${media.mobile`
    width: 4rem;
    height: 1.5rem;
  `}
`;

const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #d0dcd0;
  ${media.mobile`
    width: 7px;
    height: 7px;
  `}
`;

const StarDeco1 = styled.img`
  position: absolute;
  top: 200px;
  right: 200px;
  width: 3.5rem;
  height: 3.5rem;
  z-index: 0;

  ${media.tablet`
    top: 250px;
    right: 150px;
    width: 2.5rem;
  height: 2.5rem;
  `}

  ${media.mobile`
    top: 140px;
    right: 65px;
    width: 1.5rem;
  height: 1.5rem;
  `}
`;
