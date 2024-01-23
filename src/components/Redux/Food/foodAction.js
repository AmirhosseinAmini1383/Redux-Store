import { BuyPizza, BuySandwich, BuySoda } from "./foodType";

export const buySandwich = () => {
  return {
    type: BuySandwich,
  };
};
export const buyPizza = () => {
  return {
    type: BuyPizza,
  };
};
export const buySoda = () => {
  return {
    type: BuySoda,
  };
};
