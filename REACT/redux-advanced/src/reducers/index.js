import { combineReducers, createStore } from "redux";
import cars from "./cars_reducers";

const rootReducer = combineReducers({
  cars
});
export default rootReducer;
// export default () => {
//   const store = createStore(rootReducer);
//   return store;
// };
