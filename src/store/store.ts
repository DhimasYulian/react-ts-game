import { createStore } from "redux";
import {libraryReducer} from './reducers'
const store = createStore(libraryReducer);

export default store;
