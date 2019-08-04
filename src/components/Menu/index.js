import React, { useContext } from "react";
import "./Menu.css";
import Product from "../Product";
import { StoreContext } from "../../store";

function Menu() {
  const {
    state: { menu },
    dispatch
  } = useContext(StoreContext);

  const productClicked = p => {
    dispatch({ type: "ADD_TO_CART", payload: p });
  };

  return (
    <div className="menu">
      <div className="header">This is menu</div>
      {menu.map(p => (
        <Product
          product={p}
          key={p.id}
          onProductClick={() => productClicked(p)}
        />
      ))}
    </div>
  );
}

export default Menu;
