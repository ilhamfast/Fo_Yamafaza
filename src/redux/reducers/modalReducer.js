import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  showModal: false,
  showLogin: false,
  showLogout: false,
  showModalPayment: false,
};
const authSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
    setShowLogin: (state, action) => {
      state.showLogin = action.payload;
    },
    setShowLogout: (state, action) => {
      state.showLogout = action.payload;
    },
    setShowModalPayment: (state, action) => {
      state.showModalPayment = action.payload;
    },
  },
});

export const {
  setShowModal,
  setShowLogin,
  setShowLogout,
  setShowModalPayment,
} = authSlice.actions;

export default authSlice.reducer;
