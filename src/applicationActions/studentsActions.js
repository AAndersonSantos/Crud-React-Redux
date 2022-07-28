import { GET_ALL_STUDENTS } from "../applicationActionsTypes/types";
import requestMethod from "../services/serviceStudents/index";

//Get all teachers
export const getAllStudents = () => async (dispatch) => {
    try {
      const res = await requestMethod.getAllStudents();
  
      dispatch({
        type: GET_ALL_STUDENTS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };