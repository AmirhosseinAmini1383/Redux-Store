import { BuyPizza, BuySandwich, BuySoda } from "./foodType";

export const buySandwich = (count) => {
  return {
    type: BuySandwich,
    payload: count,
  };
};
export const buyPizza = (count) => {
  return {
    type: BuyPizza,
    payload: count,
  };
};
export const buySoda = (count) => {
  return {
    type: BuySoda,
    payload: count,
  };
};
