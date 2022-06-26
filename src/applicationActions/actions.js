import {
  CREATE_TUTORIAL,
  RETRIEVE_TUTORIALS,
  UPDATE_TUTORIAL,
  DELETE_TUTORIAL,
  DELETE_ALL_TUTORIALS,
} from "../applicationActionsTypes/types";

import requestMethod from "../services/index";

export const createTutorial = (title, description) => async (dispatch) => {
  try {
    const res = await requestMethod.create({ title, description });

    dispatch({
      type: CREATE_TUTORIAL,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveTutorials = () => async (dispatch) => {
  try {
    const res = await requestMethod.getAll();

    dispatch({
      type: RETRIEVE_TUTORIALS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateTutorial = (id, data) => async (dispatch) => {
  try {
    const res = await requestMethod.update(id, data);

    dispatch({
      type: UPDATE_TUTORIAL,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteTutorial = (id) => async (dispatch) => {
  try {
    await requestMethod.remove(id);

    dispatch({
      type: DELETE_TUTORIAL,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllTutorials = () => async (dispatch) => {
  try {
    const res = await requestMethod.removeAll();

    dispatch({
      type: DELETE_ALL_TUTORIALS,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const findTutorialsByTitle = (title) => async (dispatch) => {
  try {
    const res = await requestMethod.findByTitle(title);

    dispatch({
      type: RETRIEVE_TUTORIALS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
