import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  campaign: [],
  detailCampaign: [],
  categoryCampaign: [],
  searchCampaign: "",
  getCampaignSearch: [],
  getCategoryCampaign: [],
  allCategory: [],
  summary: [],
  page: null,
  pageSearch: null,
  pageNumber: 1,
  campaignHistory: [],
  dataHome: [],
  distribution: [],
};
const authSlice = createSlice({
  name: "campaign",
  initialState,
  reducers: {
    setCampaign: (state, action) => {
      state.campaign = action.payload;
    },
    setDetailCampaign: (state, action) => {
      state.detailCampaign = action.payload;
    },
    setCategoryCampaign: (state, action) => {
      state.categoryCampaign = action.payload;
    },
    setSearchCampaign: (state, action) => {
      state.searchCampaign = action.payload;
    },
    setGetCampaignSearch: (state, action) => {
      state.getCampaignSearch = action.payload;
    },
    setGetCategoryCampaign: (state, action) => {
      state.getCategoryCampaign = action.payload;
    },
    setAllCategory: (state, action) => {
      state.allCategory = action.payload;
    },
    setsummary: (state, action) => {
      state.summary = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setPageSearch: (state, action) => {
      state.pageSearch = action.payload;
    },
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    setCampaignHistory: (state, action) => {
      state.campaignHistory = action.payload;
    },
    setDataHome: (state, action) => {
      state.dataHome = action.payload;
    },
    setDistribution: (state, action) => {
      state.distribution = action.payload;
    },
  },
});

export const {
  setCampaign,
  setDetailCampaign,
  setCategoryCampaign,
  setSearchCampaign,
  setGetCampaignSearch,
  setGetCategoryCampaign,
  setAllCategory,
  setsummary,
  setPage,
  setPageSearch,
  setPageNumber,
  setCampaignHistory,
  setDataHome,
  setDistribution,
} = authSlice.actions;

export default authSlice.reducer;
