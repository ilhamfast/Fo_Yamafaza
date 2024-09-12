import edit1 from "../assets/edit.svg";
import graph from "../assets/graph.svg";
import paper from "../assets/paper.svg";
import notification from "../assets/notification.svg";
import { FloatingLabel } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  cekPW,
  editProfile,
  historyUser,
  summaryUser,
} from "../redux/action/auth.Action";
import { FaUserPen } from "react-icons/fa6";
import {
  setPassword,
  setPhoneNumber,
  setUbahPw,
} from "../redux/reducers/authReducer";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FaHands, FaCoins, FaDonate } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { isFulfilled } from "@reduxjs/toolkit";

export default function Profile() {
  const [profil, setProfile] = useState("profil");
  const [nama, setNama] = useState("");
  const [address, setAddress] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [edit, setEdit] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { password } = useSelector((state) => state.auth);
  const { phoneNumber } = useSelector((state) => state.auth);
  const { userSummary } = useSelector((state) => state.auth);
  const { userHistory } = useSelector((state) => state.auth);
  const { ubahPw } = useSelector((state) => state.auth);
  const [changePw, setChangePw] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    const google = window.google;
    if (google && inputRef.current) {
      const autocomplete = new google.maps.places.Autocomplete(
        inputRef.current
      );

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        setAddress(place.formatted_address); // Menggunakan formatted_address sebagai nilai alamat
      });
    }
  }, []);
  const formatNumber = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleClick = (value) => {
    setProfile(value);
  };
  const handleClose = () => {
    setEdit(false);
    setProfilePicture(null);
    dispatch(setUbahPw(false));
    setChangePw("");
  };
  const handleEdit = () => {
    setEdit(false);
    dispatch(editProfile(nama, phoneNumber, password, profilePicture, address));
  };
  const handlePP = (e) => {
    const file = e.target.files[0]; // Mengambil file pertama dari yang dipilih
    setProfilePicture(file);
  };

  useEffect(() => {
    setAddress(user?.address || "");
    setNama(user?.username || "");
    dispatch(setPhoneNumber(user?.phoneNumber));
    dispatch(summaryUser());
    dispatch(historyUser());
  }, [dispatch, user]);
  return (
    <div className="flex flex-col items-center font-Inter">
      <div className="lg:w-5/6 w-full md:px-10 xl:px-20 my-5 lg:my-14 flex flex-col sm:flex-row justify-between gap-4 p-4">
        <div className="md:w-2/6 ">
          <div className="sm:p-4 rounded-xl bg-white sm:shadow sm:ring-1 sm:ring-gray-100">
            <div className="flex gap-4 sm:gap-2 items-center">
              <img
                src={user?.profilePicture}
                className="object-cover object-center w-16 h-16 rounded-full display-content bg-gray-400"
                alt=""
              />
              <div className="text-lg font-semibold md:text-lg">
                <p>{user?.username}</p>
                <button
                  onClick={() => handleClick("profil")}
                  className="text-base text-gray-600 sm:text-xs md:text-sm font-bold flex items-center active:scale-105"
                >
                  <img src={edit1} className="w-3 md:w-4" alt="" />
                  ubah profile
                </button>
              </div>
            </div>
            <div className="text-base mt-2 flex sm:flex-col  sm:gap-4">
              <button
                onClick={() => handleClick("transaksi")}
                className={`${
                  profil == "transaksi"
                    ? "bg-green-400 text-white"
                    : "text-gray-500"
                } gap-2 hover:bg-primary hover:text-white sm:rounded-md p-2 flex w-full justify-center items-center sm:justify-start p-1`}
              >
                <img className="w-6 sm:w-6" src={paper} alt="" />
                <p>Transaksi</p>
              </button>
              <button
                onClick={() => handleClick("notifikasi")}
                className={`${
                  profil == "notifikasi"
                    ? "bg-green-400 text-white"
                    : "text-gray-500"
                } gap-2 hover:bg-primary hover:text-white sm:rounded-md p-2 flex w-full justify-center items-center sm:justify-start p-1`}
              >
                <img className="w-6 sm:w-6" src={notification} alt="" />
                <p>Notifikasi</p>
              </button>
              <button
                onClick={() => handleClick("laporan")}
                className={`${
                  profil == "laporan"
                    ? "bg-green-400 text-white"
                    : "text-gray-500"
                } gap-2 hover:bg-primary hover:text-white sm:rounded-md p-2 flex w-full justify-center items-center sm:justify-start p-1`}
              >
                <img className="w-6 sm:w-6" src={graph} alt="" />
                <p>Laporan</p>
              </button>
            </div>
          </div>
        </div>
        {/* ubah profile */}
        {profil == "profil" && (
          <div className="sm:w-4/6">
            <div className="font-Inter font-bold mb-2 text-lg text-gray-500">
              UBAH PROFILE
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center sm:gap-5 justify-between">
                <div className="flex flex-col gap-2 w-1/6">
                  <img
                    src={
                      profilePicture
                        ? URL.createObjectURL(profilePicture)
                        : user?.profilePicture
                    }
                    className="h-14 w-14 shadow ring-2 ring-gray-100 object-cover object-center lg:h-20 lg:w-20 bg-gray-400 rounded-full"
                    alt=""
                  />
                  {edit == true && (
                    <label htmlFor="dropzone-file" className="w-full">
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        onChange={(e) => handlePP(e)}
                      />
                      <p className="bg-primary w-full text-white font-semibold rounded-sm text-center">
                        Edit
                      </p>
                    </label>
                  )}
                </div>
                {edit == true && (
                  <label htmlFor="dropzone-file">
                    <FaUserPen
                      color="green"
                      className="hidden w-8 h-8 sm:absolute bg-green-100 rounded-full p-1 top-[34vh] left-[42%] active:scale-105"
                    />
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      onChange={(e) => handlePP(e)}
                    />
                  </label>
                )}
                <div className="flex flex-col w-5/6 space-y-2 pl-6 sm:pl-0">
                  <div className="w-full flex items-center justify-between">
                    <p className="w-2/6 lg:w-1/6 font-semibold text-gray-600 md:text-lg sm:text-sm ">
                      Nama :
                    </p>
                    <label
                      className="w-full font-semibold text-gray-600 ring-1 ring-gray-300 p-2 text-lg font-Inter rounded-md"
                      htmlFor=""
                    >
                      <p>{user?.username}</p>
                    </label>
                  </div>
                  {edit == true && (
                    <FloatingLabel
                      variant="filled"
                      label="Nama"
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="w-full flex items-center justify-between">
                  <p className="w-2/6 lg:w-1/6 font-semibold text-gray-600 md:text-lg sm:text-sm ">
                    Phone :
                  </p>
                  <label
                    className="w-full font-semibold text-gray-600 ring-1 ring-gray-300 p-2 text-lg font-Inter rounded-md"
                    htmlFor=""
                  >
                    <p>{user?.phoneNumber}</p>
                  </label>
                </div>
                {edit == true && (
                  <FloatingLabel
                    variant="filled"
                    label="No Telepon"
                    value={phoneNumber}
                    onChange={(e) => dispatch(setPhoneNumber(e.target.value))}
                  />
                )}
              </div>
              <div className="flex flex-col space-y-2">
                <div className="w-full flex items-center justify-between">
                  <p className="w-2/6 lg:w-1/6 font-semibold text-gray-600 md:text-lg sm:text-sm ">
                    Alamat:
                  </p>
                  <label
                    className="w-full font-semibold text-gray-600 ring-1 ring-gray-300 p-2 text-lg font-Inter rounded-md"
                    htmlFor=""
                  >
                    <p> {user?.address || "Belum di isi"}</p>
                  </label>
                </div>
                {edit == true && (
                  <FloatingLabel
                    ref={inputRef}
                    variant="filled"
                    label="Alamat"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                )}
              </div>
              {edit == true && (
                <div className="flex flex-col space-y-2">
                  <div className="w-full flex items-center justify-between">
                    <p className="font-semibold text-gray-600 text-lg">
                      Ubah Password ?
                    </p>
                    <p className="font-normal text-gray-600 text-sm">
                      Masukkan Password lama
                    </p>
                  </div>
                  {edit == true && (
                    <div className="flex w-full gap-2 items-center">
                      <div className="w-full">
                        <FloatingLabel
                          variant="filled"
                          label="Password"
                          value={changePw}
                          onChange={(e) => setChangePw(e.target.value)}
                          size={isFulfilled}
                        />
                      </div>
                      <button
                        onClick={() =>
                          dispatch(cekPW(user?.phoneNumber, changePw))
                        }
                        className="w-1/6 bg-green-400 rounded text-white active:scale-105 py-2"
                      >
                        Submit
                      </button>
                    </div>
                  )}
                  {edit == true && ubahPw == true && (
                    <>
                      <p className="font-normal text-gray-600 text-sm">
                        Masukkan Password baru
                      </p>
                      <FloatingLabel
                        variant="filled"
                        label="Password"
                        value={password}
                        onChange={(e) => dispatch(setPassword(e.target.value))}
                      />
                    </>
                  )}
                </div>
              )}
              {edit == false && (
                <button
                  onClick={() => setEdit(true)}
                  className="bg-primary text-white w-full mt-4 rounded-md p-1 md:p-2 md:rounded-lg"
                >
                  Edit Profile
                </button>
              )}
              {edit == true && (
                <div className="flex gap-2">
                  <button
                    onClick={handleEdit}
                    className="bg-primary text-white w-full mt-4 rounded-md p-1 md:p-2 md:rounded-lg active:scale-105"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={handleClose}
                    className="bg-primary text-white w-full mt-4 rounded-md p-1 md:p-2 md:rounded-lg active:scale-105"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
        {/* transaksi */}
        {profil == "transaksi" && (
          <div className="sm:w-4/6">
            <div className=" space-y-4 items-center justify-center">
              {userHistory.map((item) => (
                <div
                  key={item?.id}
                  className="w-full rounded-lg bg-white drop-shadow-lg flex px-4 py-2 gap-5 items-center"
                >
                  <img
                    src={user?.profilePicture}
                    className="h-12 w-12  object-cover object-center md:h-12 md:w-12 bg-gray-400 rounded-full"
                    alt=""
                  />
                  <div className="w-full">
                    <div className="flex justify-between text-base md:text-lg xl:text-xl gap-3">
                      <p className="font-bold"></p>
                      <div className="flex gap-5 text-sm sm:text-base">
                        <p>{item?.transactionDate}</p>
                        {/* <p>23:24</p> */}
                      </div>
                    </div>
                    <p className="font-bold">{item?.transactionName}</p>
                    <p className="text-sm md:text-lg ">
                      Rp {formatNumber(item?.transactionAmount)}
                    </p>
                    <p className="text-sm md:text-base text-primary font-bold">
                      {item?.type}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {/*  */}
        {/* laporan */}
        {profil == "laporan" && (
          <div className="md:w-4/6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex bg-white shadow rounded-lg items-center p-2 gap-4">
                <FaHands
                  color="white"
                  className="bg-green-600 rounded-lg h-12 w-12 p-2"
                />
                <div>
                  <p className="font-semibold text-base text-gray-600">INFAQ</p>
                  <p className="hidden sm:block text-sm text-gray-500">
                    Jumlah yang dikeluarkan :
                  </p>
                  <p className="font-bold">
                    Rp {formatNumber(userSummary?.infak_total || 0)}
                  </p>
                </div>
              </div>
              <div className="flex bg-white shadow rounded-lg items-center p-2 gap-4">
                <SlEnvolopeLetter
                  color="white"
                  className="bg-green-600 rounded-lg h-12 w-12 p-2"
                />
                <div>
                  <p className="font-semibold text-base text-gray-600">ZAKAT</p>
                  <p className="hidden sm:block text-sm text-gray-500">
                    Jumlah yang dikeluarkan :
                  </p>
                  <p className="font-bold">
                    Rp {formatNumber(userSummary?.zakat_total || 0)}
                  </p>
                </div>
              </div>
              <div className="flex bg-white shadow rounded-lg items-center p-2 gap-4">
                <FaCoins
                  color="white"
                  className="bg-green-600 rounded-lg h-12 w-12 p-2"
                />
                <div>
                  <p className="font-semibold text-base text-gray-600">WAQAF</p>
                  <p className="hidden sm:block text-sm text-gray-500">
                    Jumlah yang dikeluarkan :
                  </p>
                  <p className="font-bold">
                    Rp {formatNumber(userSummary?.wakaf_total || 0)}
                  </p>
                </div>
              </div>
              <div className="flex bg-white shadow rounded-lg items-center p-2 gap-4">
                <FaDonate
                  color="white"
                  className="bg-green-600 rounded-lg h-12 w-12 p-2"
                />
                <div>
                  <p className="font-semibold text-base text-gray-600">
                    DONASI
                  </p>
                  <p className="hidden sm:block text-sm text-gray-500">
                    Jumlah yang dikeluarkan :
                  </p>
                  <p className="font-bold">
                    Rp {formatNumber(userSummary?.campaign_total || 0)}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex bg-white shadow rounded-lg items-center p-2 gap-4 mt-4">
              <FaMoneyBillAlt
                color="white"
                className="bg-green-600 rounded-lg h-12 w-12 p-2"
              />
              <div>
                <p className="font-semibold text-base text-gray-600">
                  TOTAL PENGELUARAN
                </p>
                <p className="hidden sm:block text-sm text-gray-500">
                  Jumlah total keseluruhan yang dikeluarkan :
                </p>
                <p className="font-bold">
                  Rp {formatNumber(userSummary?.total_donation || 0)}
                </p>
              </div>
            </div>
          </div>
        )}
        {/*  */}
      </div>
      <Footer />
    </div>
  );
}
