import React from "react";
import styled from "styled-components";
import MenuItemNoPrice from "components/Menu/MenuItemNoPrice";
export default function MakiRoll(props) {
  const { items = [] } = props; // Default to an empty array if items is undefined

  return (
    <>
      <ItemGroup>1 ORDER 6 PCS $5.99</ItemGroup>
      {items
        .filter((item) => item.price === "$5.99")
        .map((item) => (
          <MenuItemNoPrice key={item.id} item={item} />
        ))}

      <ItemGroup>1 ORDER 6 PCS $6.99</ItemGroup>
      {items
        .filter((item) => item.price === "$6.99")
        .map((item) => (
          <MenuItemNoPrice key={item.id} item={item} />
        ))}
      <ItemGroup>1 ORDER 6 PCS $7.99</ItemGroup>
      {items
        .filter((item) => item.price === "$7.99")
        .map((item) => (
          <MenuItemNoPrice key={item.id} item={item} />
        ))}
    </>
  );
}

const ItemGroup = styled.div``; // Don't forget to style this component
