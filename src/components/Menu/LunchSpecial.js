import React from "react";
import styled from "styled-components";
import MenuItemNoPrice from "components/Menu/MenuItemNoPrice";

export default function LunchSpecial(props) {
  const { items = [] } = props; // Default to an empty array if items is undefined

  return (
    <>
      <ItemGroup>Served with miso soup, salad & rice $13.99</ItemGroup>
      {items
        .filter((item) => item.price === "$13.99")
        .map((item) => (
          <MenuItemNoPrice key={item.id} item={item} />
        ))}

      <ItemGroup>
        Served with miso soup, salad , 4 pcs assorted tempura, 6 pcs California
        roll and 1 gyoza $18.99{" "}
      </ItemGroup>
      {items
        .filter((item) => item.price === "$18.99")
        .map((item) => (
          <MenuItemNoPrice key={item.id} item={item} />
        ))}
      <ItemGroup>
        Served with miso soup, salad, 5 pcs assorted vegetable tempura, 6 pcs
        Avo&Cu roll and 1 spring roll $17.99
      </ItemGroup>
      {items
        .filter((item) => item.price === "$17.99")
        .map((item) => (
          <MenuItemNoPrice key={item.id} item={item} />
        ))}
    </>
  );
}


const ItemGroup = styled.div``; // Don't forget to style this component
