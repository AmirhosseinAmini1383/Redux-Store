import { BuyPizza, BuySandwich, BuySoda } from "./foodType";

const foodState = {
  sandwich: 28,
  pizza: 30,
  soda: 50,
};
const foodReducer = (state = foodState, action) => {
  switch (action.type) {
    case BuySandwich:
      return { ...state, sandwich: state.sandwich - 1 };
    case BuyPizza:
      return { ...state, pizza: state.pizza - 1 };
    case BuySoda:
      return { ...state, soda: state.soda - 1 };
    default:
      return state;
  }
};
export default foodReducer;
