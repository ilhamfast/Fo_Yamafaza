import fb from "../assets/facebook.svg";
import twit from "../assets/twitter.svg";
import ig from "../assets/instagram.svg";
import li from "../assets/linkedin.svg";
import pesan from "../assets/pesan.svg";
import browser from "../assets/browser.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="border-t-4 border-gray-400/20 flex sm:flex-row flex-col gap-y-2 justify-around md:justify-between lg:p-10 p-5 xl:p-20 bg-white text-gray-600 font-Inter mt-10 mb-[8vh] md:mb-0">
      <div className="sm:w-1/6 flex flex-col gap-1 sm:gap-2 xl:gap-5">
        <img
          src="https://lazismu.org/images/logo.svg"
          className="w-20 sm:w-26"
          alt=""
        />
        <p className="flex text-left xl:text-base md:text-sm sm:text-xs text-md">
          Gedung Dakwah Muhammadiyah, Lt. 1 Jl. Wondri Baru Raya, No. 22,
          Semarang Selatan(50242) Telp: (024) 8415722 Hp/WA: 085640873531
        </p>
        <div className="flex sm:gap-3 gap-1 md:gap-5">
          <Link
            to={"https://web.facebook.com/lazismu.org?_rdc=1&_rdr"}
            className="bg-green-400 rounded-full p-1 flex justify-center items-center hover:scale-110"
          >
            <img src={fb} alt="" />
          </Link>
          <Link
            to={"https://x.com/LAZISMU"}
            className="bg-green-400 rounded-full p-1 flex justify-center items-center hover:scale-110"
          >
            <img src={twit} alt="" />
          </Link>
          <Link
            to={"https://www.instagram.com/lazismupusat/"}
            className="bg-green-400 rounded-full p-1 flex justify-center items-center hover:scale-110"
          >
            <img src={ig} alt="" />
          </Link>
          <Link
            to={"https://www.linkedin.com/company/lazismu"}
            className="bg-green-400 rounded-full p-1 flex justify-center items-center hover:scale-110"
          >
            <img src={li} alt="" />
          </Link>
        </div>
      </div>
      <div className="w-1/6 flex flex-col md:gap-5 gap-2">
        <p className="font-bold sm:text-base  text-lg lg:text-lg">Program</p>
        <div className="sm:text-text-sm text-base lg:text-base">
          <div className="flex justify-between xl:gap-5 gap-2">
            <Link to={"/lazismu/detailZiska/detailZISKA"}>Zakat</Link>
            <Link to={"/lazismu/detailZiska/detailZISKA"}>Infaq</Link>
          </div>
          <div className="flex justify-between xl:gap-5 gap-2">
            <p>Dana Sosial Keagamaan</p>
            <p>SCR</p>
          </div>
          <div className="flex justify-between xl:gap-5 gap-2">
            <Link to={"/lazismu/detailDonasi/detailDonasi"}>Donasi</Link>
            <Link to={"/lazismu/berita/berita"}>Berita</Link>
          </div>
        </div>
      </div>
      <div className="sm:w-1/6 flex flex-col gap-2 md:gap-5 z-10">
        <p className="font-bold sm:text-base text-lg lg:text-lg">Lainnya</p>
        <div className="flex flex-col xl:gap-5 gap-1 sm:text-text-sm text-base lg:text-base">
          <Link
            to={"/lazismu/detailZiska/detailZISKA"}
            className="hover:text-primary"
          >
            Hitung Zakat
          </Link>
          <Link to={"/lazismu/apaItuZiswaf"} className="hover:text-primary">
            Apa itu Ziswaf?
          </Link>
          <Link to={"/lazismu/privasi"} className="hover:text-primary">
            Privacy Policy
          </Link>
          <Link to={"/lazismu/syarat"} className="hover:text-primary">
            Syarat dan Ketentuan{" "}
          </Link>
          <Link to={"/lazismu/refund"} className="hover:text-primary">
            Refund Policy
          </Link>
        </div>
      </div>
      <div className="sm:w-1/6 flex flex-col gap-2 md:gap-5 z-10">
        <p className="font-bold sm:text-base text-lg lg:text-lg">
          Tentang Kami
        </p>
        <div className="flex flex-col lg:gap-5 gap-2">
          <div className="flex gap-1 items-center lg:gap-3 sm:text-text-sm text-base lg:text-base">
            <img src={browser} className="w-6 sm:w-6" alt="" />
            <Link to={"https://lazismu.org/"}>https://lazismu.org/</Link>
          </div>
          <div className="flex gap-3 sm:text-text-sm text-base lg:text-base">
            <img src={pesan} className="w-6 sm:w-6" alt="" />
            <p>lazismu.smg@gmail.com</p>
          </div>
        </div>
      </div>
      {/* <div className="absolute w-[52%] right-20 top-[768vh]">
        <img src={element} alt="" />
      </div> */}
    </div>
  );
}
