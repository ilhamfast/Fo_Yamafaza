import axios from "axios";
import {
  setPassword,
  setPhoneNumber,
  setToken,
  setUbahPw,
  setUser,
  setUserHistory,
  setUserSummary,
} from "../reducers/authReducer";
export const VITE_API_URL = import.meta.env.VITE_API_CAREUS;
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { setShowLogin, setShowModal } from "../reducers/modalReducer";

export const logout = () => (dispatch) => {
  dispatch(setToken(null));
  dispatch(setUser(null));
  dispatch(setPassword(null));
  dispatch(setPhoneNumber(null));
};
export const register =
  (username, phoneNumber, password) => async (dispatch) => {
    try {
      const response = await axios.post(`${VITE_API_URL}/auth/signup`, {
        username: username,
        phoneNumber: phoneNumber,
        password: password,
        role: "USER",
      });
      const data = response;
      dispatch(setUser(data));
      if (response) {
        toast.success("Proses Register Berhasil");
        setTimeout(() => {
          dispatch(setShowLogin(true));
          dispatch(setShowModal(false));
        }, 2000); // Menunggu 3 detik sebelum mengubah setShowLogin
      }
    } catch (error) {
      console.error("Error fetching campaign data:", error);
    }
  };
export const login = (phoneNumber, password) => async (dispatch) => {
  // console.log(phoneNumber,password);
  try {
    const response = await axios.post(`${VITE_API_URL}/auth/signin`, {
      phoneNumber: phoneNumber,
      password: password,
    });
    const data = response.data;
    dispatch(setUser(data));
    dispatch(setToken(data.token));
    if (response) {
      toast.success("Berhasil Login");
      setTimeout(() => {
        dispatch(setShowLogin(false));
      }, 2000);
    }
  } catch (error) {    
    toast.error("Password dan Akun salah");
  }
};
export const getMe = () => async (dispatch, getState) => {
  const { token } = getState().auth;
  try {
    const response = await axios.get(`${VITE_API_URL}/user/my-profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response.data;
    dispatch(setUser(data));
  } catch (error) {
    if (
      (error.response && error.response.status === 500) ||
      (error.response && error.response.status === 400)
    ) {
      try {
        const { phoneNumber } = getState().auth;
        const { password } = getState().auth;
        const response = await axios.post(`${VITE_API_URL}/auth/signin`, {
          phoneNumber: phoneNumber,
          password: password,
        });
        const data = response.data;
        dispatch(setUser(data));
        dispatch(setToken(data.token));
        toast.success("Berhasil Login");
      } catch (error) {
        console.error("Error signing in:", error);
        // Handle error signing in
      }
    } else {
      console.error("Error fetching campaign data:", error);
      // Handle other errors
    }
  }
};

export const editProfile =
  (username, phoneNumber, password, profilePicture, address) =>
  async (dispatch, getState) => {
    console.log(username, phoneNumber, password, profilePicture, address);
    const { token } = getState().auth;
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("phoneNumber", phoneNumber);
      {
        if (password != null) {
          formData.append("password", password);
        }
      }
      {
        profilePicture != null &&
          formData.append("profilePicture", profilePicture);
      }
      formData.append("address", address);
      await axios.put(`${VITE_API_URL}/user/edit-profile`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      window.location.reload();
    } catch (error) {
      console.error("Error fetching campaign data:", error);
    }
  };
export const summaryUser = () => async (dispatch, getState) => {
  const { token } = getState().auth;
  try {
    const response = await axios.get(`${VITE_API_URL}/user/summary`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(setUserSummary(response.data));
  } catch (error) {
    console.error("Error fetching campaign data:", error);
  }
};
export const historyUser = () => async (dispatch, getState) => {
  const { token } = getState().auth;
  try {
    const response = await axios.get(`${VITE_API_URL}/user/history`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(setUserHistory(response.data));
  } catch (error) {
    console.error("Error fetching campaign data:", error);
  }
};

export const cekPW = (phoneNumber, password) => async (dispatch) => {
  console.log(phoneNumber, password);
  try {
    const response = await axios.post(`${VITE_API_URL}/auth/signin`, {
      phoneNumber: phoneNumber,
      password: password,
    });
    // const data = response.data;
    if (response) {
      dispatch(setUbahPw(true));
    }
  } catch (error) {
    toast.error("Password yang anda masukkan salah");
  }
};
