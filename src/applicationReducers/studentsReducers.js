import {
    GET_ALL_STUDENTS, CREATE_STUDENTS
  } from "../applicationActionsTypes/types";
  
  const initialState = [];
  
  const studentsReducers = (students = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {

      case CREATE_STUDENTS:
      return [...students, payload];

      case GET_ALL_STUDENTS:
        return payload;
  
      default:
        return students;
    }
  };
  
  export default studentsReducers;