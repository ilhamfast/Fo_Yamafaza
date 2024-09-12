import { useDispatch, useSelector } from "react-redux";
import { setShowLogout } from "../redux/reducers/modalReducer";
import close from "../assets/keluar.svg";
import { logout } from "../redux/action/auth.Action";

export default function ModalNotif() {
  const { showLogout } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const onLogout = (event) => {
    event.preventDefault();
    dispatch(setShowLogout(false));

    dispatch(logout());
  };

  return (
    <>
      {showLogout ? (
        <>
          <div className="bg-black/50 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto">
              <div className="bg-white rounded-3xl p-5 font-Inter ">
                <div className="flex justify-between items-center">
                  <div className="flex justify-end  w-4/6">
                    <img
                      src="https://lazismu.org/images/logo.svg"
                      className="absolute top-2"
                      alt=""
                    />
                  </div>
                  <button
                    className="rounded-full p-1 text-white hover:scale-105"
                    onClick={() => dispatch(setShowLogout(false))}
                  >
                    <img src={close} className="w-6 h-6" alt="" />
                  </button>
                </div>
                {/* peringatan */}
                <div className="font-semibold text-xl mt-5">
                  Apakah anda yakin ingin keluar
                </div>
                {/* button */}
                <div className="flex justify-between gap-5">
                  <button
                    className="w-full bg-green-500 text-lg text-white mt-8 rounded-md md:rounded-3xl px-5 py-2 hover:scale-105"
                    onClick={onLogout}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => dispatch(setShowLogout(false))}
                    className="w-full bg-transparent text-lg text-black ring-1 ring-black mt-8 rounded-md md:rounded-3xl px-5 py-2 hover:scale-105"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
