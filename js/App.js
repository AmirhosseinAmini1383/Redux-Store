const states = {
  watermelon: 1000,
};
const reducer = (state = states, action) => {
  switch (action.type) {
    case "BuyWatermelon":
      return { watermelon: state.watermelon - 1 };
    case "stop":
      return { watermelon: state.watermelon };
    default:
      return state;
  }
};
const store = Redux.createStore(reducer);
store.subscribe(() => {
  document.getElementById("count").innerHTML = store.getState().watermelon;
});
document.getElementById("btn-buy").addEventListener("click", () => {
  if (!store.getState().watermelon == 0) {
    store.dispatch({ type: "BuyWatermelon" });
  } else {
    store.dispatch({ type: "stop" });
  }
});
document.getElementById("count").innerHTML = store.getState().watermelon;
