import axios from "axios";
import {
  setAllCategory,
  setCampaign,
  setCampaignHistory,
  setCategoryCampaign,
  setDataHome,
  setDetailCampaign,
  setDistribution,
  setGetCampaignSearch,
  setGetCategoryCampaign,
  setPage,
  setPageSearch,
  setsummary,
} from "../reducers/campaignReducer";
export const VITE_API_URL = import.meta.env.VITE_API_CAREUS;

export const getAllCategory = () => async (dispatch) => {
  try {
    const response = await axios.get(`${VITE_API_URL}/campaign/categories`);
    const data = response.data;
    dispatch(setAllCategory(data));
  } catch (error) {
    console.error("Error fetching campaign data:", error);
  }
};
export const getAllCampaign = (pageNumber) => async (dispatch) => {
  // console.log(pageNumber);
  try {
    const response = await axios.get(
      `${VITE_API_URL}/campaign/active-and-approved-campaign?page=${pageNumber}`
    );
    const data = response.data;
    dispatch(setCampaign(data.content));
    dispatch(setPage(data.totalPages));
  } catch (error) {
    console.error("Error fetching campaign data:", error);
  }
};
export const getCampaignActive = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `${VITE_API_URL}/campaign/active-and-approved-campaign`
    );
    const data = response.data;
    dispatch(setDataHome(data.content));
  } catch (error) {
    console.error("Error fetching campaign data:", error);
  }
};
export const getDetailCampaign = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${VITE_API_URL}/campaign/${id}`);
    const data = response.data;
    const category = data.category;
    dispatch(setDetailCampaign(data));
    dispatch(setCategoryCampaign(category));
  } catch (error) {
    console.error("Error fetching campaign data:", error);
  }
};
export const searchCampaignName =
  (pencarian, pageNumber) => async (dispatch) => {
    try {
      const response = await axios.get(`${VITE_API_URL}/campaign/search?`, {
        params: { campaignName: pencarian, page: pageNumber }, // Menggunakan params untuk mengirim data pencarian
      });

      dispatch(setGetCampaignSearch(response.data.content));
      dispatch(setPageSearch(response.data.totalPages));
    } catch (error) {
      console.error("Error fetching campaign data:", error);
    }
  };
export const getCampaignCategory =
  (category, pageNumber) => async (dispatch) => {
    // console.log(category);
    try {
      const response = await axios.get(
        `${VITE_API_URL}/campaign/category?categoryName=${category}&page=${pageNumber}`
      );
      const data = response.data;
      dispatch(setGetCategoryCampaign(data));
      dispatch(setCampaign(data.content));
      dispatch(setPage(data.totalPages));
    } catch (error) {
      console.error("Error fetching campaign data:", error);
    }
  };
export const sumarry = () => async (dispatch) => {
  try {
    const response = await axios.get(`${VITE_API_URL}/summary`);
    const data = response.data;
    dispatch(setsummary(data));
  } catch (error) {
    console.error("Error fetching campaign data:", error);
  }
};
export const getCampaignHistory = (campaignCode) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${VITE_API_URL}/campaign/${campaignCode}/history`
    );
    const data = response.data;
    dispatch(setCampaignHistory(data.content));
    dispatch(setPage(data.totalPages));
  } catch (error) {
    console.error("Error fetching campaign data:", error);
  }
};
export const getCampaignDistribution = (campaignCode) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${VITE_API_URL}/campaign/${campaignCode}/distribution`
    );
    const data = response.data;
    dispatch(setDistribution(data.content));
    dispatch(setPage(data.totalPages));
  } catch (error) {
    console.error("Error fetching campaign data:", error);
  }
};
