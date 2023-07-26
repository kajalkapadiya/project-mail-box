import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  crntEmail: localStorage.getItem("crntEmail"),
};

const currentEmail = createSlice({
  name: "crntEmail",
  initialState,
  reducers: {
    crntLogin(state, payload) {
      const newEmail = payload.payload.replace("@", "").replace(".", "");
      localStorage.setItem("crntEmail", newEmail);
      state.crntEmail = newEmail; 
    },
  },
});

export const crntEmailAction = currentEmail.actions;
export default currentEmail.reducer;
