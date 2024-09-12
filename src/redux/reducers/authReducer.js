import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
  user: null,
  password: null,
  phoneNumber: null,
  userSummary: [],
  userHistory: [],
  ubahPw: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      if (action.payload) {
        localStorage.setItem("token", action.payload);
      } else {
        localStorage.removeItem("token");
      }
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setUserSummary: (state, action) => {
      state.userSummary = action.payload;
    },
    setUserHistory: (state, action) => {
      state.userHistory = action.payload;
    },
    setUbahPw: (state, action) => {
      state.ubahPw = action.payload;
    },
  },
});

export const {
  setToken,
  setUser,
  setPassword,
  setPhoneNumber,
  setUserSummary,
  setUserHistory,
  setUbahPw,
} = authSlice.actions;

export default authSlice.reducer;
