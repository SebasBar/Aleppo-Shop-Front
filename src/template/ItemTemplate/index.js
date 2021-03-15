import { useState } from "react";
import { Item } from "../../components/item";
import "./item.style.css"

export const ItemTemplate = (props) => {
  const { data } = props;

  return (
    <div className="display">
      {data.map((e) => (
        <Item key={e.id} image={e.image} desc={e.desc} title={e.title} />
      ))}
    </div>
  );
};
