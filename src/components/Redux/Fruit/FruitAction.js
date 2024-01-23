import { BuyApple, BuyOrange, BuyWatermelon } from "./FruitType";

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
