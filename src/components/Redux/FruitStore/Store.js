import { createStore } from "redux";
import fruitReducer from "../Fruit/FruitReducer";

const Store = createStore(fruitReducer);
export default Store;
