import { combineReducers } from "redux";
import foodReducer from "./Food/foodReducer";
import fruitReducer from "./Fruit/fruitReducer";

const rootReducer = combineReducers({
  fruit: fruitReducer,
  food: foodReducer,
});
export default rootReducer;
