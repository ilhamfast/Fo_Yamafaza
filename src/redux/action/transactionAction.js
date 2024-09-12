import axios from "axios";
import { toast } from "react-toastify";
export const VITE_API_URL = import.meta.env.VITE_API_CAREUS;
import "react-toastify/dist/ReactToastify.css";
import {  setBillingId, setNoVa, setPembayaran,  setQR,  setStatusBilling, setTimeId } from "../reducers/pembayaranReducer";

export const pembayaran =
  (username, phoneNumber, message, transaksiAmount, code, kategori,navigate) =>
  async (dispatch, getState) => {
    try {
      const { token } = getState().auth;
      const response = await axios.post(
        `${VITE_API_URL}${
          code == "infak" || code == "wakaf" || code == "zakat"
            ? `/billing/${code}/${kategori}`
            : `/billing/campaign/${code}`
        }`,
        {
          username: username,
          phoneNumber: phoneNumber,
          amount: transaksiAmount,
          message: message,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { data } = response;
      dispatch(setNoVa(data.vaNumber));
      dispatch(setBillingId(data.billingId));
      dispatch(setTimeId(data.createdTime));
      dispatch(setPembayaran(data));
      navigate(`/lazismu/modalBayar/${code}`);
    } catch (error) {
      toast.error("gagal membuat transaksi");
    } 
  };
export const statusPembayaran = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${VITE_API_URL}/billing/success/${id}`);
    dispatch(setStatusBilling(response.data));
  } catch (error) {
    console.error("Error fetching campaign data:", error);
  }
};

export const checkStatusQR = (time) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://qris.ruangberbagi.org/CheckStatus.php?createdTime=${time}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
const extractJsonFromString = (dataString) => {
  try {
    // Convert the input to a string
    const stringData = String(dataString);

    // Extract the JSON part of the string using a regular expression
    const jsonStringMatch = stringData.match(/Response Check Status: ({.*})/);

    // Check if a match was found
    if (jsonStringMatch && jsonStringMatch[1]) {
      // Parse the JSON string into an object
      const jsonObject = JSON.parse(jsonStringMatch[1]);

      return jsonObject;
    } else {
      throw new Error("No matching JSON string found");
    }
  } catch (error) {
    console.error("Error extracting JSON:", error);
    return null;
  }
};
    const data = response.data
    // console.log(extractJsonFromString(data));
    dispatch(setStatusBilling(data));
  } catch (error) {
    console.error("Error fetching QR data:", error);
  }
};

export const getQR = (time) => async (dispatch) => {
  try {
    // console.log(time);
    const response = await axios.get(
      `https://qris.ruangberbagi.org/GenerateQris.php?createdTime=${time}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    // Memastikan data respons adalah JSON
    const data = response.data;
      dispatch(setQR(data.transactionDetail));
  } catch (error) {
    console.error("Error fetching QR data:", error);
  }
};

