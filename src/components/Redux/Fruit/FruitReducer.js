import { BuyApple, BuyOrange, BuyWatermelon } from "./fruitType";

const fruitState = {
  apple: 15,
  orange: 18,
  watermelon: 35,
};
const fruitReducer = (state = fruitState, action) => {
  switch (action.type) {
    case BuyApple:
      return { ...state, apple: state.apple - action.payload };
    case BuyOrange:
      return { ...state, orange: state.orange - action.payload };
    case BuyWatermelon:
      return { ...state, watermelon: state.watermelon - action.payload };
    default:
      return state;
  }
};
export default fruitReducer;
