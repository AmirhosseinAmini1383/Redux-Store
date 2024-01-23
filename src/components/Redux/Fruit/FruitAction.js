import { BuyApple, BuyOrange, BuyWatermelon } from "./fruitType";

export const buyApple = () => {
  return {
    type: BuyApple,
  };
};
export const buyOrange = () => {
  return {
    type: BuyOrange,
  };
};
export const buyWatermelon = () => {
  return {
    type: BuyWatermelon,
  };
};
