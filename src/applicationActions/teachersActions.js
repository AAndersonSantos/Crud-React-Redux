import { GET_ALL_TEACHERS } from "../applicationActionsTypes/types";
import requestMethod from "../services/serviceTeachers/index";

//Get all teachers
export const getAllTeachers = () => async (dispatch) => {
    try {
      const res = await requestMethod.getAllTeachers();
  
      dispatch({
        type: GET_ALL_TEACHERS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };