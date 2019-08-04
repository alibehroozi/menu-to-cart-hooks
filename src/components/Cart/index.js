import React, { useContext } from "react";
import "./Cart.css";
import Product from "../Product";
import { StoreContext } from "../../store";

function Cart() {
  const {
    state: { cart },
    dispatch
  } = useContext(StoreContext);

  const productClicked = p => {
    dispatch({ type: "REMOVE_FROM_CART", payload: p });
  };

  const checkOut = () => {
    dispatch({ type: "CHECK_OUT", payload: cart });
  };

  return (
    <div className="cart">
      <div className="header">This is ur cart</div>
      {cart.map(p => (
        <Product
          product={p}
          key={p.id}
          onProductClick={() => productClicked(p)}
        />
      ))}
      <div className="amount">
        You should pay me{" "}
        <b>{cart.reduce((prevAm, p) => prevAm + p.price, 0)} </b>$ :)))))
        <input type="button" value="checkout" onClick={() => checkOut()} />
      </div>
    </div>
  );
}

export default Cart;
