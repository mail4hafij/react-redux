import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import counterSlice from "./counterSlice";

const allReducers = combineReducers({
  counterReducer: counterReducer,
  counterSlice: counterSlice,
});

export default allReducers;
