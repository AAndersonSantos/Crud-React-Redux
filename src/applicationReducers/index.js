import { combineReducers } from "redux";
import tutorials from "./reducers";
import teachers from "./teachersReducers"

export default combineReducers({
  tutorials,
  teachers
});
