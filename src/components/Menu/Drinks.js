import React from "react";
import styled from "styled-components";
import media from "responsive";
import MenuItem from "./MenuItem";

export default function Drinks(props) {
  const { items = [] } = props; // Default to an empty array if items is undefined

  return (
    <Container>
      <ItemGroup>ALCOHOL BEVERAGE</ItemGroup>
      <Menus>
        {items
          .filter(
            (item) =>
              item.subCategory === "ALCOHOL BEVERAGE" &&
              item.name.includes("Sake")
          )
          .map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        <Menus>
          {items
            .filter(
              (item) =>
                item.subCategory === "ALCOHOL BEVERAGE" &&
                item.liquorType === "BEER"
            )
            .map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
        </Menus>
      </Menus>

      <ItemGroup>SOFT DRINK</ItemGroup>
      <Menus>
        {items
          .filter((item) => item.subCategory === "SOFT DRINK")
          .map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
      </Menus>
    </Container>
  );
}

const Container = styled.div``;

const ItemGroup = styled.div`
  border: 1px solid #ddd;
  background-color: #99c0a3;
  font-size: 1.6em;
  color: #333;
  text-align: left;
  width: auto;
  display: inline-block;
  font-weight: 600;
  border-radius: 10px;
  padding: 10px 15px;

  ${media.mobileL`
    font-size: 1.2em;
    padding: 5px 10px;
    margin-top: 20px;
  `}

  ${media.galaxyFold`
    font-size: 1em;
  `}
`;

const Menus = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 45px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${media.mobileL`
    padding-top: 20px;
    padding-bottom: 0px;
  `}
  ${media.galaxyFold`
    padding-top: 10px;
    padding-bottom: 0px;
  `}
`;
