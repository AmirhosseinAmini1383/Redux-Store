import { BuyApple, BuyOrange, BuyWatermelon } from "./fruitType";

export const buyApple = (count) => {
  return {
    type: BuyApple,
    payload: count,
  };
};
export const buyOrange = (count) => {
  return {
    type: BuyOrange,
    payload: count,
  };
};
export const buyWatermelon = (count) => {
  return {
    type: BuyWatermelon,
    payload: count,
  };
};
