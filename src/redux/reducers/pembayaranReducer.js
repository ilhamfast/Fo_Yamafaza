import { createSlice } from "@reduxjs/toolkit";
import CryptoJS from "crypto-js";

const key = "secretKey";

const initialState = {
  nominal: getNominalFromLocalStorage(),
  kategori: getKategoriFromLocalStorage(),
  methode: localStorage.getItem("methode"),
  noVa: localStorage.getItem("noVa"),
  type: localStorage.getItem("type"),
  billingId: localStorage.getItem("billingId"),
  timeId: localStorage.getItem("timeId"),
  pembayaran: [],
  qr: [],
  statusBilling: [],
};

function getNominalFromLocalStorage() {
  const encryptedNominal = localStorage.getItem("nominal");
  if (encryptedNominal) {
    // Decrypt nilai nominal sebelum mengembalikannya
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedNominal, key);
      const originalNominal = bytes.toString(CryptoJS.enc.Utf8);
      return originalNominal;
    } catch (error) {
      // Handle kesalahan dekripsi
      console.error("Error decrypting nominal:", error);
      return null;
    }
  }
  return null;
}
function getKategoriFromLocalStorage() {
  const encryptedKategori = localStorage.getItem("kategori");
  if (encryptedKategori) {
    // Decrypt nilai nominal sebelum mengembalikannya
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedKategori, key);
      const originalNominal = bytes.toString(CryptoJS.enc.Utf8);
      return originalNominal;
    } catch (error) {
      // Handle kesalahan dekripsi
      console.error("Error decrypting kategori:", error);
      return null;
    }
  }
  return null;
}

const authSlice = createSlice({
  name: "pembayaran",
  initialState,
  reducers: {
    setNominal: (state, action) => {
      if (action.payload) {
        // Enkripsi nilai nominal sebelum menyimpannya
        const encryptedNominal = CryptoJS.AES.encrypt(
          action.payload,
          key
        ).toString();
        localStorage.setItem("nominal", encryptedNominal);
      } else {
        localStorage.removeItem("nominal");
      }
      state.nominal = action.payload;
    },
    setMethode: (state, action) => {
      if (action.payload) {
        localStorage.setItem("methode", action.payload);
      } else {
        localStorage.removeItem("methode");
      }
      state.methode = action.payload;
    },
    setNoVa: (state, action) => {
      if (action.payload) {
        localStorage.setItem("noVa", JSON.stringify(action.payload));
      } else {
        localStorage.removeItem("noVa");
      }
      state.noVa = action.payload;
    },
    setType: (state, action) => {
      if (action.payload) {
        localStorage.setItem("type", (action.payload));
      } else {
        localStorage.removeItem("type");
      }
      state.type = action.payload;
    },
    setBillingId: (state, action) => {
      if (action.payload) {
        localStorage.setItem("billingId", JSON.stringify(action.payload));
      } else {
        localStorage.removeItem("billingId");
      }
      state.billingId = action.payload;
    },
    setTimeId: (state, action) => {
      if (action.payload) {
        localStorage.setItem("timeId", (action.payload));
      } else {
        localStorage.removeItem("timeId");
      }
      state.timeId = action.payload;
    },
    setKategori: (state, action) => {
      if (action.payload) {
        // Enkripsi nilai nominal sebelum menyimpannya
        const encryptedKategori = CryptoJS.AES.encrypt(
          action.payload,
          key
        ).toString();
        localStorage.setItem("kategori", encryptedKategori);
      } else {
        localStorage.removeItem("kategori");
      }
      state.kategori = action.payload;
    },

    setPembayaran: (state, action) => {
      state.pembayaran = action.payload;
    },

    setQR: (state, action) => {
      state.qr = action.payload;
    },
    setStatusBilling: (state, action) => {
      state.statusBilling = action.payload;
    },
  },
});

export const {
  setNominal,
  setMethode,
  setKategori,
  setNoVa,
  setType,
  setPembayaran,
  setStatusBilling,
  setBillingId,
  setTimeId,
  setQR
} = authSlice.actions;

export default authSlice.reducer;
