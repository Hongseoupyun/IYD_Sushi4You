import React from "react";
import styled from "styled-components";
import media from "responsive";

export default function MenuItemNoPrice(props) {
  const { item } = props;

  return (
    <MenuItemContainer>
      <ItemInfo>
        <ItemName>
          {item.name}
          {item.veg && " 🥦"}
          {item.spicy && " 🌶️"}
        </ItemName>
        <ItemDescription>{item.desc}</ItemDescription>
      </ItemInfo>
    </MenuItemContainer>
  );
}

const MenuItemContainer = styled.div`
  width: calc(50% - 20px);
  margin-bottom: 10px;

  ${media.mobileL`
    width: 100%;
    margin-bottom: 15px;
  `}
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  margin: 17px 0;

  ${media.mobileL`
    margin: 10px 0;
  `}
`;

const ItemName = styled.h2`
  font-size: 1.5em;
  color: #333;
  text-align: left;
  font-weight: 600;
  margin-bottom: 10px;

  ${media.mobileL`
    font-size: 1.1em;
    margin-bottom: 5px;
  `}
  ${media.galaxyFold`
    font-size: 0.9em;
    margin-bottom: 3px;
  `}
`;

const ItemDescription = styled.p`
  font-size: 1em;
  color: #666;
  text-align: left;
  font-weight: semi-bold;

  ${media.mobileL`
    font-size: 0.9em;
  `}
`;
