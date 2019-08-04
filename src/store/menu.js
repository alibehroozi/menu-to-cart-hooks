export const menuInitialState = [
  { id: 0, name: "pizza", price: 1000 },
  { id: 1, name: "cock", price: 10 },
  { id: 2, name: "pepsi", price: 20 }
];

export default function(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return state.filter(p => p.id !== action.payload.id);
    case "REMOVE_FROM_CART":
      return [...state, action.payload];
    case "CHECK_OUT":
      return [...state, ...action.payload];
    default:
      return state;
  }
}
