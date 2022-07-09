import {
    GET_ALL_TEACHERS,
  } from "../applicationActionsTypes/types";
  
  const initialState = [];
  
  const teachersReducers = (teachers = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case GET_ALL_TEACHERS:
        return payload;
  
      default:
        return teachers;
    }
  };
  
  export default teachersReducers;