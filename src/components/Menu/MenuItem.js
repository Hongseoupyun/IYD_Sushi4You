import React from "react";
import styled from "styled-components";
import media from "responsive";

function MenuItem(props) {
  const { item } = props;

  return (
    <MenuItemContainer>
      <ItemInfo>
        <ItemNameAndPrice>
          <ItemName>
            {item.name}
            {item.veg && " 🥦"}
            {item.spicy && " 🌶️"}
          </ItemName>
          <ItemPrice>{item.price}</ItemPrice>
        </ItemNameAndPrice>
        <ItemDescription>{item.desc}</ItemDescription>
      </ItemInfo>
    </MenuItemContainer>
  );
}

const MenuItemContainer = styled.div`
  width: calc(50% - 20px);
  margin-bottom: 10px;

  ${media.tablet`
    width: calc(50% - 10px);
  `}

  ${media.mobileL`
    width: 100%;
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
    margin: 12px 0;
  `}

  ${media.galaxyFold`
    margin: 9px 0;
  `}
`;

const ItemNameAndPrice = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.95em;
  width: 100%;
`;

const ItemName = styled.h2`
  font-size: 1.5em;
  color: #333;
  text-align: left;
  font-weight: 600;
  margin-bottom: 10px;

  ${media.mobileL`
    font-size: 1em;
    margin-bottom: 7px;
  `}
  ${media.galaxyFold`
    font-size: 0.85em;
  `}
`;

const ItemDescription = styled.p`
  font-size: 1em;
  color: #666;
  text-align: left;
  font-weight: semi-bold;

  ${media.mobileL`
    font-size: 0.7em;
  `}
  ${media.galaxyFold`
    font-size: 0.65em;
  `}

`;

const ItemPrice = styled.span`
  font-size: 1.5em;
  font-weight: 600;
  color: #333;

  ${media.mobileL`
    font-size: 1.2em;
  `}
  ${media.galaxyFold`
    font-size: 0.8em;
  `}
`;

export default MenuItem;
