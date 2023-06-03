import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Arrow_Menu from "../assets/Arrow_Menu.png";
import Underlineimg from "../assets/Underline_Beige.png";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import db from "firebaseConfig";

export default function Mainpage() {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const imgRef = collection(db, "image");
      const snapshot = await getDocs(imgRef);
      const data = snapshot.docs.map((doc) => doc.data());
      console.log("Firebase data:", data);
      setImageUrl(data[0].img);
    };

    fetchData();
  }, []);

  const handleMenuClick = () => {
    navigate("/menu");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleUberClick = () => {
    window.open(
      "https://www.ubereats.com/ca/store/sushi-for-you/xONBNyT1T0S8Ck4KOyWl2Q?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMlN1c2hpJTIwNCUyMFUlMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjJjYmMzYzI4Yy0wZDg3LTcwMzctM2QxNS1hYzhiOWZhYTNlNjQlMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIydWJlcl9wbGFjZXMlMjIlMkMlMjJsYXRpdHVkZSUyMiUzQTQzLjU5MTQ1MDIlMkMlMjJsb25naXR1ZGUlMjIlM0EtNzkuNzQxNDgwOCU3RA%3D%3D&ps=1",
      "_blank"
    );
  };

  return (
    <Container>
      <Left>
        <Food src={imageUrl}></Food>
      </Left>
      <Right>
        <Address>
          <Paragraph>6465 Millcreek</Paragraph>
          <Paragraph>Drive #181</Paragraph>
          <Paragraph>Mississauga, ON</Paragraph>
        </Address>
        <Underline src={Underlineimg} />
        <Hour>
          <BoldParagraph>Everyday</BoldParagraph>
          <RegularParagraph>11:30AM to 9:30PM</RegularParagraph>
        </Hour>
        <Wrapper>
          <Menu onClick={handleMenuClick}>
            <MenuText>Menu</MenuText>
          </Menu>
          <UberButton onClick={handleUberClick}>
            <MenuText>Order Online</MenuText>
          </UberButton>
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
  height: 75%;
  width: 45%;
`;
const Food = styled.img`
  height: 100%;
  width: 100%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  object-fit: cover;
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
  font-weight: bold;
  display: flex;
  flex-direction: column;
  font-size: 2.6rem; // updated font size
  color: #05493c;
  letter-spacing: 6px; // adjust as necessary
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

const MenuText = styled.div`
  position: relative;
  z-index: 2; // this will ensure the text stays above the ::before pseudo-element
`;

const Menu = styled.div`
  position: relative;
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
  font-size: 1.5rem;
  font-weight: 400;
  overflow: hidden;
  transition: all 0.3s ease, color 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #05493c;
    transition: width 0.4s ease;
    z-index: 1; // this will ensure the ::before pseudo-element stays below the text
  }

  &:hover {
    transform: scale(1.1);
    &::before {
      width: 100%;
    }
    ${MenuText} {
      color: white;
      font-weight: 600;
    }
  }

  &:active {
    transform: scale(0.9);
    font-weight: 600;
  }
`;

const UberButton = styled(Menu)`
  font-size: 1.25rem;
  margin-left: 20px;
  border-color: #eb1c23;
  color: #eb1c23;
  &:hover {
    ${MenuText} {
      color: white;
    }
  }

  &::before {
    background-color: #eb1c23;
  }
`;

const Arrow = styled.img`
  margin-left: 10px;
  height: 30px;
  width: 13%;
`;
