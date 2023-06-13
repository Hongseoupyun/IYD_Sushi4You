import React from "react";
import MenuItem from "./MenuItem";

function Appetizers(props) {
  const { items = [] } = props;
  return (
    <>
      {items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </>
  );
}

export default Appetizers;
