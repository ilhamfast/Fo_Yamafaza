import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  berita: [],
  detailBerita: [],
};

const authSlice = createSlice({
  name: "berita",
  initialState,
  reducers: {
    setBerita: (state, action) => {
      state.berita = action.payload;
    },
    setDetailBerita: (state, action) => {
      state.detailBerita = action.payload;
    },
  },
});

export const { setBerita,setDetailBerita } = authSlice.actions;

export default authSlice.reducer;
