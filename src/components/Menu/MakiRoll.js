import React from "react";
import styled from "styled-components";
import MenuItemNoPrice from "components/Menu/MenuItemNoPrice";
export default function MakiRoll(props) {
  const { items = [] } = props; // Default to an empty array if items is undefined

  return (
    <Container>
      <ItemGroup>1 ORDER 6 PCS $5.99</ItemGroup>
      <Menus>
        {items
          .filter((item) => item.price === "$5.99")
          .map((item) => (
            <MenuItemNoPrice key={item.id} item={item} />
          ))}
      </Menus>
      <ItemGroup>1 ORDER 6 PCS $6.99</ItemGroup>
      <Menus>
        {items
          .filter((item) => item.price === "$5.99")
          .map((item) => (
            <MenuItemNoPrice key={item.id} item={item} />
          ))}
      </Menus>
      <ItemGroup>1 ORDER 6 PCS $7.99</ItemGroup>
      <Menus>
        {items
          .filter((item) => item.price === "$5.99")
          .map((item) => (
            <MenuItemNoPrice key={item.id} item={item} />
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
`;

const Menus = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 45px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
