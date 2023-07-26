import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: JSON.parse(localStorage.getItem("msgData")) || {
    msgTitle: "",
    msgFrom: "",
    msgMSGData: "",
  },
  emails: [], // Array of emails
  unreadCount: 0,
};

const msgData = createSlice({
  name: "msgData",
  initialState,
  reducers: {
    getData(state, payload) {
      const msgData = {
        msgTitle: payload.payload.titleData,
        msgFrom: payload.payload.emailData,
        msgMSGData: payload.payload.msgData,
      };
      localStorage.setItem("msgData", JSON.stringify(msgData));
      state.message = msgData;
    },
    fetchEmailsSuccess(state, action) {
      //   console.log(action.payload);
      state.emails = action.payload;
      state.unreadCount = action.payload.filter(
        (email) => !email[1].read
      ).length;
    },
    markEmailAsRead(state, action) {
      //   console.log(action);
      const emailId = action.payload;
      const email = state.emails.find((email) => email.id === emailId);
      if (email && !email.read) {
        state.unreadCount -= 1;
      }
    },
    logOutHandler(state, action) {
      state.unreadCount = 0;
    },
  },
});

export const getDataAction = msgData.actions;
export const fetchAction = msgData.actions;
export const markAction = msgData.actions;
export const logOutAction = msgData.actions;
export default msgData.reducer;
