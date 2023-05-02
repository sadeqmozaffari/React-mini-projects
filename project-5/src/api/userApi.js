import axios from "axios";
import {
  updateError,
  updateStart,
  updateSuccess,
} from "../redux/slices/userSlice";

export const updateUser = async (user, dispatch) => {
  dispatch(updateStart());
  try {
    const response = await axios.put("http://localhost:3000/user", {
      name: user.name,
      email: user.email,
    });
    dispatch(updateSuccess(response.data));
  } catch (e) {
    dispatch(updateError());
  }
};
