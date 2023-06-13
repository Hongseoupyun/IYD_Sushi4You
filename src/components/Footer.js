import React, { useState } from "react";
import styled from "styled-components";
import media from "responsive";
import { FaArrowCircleUp } from "react-icons/fa";
import Icon from "../assets/Phone.png";
import Star from "../assets/Star_Beige.png";

export default function Footer(props) {
  const { handleMenuClick } = props;

  // Add state to handle the visibility of the button
  const [visible, setVisible] = useState(false);

  // Function to handle scrolling
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setVisible(false);
  };

  // Function to handle button visibility
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  // Add scroll event listener to window
  window.addEventListener("scroll", toggleVisible);

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
          <ScrollToTop>
            <FaArrowCircleUp
              onClick={scrollToTop}
              style={{ display: visible ? "inline" : "none" }}
            />
          </ScrollToTop>
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

  ${media.tablet`
    padding-bottom: 1.5rem;
    `}
  ${media.mobile`
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

  ${media.tablet`
    width: 40%;
  `}
  ${media.mobile`
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

  ${media.tablet`
    font-size: 1rem;
  `}
  ${media.mobile`
    font-size: 0.8rem;
  `}
`;

const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #d0dcd0;

  ${media.tablet`
    width: 10px;
    height: 10px;
  `}

  ${media.mobile`
    width: 8px;
    height: 8px;
  `}
`;

const ScrollToTop = styled.div`
  position: fixed;
  right: 50px; // Control the horizontal position from right
  bottom: 50px; // Control the vertical position from bottom
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  color: #f14e23;
  font-size: 2.6em; // Increase the size of the icon
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.2);
    transition: transform 0.3s;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${media.tablet`
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `}

  ${media.mobile`
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`;

const Phone = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 25%;

  ${media.tablet`
    width: 30%;
    justify-content: space-around;
  `}

  ${media.mobile`
    width: 100%;
    justify-content: center;
    margin-top: 1rem;
  `}
`;

const PhoneNumber = styled.a`
  color: #05493c;
  font-size: 1.7rem;
  text-decoration: none;

  ${media.tablet`
    font-size: 1.5rem;
  `}

  ${media.mobile`
    font-size: 1.2rem;
  `}
`;

const PhoneIcon = styled.img`
  width: 3rem;
  height: auto;
  margin-right: 10px;

  ${media.tablet`
    width: 2.5rem;
  `}

  ${media.mobile`
    width: 2rem;
  `}
`;

const StarDeco1 = styled.img`
  position: absolute;
  right: 300px;
  width: 3rem;
  height: 3rem;
  z-index: 0;

  ${media.tablet`
    right: 200px;
    width: 2.5rem;
    height: 2.5rem;
  `}

  ${media.mobile`
    right: 100px;
    width: 1.5rem;
    height: 1.5rem;
  `}
`;
