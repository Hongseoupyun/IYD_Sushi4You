import React from "react";
import styled from "styled-components";
import media from "responsive";

function MenuCard(props) {
  const { name, description, price, img } = props;
  return (
    <Card>
      <Image src={img} alt={name} />
      <Content>
        <Name>{name}</Name>
        <Description>{description}</Description>
        <Price>{price}</Price>
      </Content>
    </Card>
  );
}

export default MenuCard;

const Card = styled.div`
  position: relative;
  width: 220px;
  height: 425px;
  border-radius: 15px;
  overflow: unset;
  box-shadow: 0 5px 7.5px rgba(0, 0, 0, 0.1);
  margin: 20px;
  background-color: #fdfaf5;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }

  ${media.tablet`
    width: 180px;
    height: 385px;
    margin: 15px;
  `}

  ${media.mobile`
    width: 150px;
    height: 279px;
    margin: 8px;
  `}
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;

  ${media.tablet`
    height: 180px;
  `}

  ${media.mobile`
    height: 130px;
  `}
`;

const Content = styled.div`
  padding: 13px;
  font-size: 10px;

  ${media.tablet`
    padding: 10px;
    font-size: 9px;
  `}

  ${media.mobile`
    padding: 6px;
    font-size: 7px;
  `}
`;

const Name = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #05493c;

  ${media.tablet`
    font-size: 16px;
    margin-bottom: 8px;
  `}

  ${media.mobile`
    font-size: 12px;
    margin-bottom: 5px;
  `}
`;

const Description = styled.p`
  color: #05493c;
  font-size: 14.5px;
  height: 120px;
  word-break: break-word;
  overflow: unset;

  ${media.tablet`
    font-size: 11.5px;
    height: 110px;
  `}

  ${media.mobile`
    font-size: 9px;
    height: 90px;
  `}
`;

const Price = styled.div`
  position: absolute;
  bottom: 10px;
  left: -15px;
  z-index: 5;
  background: #f14e23;
  padding: 5px 10px;
  height: 25px;
  width: 50px;
  border-radius: 50px;
  font-size: 15px;
  font-weight: 400;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${media.tablet`
    bottom: 8px;
    left: -13px;
    height: 23px;
    width: 48px;
    font-size: 14px;
  `}

  ${media.mobile`
    bottom: 6px;
    left: -11px;
    height: 20px;
    width: 42px;
    font-size: 12px;
  `}
`;
