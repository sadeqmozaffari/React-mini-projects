import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "sadeq",
    email: "sadeq@gmail.com",
  },
  reducers: {
    updateUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    deleteUser: (state, action) => {
      state.name = "";
      state.email = "";
    },
  },
});
export const { updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
