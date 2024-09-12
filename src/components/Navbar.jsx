import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDollarCircle } from "react-icons/ai";
import profile from "../assets/Profile.svg";
import search from "../assets/search.svg";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { FaNewspaper } from "react-icons/fa";
import menu from "../assets/menu.svg";
import beranda from "../assets/home.svg";
import Campaign from "../assets/ticketstar.svg";
import { IoCloseSharp } from "react-icons/io5";
// import Ziswaf from "../assets/heart.svg";
import {
  setShowLogin,
  setShowLogout,
  setShowModal,
} from "../redux/reducers/modalReducer";
import ButtonMenu from "./ButtonMenu";
import { useEffect, useState } from "react";
import {
  setPageNumber,
  setSearchCampaign,
} from "../redux/reducers/campaignReducer";
import { getMe } from "../redux/action/auth.Action";
import DropdownMenu from "./DropdownMenu";

export default function Navbar({ url }) {
  const dispatch = useDispatch();
  // const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.auth);
  const { searchCampaign } = useSelector((state) => state.campaign);
  const [buttonMenu, setButtonMenu] = useState(false);
  const navigate = useNavigate();
  const tombol = () => {
    setButtonMenu(!buttonMenu);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = searchCampaign.trim();
    if (searchQuery === "") {
      navigate("/lazismu");
    } else {
      const searchUrl = `/lazismu/pencarian/${searchQuery}`;
      dispatch(setPageNumber(1));
      navigate(searchUrl);
    }
  };
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);
  return (
    <div>
      {/* dekstop */}
      <div className="hidden md:block bg-slate-100 shadow fixed w-full text-sm md:text-lg lg:text-xl z-40 top-0">
        <div className="mx-2 lg:mx-8 xl:mx-16 p-2 xl:p-3 flex justify-between items-center">
          <Link to={"/lazismu/"}>
            <button className="text-start text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-green-600">
              <img src="https://lazismu.org/images/logo.svg" alt="" />
            </button>
          </Link>
          <div className="pl-3 pr-2 py-1 xl:px-2 w-[25%] md:w-2/6 rounded-full bg-white shadow focus:ring-gray-600">
            <form
              className="flex justify-between"
              onSubmit={handleSearch}
              action=""
            >
              <input
                className="focus:outline-none w-full text-xm lg:text-lg ml-2"
                type="text"
                placeholder="Jelajahi Campaign"
                value={searchCampaign}
                onChange={(e) => dispatch(setSearchCampaign(e.target.value))}
              />
              <img src={search} className="w-5" alt="" />
            </form>
          </div>
          <div className="justify-between flex gap-2 md:gap-2 lg:gap-3 xl:gap-5 text-xs md:text-sm lg:text-lg font-Inter">
            <button
              className={`text-gray-500 hover:text-green-800 hover:underline hover:underline-offset-[2vh] ${
                url === "detailZISKA"
                  ? "text-green-800 underline underline-offset-[2vh]"
                  : "text-black"
              }`}
            >
              <Link to={"/lazismu/detailZiska/detailZISKA"}>Ziska</Link>
            </button>
            <button
              className={`text-gray-500 hover:text-green-800 hover:underline hover:underline-offset-[2vh] ${
                url === "detailDonasi"
                  ? "text-green-800 underline underline-offset-[2vh]"
                  : "text-black"
              }`}
            >
              <Link to={"/lazismu/detailDonasi/detailDonasi"}>Campaign</Link>
            </button>
            <button
              className={`text-gray-500 hover:text-green-800 hover:underline hover:underline-offset-[2vh] ${
                url === "berita"
                  ? "text-green-800 underline underline-offset-[2vh]"
                  : "text-black"
              }`}
            >
              <Link to={"/lazismu/berita/berita"}>Berita</Link>
            </button>
            <DropdownMenu/>
          </div>
          <div className="hover:scale-105 block lg:hidden" onClick={tombol}>
            <img src={menu} alt="" />
          </div>
          {buttonMenu == true && <ButtonMenu user={user} profile={profile} />}

          {user?.username ? (
            <div className="lg:flex gap-3 hidden">
              <Link
                to={`/lazismu/profile`}
                className="flex md:gap-2 hover:scale-105"
              >
                <img src={profile} className="w-5" alt="" />
                <button className="font-Inter text-black md:text-base lg:text-lg xl:text-base font-bold">
                  {user.username}
                </button>
              </Link>
              <button
                className="font-Inter bg-red-600 md:px-3 lg:px-5 rounded-full font-bold md:text-base lg:text-lg xl:text-lg text-white hover:scale-105"
                onClick={() => dispatch(setShowLogout(true))}
              >
                LogOut
              </button>
            </div>
          ) : (
            <div className="lg:flex gap-3 hidden">
              <div className="flex md:gap-2 hover:scale-105">
                <img src={profile} alt="" />
                <button
                  className="font-Inter text-gray-500 md:text-base lg:text-lg xl:text-xl font-semibold"
                  onClick={() => dispatch(setShowLogin(true))}
                >
                  Masuk
                </button>
              </div>
              <button
                className="font-Inter bg-primary md:px-3 lg:px-5 md:py-1 rounded-full font-semibold md:text-base lg:text-lg xl:text-xl text-white hover:scale-105"
                onClick={() => dispatch(setShowModal(true))}
              >
                Daftar
              </button>
            </div>
          )}
        </div>
      </div>
      {/* mobile */}
      <div className="p-2 md:hidden bg-white flex items-center gap-2 drop-shadow fixed w-full text-sm md:text-lg lg:text-xl z-40 top-[-3px]">
        <div className="w-full p-2 bg-white ">
          <form className="flex justify-between" onSubmit={handleSearch}>
            <input
              className="outline-none w-full text-xm lg:text-lg"
              type="text"
              placeholder="Jelajahi Campaign"
              value={searchCampaign}
              onChange={(e) => dispatch(setSearchCampaign(e.target.value))}
            />
            <img src={search} className="w-5" alt="" />
          </form>
        </div>
        {buttonMenu == false && (
          <div className="hover:scale-105 mx-4" onClick={tombol}>
            <img src={menu} alt="" />
          </div>
        )}
        {buttonMenu == true && (
          <div className="hover:scale-105 mx-4" onClick={tombol}>
            <IoCloseSharp className="w-6 h-6" />
          </div>
        )}
        {buttonMenu == true && <ButtonMenu user={user} profile={profile} />}
      </div>
      {/* bawah */}
      <div className="fixed sm:hidden bottom-0 bg-white w-full py-2 px-3 items-center z-40 items-center rounded-lg">
        <div className="flex justify-between items-end ">
          <button className="text-start text-base font-bold text-green-600">
            <Link
              className="flex flex-col justify-center items-center"
              to={"/lazismu/"}
            >
              <img src={beranda} alt="" />
              <p className="text-WHITE01 ">Beranda</p>
            </Link>
          </button>

          <button className="text-start text-base font-bold text-green-600">
            <Link
              className="flex flex-col justify-center items-center"
              to={"/lazismu/detailDonasi/detailDonasi"}
            >
              <img src={Campaign} alt="" />
              <p className="text-WHITE01 ">Campaign</p>
            </Link>
          </button>

          <button className="text-start text-base font-bold text-green-600">
            <Link
              className="flex flex-col justify-center items-center"
              to={"/lazismu/detailZiska/detailZISKA"}
            >
              <AiOutlineDollarCircle color="green" className="h-8 w-8" />
              <p className="text-WHITE01 ">Ziska</p>
            </Link>
          </button>

          <button className="text-start text-base font-bold text-green-600">
            <Link
              className="flex flex-col justify-center items-center"
              to={"/lazismu/berita/news"}
            >
              <FaNewspaper color="green" className="w-9 h-8"></FaNewspaper>
              <p className="text-WHITE01 ">Berita</p>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
Navbar.propTypes = {
  url: PropTypes.string,
};
