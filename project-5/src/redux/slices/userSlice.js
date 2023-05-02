import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// export const updateUser2 = createAsyncThunk("user/update", async (user) => {
//   const res = await axios.put("http://localhost:3000/user", user);
//   return res.data;
// });
export const deleteUser2 = createAsyncThunk("user/delete", async (id) => {
  const res = await axios.delete(`http://localhost:3000/user/${id}`);
  return res.data;
});
const userSlice = createSlice({
  name: "user",
  initialState: {
    // name: "sadeq", email: "sadeq@gmail.com"
    userInfo: { name: "sadeq", email: "sadeq@gmail.com" },
    pending: null,
    error: false,
  },

  reducers: {
    // updateUser: (state, action) => {
    //   state.name = action.payload.name;
    //   state.email = action.payload.email;
    // },
    // deleteUser: (state, action) => {
    //   state.name = "";
    //   state.email = "";
    // },
    updateStart: (state) => {
      state.pending = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    updateError: (state) => {
      state.error = true;
      state.pending = false;
    },
  },
  extraReducers: {
    // [updateUser2.pending]: (state) => {
    //   state.pending = true;
    //   state.error = false;
    // },
    // [updateUser2.fulfilled]: (state, action) => {
    //   state.pending = null;
    //   state.userInfo = action.payload;
    // },
    // [updateUser2.rejected]: (state) => {
    //   state.pending = null;
    //   state.error = true;
    // },

    [deleteUser2.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [deleteUser2.fulfilled]: (state, action) => {
      state.pending = null;
      state.userInfo = action.payload;
    },
    [deleteUser2.rejected]: (state) => {
      state.pending = null;
      state.error = true;
    },
  },
});
export const { updateStart, updateSuccess, updateError } = userSlice.actions;
export default userSlice.reducer;
