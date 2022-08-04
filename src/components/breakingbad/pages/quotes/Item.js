import React from "react";

function Item({ items }) {
  return <div style={{padding :'2%'}}>
    <q>{items.quote}</q><br/>
    by <strong>{items.author}</strong>
  </div>;
}

export default Item;
