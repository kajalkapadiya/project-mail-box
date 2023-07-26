import { configureStore } from "@reduxjs/toolkit";
import authContext from "./auth/xtra";
import currentEmail from "./auth/currentEmail";
import msgData from "./auth/msgData";

const store = configureStore({
  reducer: { auth: authContext, crntEmail: currentEmail, msgData: msgData },
});

export default store;
