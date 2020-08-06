import { combineReducers, createStore } from "redux";
import { counterReducer } from "./counter/reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
