import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../core/constants/INITIAL_VALUE";

const dataSlice = createSlice({
  name: "Todo",
  initialState: { val: initialState },
  reducers: {
    add: (state, action) => {
      state.val = [...state.val, action.payload];
    },

    deleteTodoSlice: (state, action) => {
      state.val = state.val.filter(
        (todoItem) => todoItem.id !== action.payload
      );
      return state;
    },
    toggleChangeSlice: (state, action) => {
      state.val.map((todoItem) => {
        if (todoItem.id === action.payload) {
          todoItem.isTaskCompleted = !todoItem.isTaskCompleted;
        }
        return todoItem;
      });
      return state;
    },
    updateTodoSlice: (state, action) => {
      state.val.map((todoItem) => {
        if (todoItem.id === action.payload.id) {
          todoItem.description = action.payload.task;
        }
        return todoItem;
      });
      return state;
    },
  },
});

export const { add, toggleChangeSlice, deleteTodoSlice, updateTodoSlice } =
  dataSlice.actions;

export default dataSlice.reducer;
