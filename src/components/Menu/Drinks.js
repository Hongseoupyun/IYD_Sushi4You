import React from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";

export default function Drinks(props) {
  const { items = [] } = props; // Default to an empty array if items is undefined

  return (
    <>
      <ItemGroup>ALCOHOL BEVERAGE</ItemGroup>
      {items
        .filter((item) => item.subCategory === "ALCOHOL BEVERAGE")
        .map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}

      <ItemGroup>SOFT DRINK</ItemGroup>
      {items
        .filter((item) => item.subCategory === "SOFT DRINK")
        .map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
    </>
  );
}

const ItemGroup = styled.div``; // Don't forget to style this component
