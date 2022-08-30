import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import TutorialDataService from "../services/TutorialService";

const initialState = [];

export const retrieveTutorials = createAsyncThunk(
    "tutorials/retrieve",
    async () => {
      const res = await TutorialDataService.getAll();
      return res.data;
    }
  );

  export const createTutorial = createAsyncThunk(
    "tutorials/create",
    async ({ title, description }) => {
      const res = await TutorialDataService.create({ title, description });
      return res.data;
    }
  );


  const tutorialSlice = createSlice({
    name: "tutorial",
    initialState,
    extraReducers: {
      [retrieveTutorials.fulfilled]: (state, action) => {
        return [...action.payload];
      },

      [createTutorial.fulfilled]: (state, action) => {
        state.push(action.payload);
      },
    },
  });

  const { reducer } = tutorialSlice;
export default reducer;