import { combineReducers } from "redux";
import tutorials from "../applicationReducers/tutorialReducers";
import teachers from "../applicationReducers/teachersReducers"
import students from "../applicationReducers/studentsReducers"

export default combineReducers({
  tutorials,
  teachers,
  students
});
