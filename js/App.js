const fruitStates = {
  watermelon: 10,
  apple: 10,
};
const foodStates = {
  sandwich: 20,
  pizza: 15,
};
const fruitReducer = (state = fruitStates, action) => {
  switch (action.type) {
    case "BuyWatermelon":
      return { ...state, watermelon: state.watermelon - 1 };
    case "BuyApple":
      return { ...state, apple: state.apple - 1 };
    case "FinishWatermelon":
      return { ...state, watermelon: state.watermelon };
    case "FinishApple":
      return { ...state, apple: state.apple };
    default:
      return state;
  }
};

const foodReducer = (state = foodStates, action) => {
  switch (action.type) {
    case "BuySandwich":
      return { ...state, sandwich: state.sandwich - 1 };
    case "BuyPizza":
      return { ...state, pizza: state.pizza - 1 };
    case "FinishSandwich":
      return { ...state, sandwich: state.sandwich };
    case "FinishPizza":
      return { ...state, pizza: state.pizza };
    default:
      return state;
  }
};
const rootReducer = Redux.combineReducers({
  fruit: fruitReducer,
  food: foodReducer,
});

const store = Redux.createStore(rootReducer);
const render = () => {
  document.getElementById("countWatermelon").innerHTML =
    store.getState().fruit.watermelon;
  document.getElementById("countApple").innerHTML =
    store.getState().fruit.apple;
  document.getElementById("countSandwich").innerHTML =
    store.getState().food.sandwich;
  document.getElementById("countPizza").innerHTML = store.getState().food.pizza;
};
store.subscribe(() => {
  render();
});
document.getElementById("btnWatermelon").addEventListener("click", () => {
  store.dispatch({ type: "BuyWatermelon" });
});
document.getElementById("btnApple").addEventListener("click", () => {
  store.dispatch({ type: "BuyApple" });
});
document.getElementById("btnSandwich").addEventListener("click", () => {
  store.dispatch({ type: "BuySandwich" });
});
document.getElementById("btnPizza").addEventListener("click", () => {
  store.dispatch({ type: "BuyPizza" });
});
render();
