import axios from "axios";
import { setBerita, setDetailBerita } from "../reducers/beritaReducer";
import { setPage } from "../reducers/campaignReducer";

export const VITE_API_URL = import.meta.env.VITE_API_CAREUS;

export const getAllBerita = (pageNumber, topic) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${VITE_API_URL}/news${topic != null ? "/topic" : ""}?${
        topic != null ? `topicName=${topic}` : ""
      }&page=${pageNumber}`
    );
    const data = response.data;
    dispatch(setBerita(data.content));
    dispatch(setPage(data.totalPages));
  } catch (error) {
    console.error("Error fetching campaign data:", error);
  }
};
export const getDetailBerita = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${VITE_API_URL}/news/${id}`);
    const data = response.data;
    dispatch(setDetailBerita(data));
  } catch (error) {
    console.error("Error fetching campaign data:", error);
  }
};
