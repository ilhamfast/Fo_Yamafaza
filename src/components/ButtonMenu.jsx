import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  setShowLogin,
  setShowLogout,
  setShowModal,
} from "../redux/reducers/modalReducer";
import { Link } from "react-router-dom";
export default function ButtonMenu({ user, profile }) {
  const dispatch = useDispatch();
  return (
    <div className="absolute top-12 w-full lg:hidden bg-white p-1 right-0 rounded-b-lg z-20">
      {" "}
      {user?.username ? (
        <div className="gap-1 p-1 md:gap-3 xl:gap-5">
          <Link
            to={`/lazismu/profile`}
            className="flex gap-2 items-center justify-center my-1 md:gap-4 active:scale-105 border-2 rounded border-green-700"
          >
            <img src={profile} className="w-3" alt="" />
            <button className="font-Inter text-base md:text-lg lg:text-xl font-bold text-green-800">
              {user.username}
            </button>
          </Link>
          <button
            className="font-Inter bg-red-600 px-2 md:px-5 md:py-2 rounded w-full p-1 font-bold text-sm md:text-lg lg:text-xl text-white active:scale-105"
            onClick={() => dispatch(setShowLogout(true))}
          >
            LogOut
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2 p-2">
          <button
            onClick={() => dispatch(setShowLogin(true))}
            className="flex gap-2 w-full justify-center border-2 border-green-200  rounded items-center active:scale-105"
          >
            <img src={profile} className="w-3" alt="" />
            <p className="font-Inter text-green-500 text-sm md:text-base lg:text-lg xl:text-xl font-bold">
              Masuk
            </p>
          </button>
          <button
            className="p-1 font-Inter bg-green-500 px-4 w-full rounded font-bold text-sm md:text-base lg:text-lg xl:text-xl text-white active:scale-105"
            onClick={() => dispatch(setShowModal(true))}
          >
            Daftar
          </button>
        </div>
      )}
    </div>
  );
}
ButtonMenu.propTypes = {
  profile: PropTypes.string.isRequired,
  user: PropTypes.array.isRequired,
};
