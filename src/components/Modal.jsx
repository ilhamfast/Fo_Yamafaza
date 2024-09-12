import { useDispatch, useSelector } from "react-redux";
import { setShowModal } from "../redux/reducers/modalReducer";  
import close from "../assets/keluar.svg";
import { useEffect, useState } from "react";
import { register } from "../redux/action/auth.Action";
// import LoginGoogle from "./LoginGoogle";
import { HiExclamation } from "react-icons/hi";
import { ToastContainer } from "react-toastify";

export default function Modal() {
  const { showModal } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // const navigate = useNavigate();
  const handleRegister = () => {
    if (password == "" || phoneNumber == "" || userName == "") {
      setError("Field Tidak Boleh Kosong");
    }
    if (password != confirmPassword) {
      setError("Password and Confirm Password berbeda");
    }
    if (password == confirmPassword) {
      dispatch(register(userName, phoneNumber, password));
    }
  };
  useEffect(() => {
    if (setShowModal == true || setShowModal == false) {
      setPassword("");
      setPhoneNumber("");
      setConfirmPassword("");
      setUserName("");
    }
  }, [setShowModal]);

  return (
    <>
      {showModal ? (
        <>
          <ToastContainer autoClose={2000}></ToastContainer>
          <div className=" bg-black/50 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto">
              <div className="bg-white sm:w-96 rounded-3xl p-5 font-Inter">
                <div className="flex justify-between items-center">
                  <div className="flex justify-end  w-4/6">
                    <div className="flex justify-end w-4/6">
                      <img
                        src="https://lazismu.org/images/logo.svg"
                        className="absolute top-2"
                        alt=""
                      />
                    </div>
                  </div>
                  <button
                    className="rounded-full p-1 text-white hover:scale-105"
                    onClick={() => dispatch(setShowModal(false))}
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
                      Nama
                    </label>
                    <input
                      type="text"
                      className="rounded-md md:rounded-xl ring-1 ring-gray-600 focus:outline-none w-full text-lg py-1 px-5"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label
                      htmlFor="name"
                      className="font-semibold text-lg text-gray-500"
                    >
                      No Telepon
                    </label>
                    <input
                      type="text"
                      className="rounded-md md:rounded-xl ring-1 ring-gray-600 focus:outline-none w-full text-lg py-1 px-5"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
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
                      className="rounded-md md:rounded-xl ring-1 ring-gray-600 focus:outline-none w-full text-lg py-1 px-5"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label
                      htmlFor="name"
                      className="font-semibold text-lg text-gray-500"
                    >
                      Konfirmasi Kata Sandi
                    </label>
                    <input
                      type="password"
                      className="rounded-md md:rounded-xl ring-1 ring-gray-600 focus:outline-none w-full text-lg py-1 px-5"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  {error != "" && (
                    <div>
                      <div className="bg-white flex gap-2 items-center drop-shadow-md p-1 rounded-md">
                        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500">
                          <HiExclamation className="h-5 w-5" />
                        </div>
                        <div className="text-sm">{error}</div>
                      </div>
                    </div>
                  )}
                </div>
                {/* button */}
                <button
                  onClick={handleRegister}
                  className="w-full bg-primary text-lg text-white mt-8 rounded-md md:rounded-xl px-5 py-2 hover:scale-105"
                >
                  Daftar
                </button>
                {/* <div className="flex justify-center mt-3">
                    <p>atau masuk dengan</p>
                  </div>
                  <LoginGoogle /> */}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
