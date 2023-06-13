import React from "react";
import MenuItem from "./MenuItem";

export default function MakiTray(props) {
  const { items = [] } = props;
  return (
    <>
      {items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </>
  );
}
