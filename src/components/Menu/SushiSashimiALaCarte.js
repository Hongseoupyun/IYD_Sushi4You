import React from "react";
import styled from "styled-components";
import MenuItemNoPrice from "components/Menu/MenuItemNoPrice";

export default function SushiSashimiALaCarte(props) {
  const { items = [] } = props; // Default to an empty array if items is undefined

  return (
    <>
      <ItemGroup>1 ORDER 2 PCS $4.99</ItemGroup>
      {items
        .filter((item) => item.price === "$4.99")
        .map((item) => (
          <MenuItemNoPrice key={item.id} item={item} />
        ))}

      <ItemGroup>1 ORDER 2PCS - $5.99</ItemGroup>
      {items
        .filter((item) => item.price === "$5.99")
        .map((item) => (
          <MenuItemNoPrice key={item.id} item={item} />
        ))}
    </>
  );
}


const ItemGroup = styled.div``; // Don't forget to style this component
