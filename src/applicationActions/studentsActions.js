import { GET_ALL_STUDENTS, CREATE_STUDENTS } from "../applicationActionsTypes/types";
import requestMethod from "../services/serviceStudents/index";

//Get all students
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

//Create students
export const createStudents = (name, country, state, date_Birth) => async (dispatch) => {
  try {
    const res = await requestMethod.createStudents({ name, country, state, date_Birth });

    dispatch({
      type: CREATE_STUDENTS,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};