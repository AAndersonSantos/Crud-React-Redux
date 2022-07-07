import { GET_ALL_TEACHERS,  DELETE_ALL_TEACHERS } from "../applicationActionsTypes/types";
import requestMethod from "../services/index";

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

  export const deleteAllTeachers = () => async (dispatch) => {
    try {
      const res = await requestMethod.removeAllTeachers();
  
      dispatch({
        type: DELETE_ALL_TEACHERS,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };