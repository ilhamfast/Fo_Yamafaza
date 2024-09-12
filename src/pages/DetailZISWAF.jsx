import flower from "../assets/zakat.jpg";
import Ziswaf from "../components/Ziswaf";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

export default function DetailZISWAF() {
  const { detailZISKA } = useParams();
  useEffect(()=>{
    window.scrollTo(0, 0);

  },[])
  return (
    <div>
      <ToastContainer />
      <div>
        <Navbar url={detailZISKA} />
      </div>
      {/* content */}
      <div>
        <div className="gap-3 pl-4 md:pl-20 bg-gradient-to-r from-primary via-black to-black flex flex-row justify-between items-center h-40 sm:h-80 md:h-80 lg:h-[54vh] lg:mt-[11vh]">
          <div className="right-0 h-40 sm:h-80 md:h-80 lg:h-[54vh] bg-gradient-to-r to-transparent via-black/60 from-black w-[50%] md:w-[41%] absolute"></div>
          <div className="flex justify-between w-4/6">
            <p className="font-Madimi text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl text-white">
              {
                "Zakat adalah pelajaran tentang kepedulian dan keikhlasan,mengalirkan kasih sayang kepada sesama"
              }
            </p>
          </div>
          <img
            src={flower}
            className="object-cover h-40 w-[50%] sm:h-80 md:h-80 lg:h-[54vh]"
            alt=""
          />
        </div>
      </div>
      {/*Ziswaf*/}
      <div className="relative">
        <div className="flex justify-center mt-[3vh] lg:mt-[10vh]">
          <Ziswaf />
        </div>
      </div>
      {/* content1 */}
      <div className="flex mt-[12vh] sm:mt-[30vh] justify-between mx-4 md:mx-10 lg:mx-20 items-center gap-5">
        <div className="font-Inter text-NEUTRAL04 sm:w-[80%] w-full">
          <h1 className="sm:my-3 my- xl:my-5 sm:text-3xl text-lg md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            Salurkan donasi kamu dengan mudah
          </h1>
          <p className="md:text-base lg:text-lg sm:text-sm text-xs xl:text-xl xl:w-3/4 my-1 sm:my-3 lg:my-5 ">
            Dengan berkontribusi, Anda akan membantu menyediakan sumber daya
            penting kepada mereka yang sangat membutuhkannya. Aksi bersama untuk
            sesama
          </p>
          <button className="my-1 lg:my-3 bg-primary rounded-sm px-4 py-1 lg:py-2 md:text-lg text-xs sm:text-base lg:text-lg xl:text-xl text-white font-bold hover:scale-105">
            <Link to={"/lazismu/detailDonasi/detailDonasi"}>
              Donasi Sekarang
            </Link>
          </button>
        </div>
        <div className="hidden sm:block w-3/6 lg:w-3/6">
          <img
            src={
              "https://www.investopedia.com/thmb/hvCs7nGRZ539vKETw1KIHvk2HzM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1173117669-baa23a3889054f828aebc58f9de136b6.jpg"
            }
            alt=""
          />
        </div>
      </div>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
