import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import authReducer from "./authReducer";
import campaignReducer from "./campaignReducer";
import ziswafReducer from "./ziswafReducer";
import pembayaranReducer from "./pembayaranReducer";
import beritaReducer from "./beritaReducer";

export default combineReducers({
  modal: modalReducer,
  auth: authReducer,
  campaign: campaignReducer,
  ziswaf: ziswafReducer,
  pembayaran: pembayaranReducer,
  berita: beritaReducer,
});
