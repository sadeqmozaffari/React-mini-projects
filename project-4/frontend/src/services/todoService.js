import { createAsyncThunk } from "@reduxjs/toolkit";
import { getApiPath } from "./config";

const baseApiPath = getApiPath();
console.log(baseApiPath);
export const getTodoAsync = createAsyncThunk(
  "todos/getTodoes",
  async (arg, thunkAPI) => {
    try{
      const response = await fetch(`${baseApiPath}/api/todos`);
      if (!response.ok) {
        throw new Error(`could not fetch, receive ${response.status}`);
      }
      const data = await response.json();
      const todoes = data.data.map(({ id, attributes }) => ({
        id,
        task: attributes.task,
        isComplete: attributes.isComplete,
      }));
      return todoes;
    }catch(err){
      console.log(`error in catch: ${err.message}`);
      return thunkAPI.rejectWithValue(err.message);
    }
  
  }
);
export const addTodoAsync = createAsyncThunk(
  "todos/addTodoes",
  async (arg, thunkAPI) => {
    try{
      const response = await fetch(`${baseApiPath}/api/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: arg }),
      });
      if (!response.ok) {
        throw new Error(`could not fetch, receive ${response.status}`);
      }
      const { data } = await response.json();
      return { ...arg, id: data.id };
    }catch(err){
      console.log(`error in catch: ${err.message}`);
      return thunkAPI.rejectWithValue(err.message);
    }
   
  }
);

export const removeTodoAsync = createAsyncThunk(
  "todos/removeTodoes",
  async (arg, thunkAPI) => {
    try{
      const response = await fetch(`${baseApiPath}/api/todos/${arg}`, {
        method: "Delete",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`could not fetch, receive ${response.status}`);
      }
  
      return arg;
    }catch(err){
      console.log(`error in catch: ${err.message}`);
      return thunkAPI.rejectWithValue(err.message);
    }

  }
);

export const editTodoAsync = createAsyncThunk(
  "todos/editTodoes",
  async (arg, thunkAPI) => {
    try{
      const response = await fetch(`${baseApiPath}/api/todos/${arg.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: arg.changes }),
      });
      if (!response.ok) {
        throw new Error(`could not fetch, receive ${response.status}`);
      }
  
      return arg;
    }catch(err){
      console.log(`error in catch: ${err.message}`);
      return thunkAPI.rejectWithValue(err.message);
    }

  }
);
