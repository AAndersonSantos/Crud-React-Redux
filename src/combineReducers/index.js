import { combineReducers } from "redux";
import tutorials from "../applicationReducers/tutorialReducers";
import teachers from "../applicationReducers/teachersReducers"

export default combineReducers({
  tutorials,
  teachers
});
