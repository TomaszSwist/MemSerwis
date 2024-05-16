
import { createStore } from "redux";
import { memsReducer } from "./reducers/globalReducer";

const store = createStore(memsReducer);

export default store;