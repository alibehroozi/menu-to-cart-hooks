export const cartInitialState = [];

export default function(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      return state.filter(p => p.id !== action.payload.id);
    case "CHECK_OUT":
      return [];
    default:
      return state;
  }
}
