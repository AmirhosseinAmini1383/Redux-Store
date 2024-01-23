import { BuyPizza, BuySandwich, BuySoda } from "./foodType";

const foodState = {
  sandwich: 28,
  pizza: 30,
  soda: 50,
};
const foodReducer = (state = foodState, action) => {
  switch (action.type) {
    case BuySandwich:
      return { ...state, sandwich: state.sandwich - action.payload };
    case BuyPizza:
      return { ...state, pizza: state.pizza - action.payload };
    case BuySoda:
      return { ...state, soda: state.soda - action.payload };
    default:
      return state;
  }
};
export default foodReducer;
