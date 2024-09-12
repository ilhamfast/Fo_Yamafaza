import { useDispatch, useSelector } from "react-redux";
import { setShowLogin, setShowModal } from "../redux/reducers/modalReducer";
import close from "../assets/keluar.svg";
// import LoginGoogle from "./LoginGoogle";
import { login } from "../redux/action/auth.Action";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setPhoneNumber } from "../redux/reducers/authReducer";
import { useState } from "react";

export default function Login() {
  const { showLogin } = useSelector((state) => state.modal);
  const { phoneNumber } = useSelector((state) => state.auth);
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login(phoneNumber, password));
    // if (user != null) {
    //   window.location.reload;
    // }
  };
  const handleDaftar = () => {
    dispatch(setShowModal(true));
    dispatch(setShowLogin(false));
    // if (user != null) {
    //   window.location.reload;
    // }
  };

  return (
    <>
      {showLogin ? (
        <>
          <ToastContainer autoClose={2000}></ToastContainer>
          <div className="bg-black/50 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto">
              <div className="bg-white shadow rounded-3xl p-5 font-Inter ">
                <div className="flex justify-between items-center">
                  <div className="flex justify-end w-4/6">
                    <img
                      src="https://lazismu.org/images/logo.svg"
                      className="absolute top-2"
                      alt=""
                    />
                  </div>
                  <button
                    className="rounded-full p-1 text-white hover:scale-105"
                    onClick={() => dispatch(setShowLogin(false))}
                  >
                    <img src={close} className="w-6 h-6" alt="" />
                  </button>
                </div>
                <div className="flex flex-col gap-2 md:gap-3">
                  <div className="flex flex-col ">
                    <label
                      htmlFor="name"
                      className="font-semibold text-lg text-gray-500"
                    >
                      No Telepon
                    </label>
                    <input
                      type="text"
                      className="rounded-md md:rounded-xl ring-1 ring-gray-400 focus:outline-none w-full text-lg py-1 px-5"
                      value={phoneNumber}
                      onChange={(e) => dispatch(setPhoneNumber(e.target.value))}
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label
                      htmlFor="name"
                      className="font-semibold text-lg text-gray-500"
                    >
                      Kata Sandi
                    </label>
                    <input
                      type="password"
                      className="rounded-md md:rounded-xl ring-1 ring-gray-400 focus:outline-none w-full text-lg py-1 px-5"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                {/* button */}
                <button
                  onClick={handleLogin}
                  className="w-full bg-primary text-lg text-white mt-8 rounded-md md:rounded-xl px-5 py-1 md:py-2 hover:translate-y-[-5px] duration-300"
                >
                  Masuk
                </button>
                <div className="flex justify-center mt-3">
                  <p>Belum punya akun ?</p>
                </div>
                <button
                  onClick={handleDaftar}
                  className="w-full border-2 border-primary text-lg text-primary mt-2 rounded-md md:rounded-xl px-5 py-1 md:py-2 hover:translate-y-[-5px] duration-300"
                >
                  Daftar
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
