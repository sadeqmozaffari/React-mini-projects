import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import {
  addTodoAsync,
  editTodoAsync,
  getTodoAsync,
  removeTodoAsync,
} from "../../services/todoService";
import { errorMessage } from "../../utils/notification";

const todoAdapter = createEntityAdapter({});
const todoSlice = createSlice({
  name: "todos",
  initialState: todoAdapter.getInitialState({
    loading: false,
  }),

  reducers: {
    addTodoOne: todoAdapter.addOne,
  },
  extraReducers: {
    [getTodoAsync.pending]: (state) => {
      state.loading = true;
    },
    [getTodoAsync.fulfilled]: (state, action) => {
      state.loading = false;
      todoAdapter.addMany(state, action.payload);
    },
    [getTodoAsync.rejected]: (state, action) => {
      console.log(action.error.message);
    },

    [addTodoAsync.pending]: (state) => {
      state.loading = true;
    },
    [addTodoAsync.fulfilled]: (state, action) => {
      state.loading = false;
      todoAdapter.addOne(state, action.payload);
    },
    [addTodoAsync.rejected]: (state, action) => {
      console.log(action.error.message);
    },

    [editTodoAsync.pending]: (state) => {
      state.loading = true;
    },
    [editTodoAsync.fulfilled]: (state, action) => {
      state.loading = false;
      todoAdapter.updateOne(state, action.payload);
    },
    [editTodoAsync.rejected]: (state, action) => {
      console.log(action.error.message);
    },

    [removeTodoAsync.pending]: (state) => {
      state.loading = true;
    },
    [removeTodoAsync.fulfilled]: (state, action) => {
      state.loading = false;
      todoAdapter.removeOne(state, action.payload);
    },
    [removeTodoAsync.rejected]: (state, action) => {
      errorMessage("برای حذف معلومات خطایی رخ داده است");
      console.log(action.error.message);
    },
  },
});
export const { addTodoOne } = todoSlice.actions;
export const simpleSelector = todoAdapter.getSelectors();
export default todoSlice.reducer;
