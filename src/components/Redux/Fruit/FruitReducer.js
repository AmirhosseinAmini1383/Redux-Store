import { BuyApple, BuyOrange, BuyWatermelon } from "./fruitType";

const fruitState = {
  apple: 15,
  orange: 18,
  watermelon: 35,
};
const fruitReducer = (state = fruitState, action) => {
  switch (action.type) {
    case BuyApple:
      return { ...state, apple: state.apple - 1 };
    case BuyOrange:
      return { ...state, orange: state.orange - 1 };
    case BuyWatermelon:
      return { ...state, watermelon: state.watermelon - 1 };
    default:
      return state;
  }
};
export default fruitReducer;
