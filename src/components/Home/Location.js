import React from "react";
import styled from "styled-components";
import media from "responsive";
import ArrowIcon from "assets/Arrow_Beige.png";

const Location = React.forwardRef((props, ref) => {
  return (
    <Container ref={ref} id="location">
      <StyledIframe
        title="Google Maps Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.727026466004!2d-79.74381652412181!3d43.591401871105106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b6a78ee7f812d%3A0x694e630f05648c88!2sSUSHI4U!5e0!3m2!1sen!2sca!4v1685247850902!5m2!1sen!2sca"
        style={{ border: "7px solid white" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <LocationInfo>
        <Wrapper>
          <Heading>Location</Heading>
          <Arrow src={ArrowIcon} />
          <Text>
            <Paragraph>6465 Millcreek</Paragraph>
            <Paragraph>Drive #181</Paragraph>
            <Paragraph>Mississauga ON</Paragraph>
            <Paragraph>L5N 5R3</Paragraph>
          </Text>
        </Wrapper>
      </LocationInfo>
    </Container>
  );
});

export default Location;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: #fdfaf5;
  height: 100vh;
  width: 100%;

  ${media.tabletL`
    height: 100vh;
  `}
  ${media.tablet`
  `}
  ${media.mobileL`
    height: 65vh;
  `}
  ${media.mobileM`
    height: 60vh;
  `}
  ${media.mobileS`
    height: 60vh;
  `}
`;

const StyledIframe = styled.iframe`
  width: 75%;
  height: 80%;
  z-index: 1;
  margin-left: 35px;

  ${media.tabletL`
    width: 85%;
    height: 70%;
    margin-left: 30px;
  `}
  ${media.tablet`
    width: 85%;
    height: 70%;
    margin-left: 20px;
  `}
  ${media.mobileL`
    width: 80%;
    height: 75%;
    margin-left: 15px;
  `}
  ${media.mobileM`
    width: 80%;
    height: 70%;
    margin-left: 10px;
  `}
  ${media.mobileS`
    width: 85%;
    height: 68%;
    margin-left: 5px;
  `}
`;

const LocationInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fdfaf5;
  position: absolute;
  right: 40px;
  border: 3px solid #f14e23;
  border-radius: 180px;
  height: 65%;
  width: 25%;
  z-index: 2;

  ${media.tabletL`
    right: 21px;
    width: 30%;
    height: 45%;
  `}
  ${media.tablet`
    right: 15px;
    width: 30%;
    height: 35%;
  `}
  ${media.mobileL`
    right: 10px;
    width: 35%;
    height: 40%;
  `}
  ${media.mobileM`
  right: 4px;
    width: 35%;
    height: 45%;
  `}
  ${media.mobileS`
   right: 4px;
    width: 35%;
    height: 41%;
  `}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80%;
  justify-content: space-evenly;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  color: #05493c;
  font-weight: 600;
  text-align: center;

  ${media.tabletL`
    font-size: 2.2rem;
  `}
  ${media.tablet`
    font-size: 1.6rem;
  `}
  ${media.mobileL`
    font-size: 1.2rem;
  `}
  ${media.mobileM`
    font-size: 1rem;
  `}
  ${media.mobileS`
    font-size: 0.8rem;
  `}
`;

const Arrow = styled.img`
  width: 130px;
  height: auto;

  ${media.tabletL`
    width: 110px;
  `}
  ${media.tablet`
    width: 90px;
  `}
  ${media.mobileL`
    width: 70px;
  `}
  ${media.mobileM`
    width: 50px;
  `}
  ${media.mobileS`
    width: 40px;
  `}
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-size: 1.7rem;
  color: #05493c;
  text-align: center;
  font-weight: 400;

  ${media.tabletL`
    font-size: 1.5rem;
  `}
  ${media.tablet`
    font-size: 1.3rem;
  `}
  ${media.mobileL`
    font-size: 0.85rem;
  `}
  ${media.mobileM`
    font-size: 0.8rem;
  `}
  ${media.mobileS`
    font-size: 0.65rem;
  `}
`;

const Paragraph = styled.p`
  margin: 0;
`;
