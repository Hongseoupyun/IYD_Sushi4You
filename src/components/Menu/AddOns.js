import React from 'react'
import MenuItem from './MenuItem'

export default function AddOns(props) {
  const { items = [] } = props;
  return (
    <>
      {items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </>
  );
}
