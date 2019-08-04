/*
Author: Ali behroozi -> behrooziali28@gmail.com
*/
import React from "react";
import "./App.css";
import Cart from "../Cart";
import Menu from "../Menu";
import { useCombineReducers, StoreContext } from "../../store";

function App() {
  const [state, dispatch] = useCombineReducers();
  return (
    <StoreContext.Provider value={{ dispatch, state }}>
      <div className="container">
        <Menu />
        <hr />
        <Cart />
      </div>
    </StoreContext.Provider>
  );
}

export default App;
