import { useReducer, createContext } from "react";
import cart, { cartInitialState } from "./cart";
import menu, { menuInitialState } from "./menu";

function combineReducers(reducers) {
  const store = Object.keys(reducers).map(reducerName =>
    useReducer(
      reducers[reducerName].reducer,
      reducers[reducerName].initialState
    )
  );
  const dispatch = action => store.forEach(reducer => reducer[1](action));
  const state = store.reduce((prevState, reducer, i) => {
    return { ...prevState, [Object.keys(reducers)[i]]: reducer[0] };
  }, {});
  return [state, dispatch];
}

export const useCombineReducers = combineReducers.bind(null, {
  cart: { reducer: cart, initialState: cartInitialState },
  menu: { reducer: menu, initialState: menuInitialState }
});

export const StoreContext = createContext(null);
