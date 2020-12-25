import { combineReducers } from "redux";

import { GetCountriesReducer } from "./SearchCountriesReducer";
const rootReducer = combineReducers({
  GetCountriesReducer,
});
export default rootReducer;
