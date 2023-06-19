import React, { useState, useEffect } from "react";
import styled from "styled-components";
import media from "responsive";
import Arrow_Menu from "assets/Arrow_Menu.png";
import Underlineimg from "assets/Underline_Beige.png";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import db from "firebaseConfig";

// Import a loading spinner component
import { Puff } from "react-loader-spinner";

export default function Mainpage() {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true); // Add this state

  useEffect(() => {
    const fetchData = async () => {
      const imgRef = collection(db, "image");
      const snapshot = await getDocs(imgRef);
      const data = snapshot.docs.map((doc) => doc.data());
      console.log("Firebase data:", data);
      setImageUrl(data[0].img);
      setLoading(false); // Set loading to false when done fetching
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
        {loading ? (
          <StyledPuffWrapper>
            <Puff
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          </StyledPuffWrapper>
        ) : (
          <Food src={imageUrl}></Food>
        )}
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

  ${media.tabletL`
    flex-direction: row;
    height: 50vh;
    align-items: center;
  `}
  ${media.tablet`
    height: 50vh;
    align-items: center;
  `}
  ${media.mobileL`
    flex-direction: column;
    align-items: center;
    padding-bottom: 15px;
    height: 90vh;
  `}
  ${media.mobileM`
    flex-direction: column;
    align-items: center;
    padding-bottom: 15px;
    height: 100vh;
  `}
  ${media.mobileS`
    flex-direction: column;
    align-items: center;
    padding-bottom: 15px;
    height: 100vh;
  `}
`;

const StyledPuffWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  animation: fadein 2s infinite;

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const Left = styled.div`
  height: 75%;
  width: 45%;

  ${media.tabletL`
    width: 45%;
    height: 100%;
  `}
  ${media.tablet`
    width: 40%;
    height: 100%;
  `}
  ${media.mobileL`
    width: 100%;
    height: 50%;
  `}
  ${media.mobileM`
    width: 100%;
    height: 50%;
  `}
`;

const Food = styled.img`
  height: 100%;
  width: 100%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  object-fit: cover;

  ${media.tabletL`
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    object-fit: fill;
    width: 116%;
  `}
  ${media.tablet`
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    object-fit: fill;
    width: 127%;
  `}
  ${media.mobileL`
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    object-fit: revert;
    height: 95%;
    width: 100%;
  `}
  ${media.mobileM`
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    object-fit: revert;
    height: 95%;
    width: 100%;
  `}
  ${media.mobileS`
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    object-fit: revert;
    height: 95%;
    width: 100%;
  `}
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  height: 75%;
  justify-content: space-evenly;
  margin-left: 50px;
  width: 45%;

  ${media.tabletL`
    width: 45%;
    margin-left: 70px;
    height: 100%;
  `}

  ${media.tablet`
    width: 45%;
    margin-left: 95px;
    height: 100%;
  `}
  ${media.mobileL`
    width: 90%;
    margin-left: 0;
    height: 50%;
  `}
  ${media.mobileM`
    width: 90%;
    margin-left: 0;
    height: 50%;
  `}
  ${media.mobileS`
    width: 90%;
    margin-left: 0;
    height: 50%;
  `}
`;

const Address = styled.div`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  font-size: 2.6rem;
  color: #05493c;
  letter-spacing: 6px;

  ${media.tabletL`
    font-size: 2.4rem;
    letter-spacing: 3px;
  `}

  ${media.tablet`
    font-size: 2.3rem;
    letter-spacing: 3px;
  `}

  ${media.mobileL`
    font-size: 1.7rem;
    letter-spacing: 3px;
  `}

  ${media.mobileM`
    font-size: 1.5rem;
    letter-spacing: 3px;
  `}

  ${media.mobileS`
    font-size: 1.3rem;
    letter-spacing: 2px;
  `}
`;

const Underline = styled.img``;

const Paragraph = styled.p`
  margin: 0; // removes default margin from paragraphs
  line-height: 1.2;
`;

const Hour = styled.div`
  font-size: 2.7rem;
  color: #f14e23;

  ${media.tabletL`
    font-size: 2.1rem;
  `}

  ${media.tablet`
    font-size: 1.9rem;
  `}

  ${media.mobileL`
    font-size: 1.7rem;
  `}

  ${media.mobileM`
    font-size: 1.5rem;
  `}

  ${media.mobileS`
    font-size: 1.3rem;
  `}
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
  align-items: center;
  justify-content: flex-start;

  ${media.mobileL`
    justify-content: space-around;
  `}
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

  ${media.tabletL`
    width: 40%;
    font-size: 1.2rem;
  `}

  ${media.tablet`
    width: 45%;
    font-size: 1.1rem;
  `}

  ${media.mobileL`
    width: 50%;
    font-size: 1rem;
  `}

  ${media.mobileM`
    width: 55%;
    font-size: 0.9rem;
  `}

  ${media.galaxyFold`
    width: 20%;
    margin-left: 0;
  `}
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

  ${media.tabletL`
    font-size: 1rem;
  `}

  ${media.tablet`
    font-size: 0.9rem;
  `}

  ${media.mobileL`
    font-size: 0.85rem;
  `}
`;

const Arrow = styled.img`
  margin-left: 10px;
  height: 30px;
  width: 13%;

  ${media.tabletL`
    height: 25px;
    width: 12%;
  `}

  ${media.tablet`
    height: 23px;
    width: 11%;
  `}

  ${media.mobileL`
    height: 20px;
    width: 10%;
  `}

  ${media.galaxyFold`
    display: none;
  `}
`;
