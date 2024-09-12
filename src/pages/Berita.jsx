import search from "../assets/search.svg";
import down from "../assets/down2.svg";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllBerita } from "../redux/action/beritaAction";
import CardBerita from "../components/CardBerita";
import { FaChevronDown } from "react-icons/fa";

export default function Berita() {
  const { news } = useParams();
  const { berita } = useSelector((state) => state.berita);
  const { pageNumber } = useSelector((state) => state.campaign);
  const [topic, setTopic] = useState(null);
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };
  useEffect(() => {
    dispatch(getAllBerita(pageNumber - 1, topic));
  }, [dispatch, pageNumber - 1, topic]);
  return (
    <div>
      <div>
        <Navbar url={news} />
      </div>
      {/* content 1 */}
      <div
        style={{
          backgroundImage: `url(${berita[0]?.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative", // Tambahkan properti position relative
        }}
        className="w-full lg:h-[70vh] md:h-[65vh] sm:h-[40vh] h-[30vh] md:mt-10 lg:mt-14 flex flex-col justify-end md:p-10 p-5 xl:p-20 bg-white"
      >
        {/* Overlay gelap */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)",
            zIndex: 1, // Pastikan overlay berada di atas gambar
          }}
        ></div>
        {/* Konten judul berita */}
        <div className="font-Inter text-white xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:w-[80%] font-semibold">
        <div className="z-10 absolute w-[20%] h-7 sm:h-8 md:h-9 lg:h-10 xl:h-12 bg-gradient-to-r from-green-600 to-transparant"></div>
          <div className="z-20 flex flex-wrap relative">
            <p className="relative z-20">{berita[0]?.title}</p>
          </div>
        </div>
      </div>
      {/* search */}
      <div className="md:mx-10 mx-5 xl:mx-20 mt-5 md:mt-10 flex md:flex-none justify-between">
        <div className="hidden w-full ring-2 ring-gray-300/20 shadow shadow-lg rounded-lg items-center">
          <img src={search} alt="" className="mx-5 md:my-2" />
          <input
            type="text"
            placeholder="Cari berita yang anda inginkan"
            className="w-full focus:outline-none mr-2 text-lg p-2"
          />
        </div>
      </div>
      {/* button */}
      <div className="xl:px-20 md:px-10 px-5 py-5 ">
        <div className="flex justify-between items-center font-Inter font-semibold md:text-xl sm:text-lg text-sm xl:text-2xl">
          <div className="lg:hidden relative w-full">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-2 justify-between text-gray-600 hover:text-green-600 hover:underline hover:underline-offset-[2vh] "
            >
              {topic || "Semua"} <FaChevronDown />
            </button>
            {showDropdown && (
              <div className="absolute z-10 top-full mt-1 bg-white w-full shadow-lg rounded-md">
                <button
                  onClick={() => {
                    setTopic(null);
                    toggleDropdown();
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Semua
                </button>
                <button
                  onClick={() => {
                    setTopic("opini");
                    toggleDropdown();
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Opini
                </button>
                <button
                  onClick={() => {
                    setTopic("daerah");
                    toggleDropdown();
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Daerah
                </button>
                <button
                  onClick={() => {
                    setTopic("nasional");
                    toggleDropdown();
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Nasional
                </button>
                <button
                  onClick={() => {
                    setTopic("internasional");
                    toggleDropdown();
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Internasional
                </button>
                <button
                  onClick={() => {
                    setTopic("ziswaf");
                    toggleDropdown();
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Ziswaf
                </button>
                <button
                  onClick={() => {
                    setTopic("hikmah_dan_doa");
                    toggleDropdown();
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Hikmah&Doa
                </button>
              </div>
            )}
          </div>
          {/*  */}
          <div className="hidden lg:flex justify-between text-xl lg:w-4/6 w-full">
            <button
              onClick={() => setTopic(null)}
              className={`${
                topic == null
                  ? "text-green-600 underline underline-offset-[2vh]"
                  : "text-gray-600"
              } hover:text-green-600 hover:underline hover:underline-offset-[2vh]`}
            >
              Semua
            </button>
            <button
              onClick={() => setTopic("opini")}
              className={`${
                topic == "opini"
                  ? "text-green-600 underline underline-offset-[2vh]"
                  : "text-gray-600"
              } hover:text-green-600 hover:underline hover:underline-offset-[2vh]`}
            >
              Opini
            </button>
            <button
              onClick={() => setTopic("daerah")}
              className={`${
                topic == "daerah"
                  ? "text-green-600 underline underline-offset-[2vh]"
                  : "text-gray-600"
              } hover:text-green-600 hover:underline hover:underline-offset-[2vh]`}
            >
              Daerah
            </button>
            <button
              onClick={() => setTopic("nasional")}
              className={`${
                topic == "nasional"
                  ? "text-green-600 underline underline-offset-[2vh]"
                  : "text-gray-600"
              } hover:text-green-600 hover:underline hover:underline-offset-[2vh]`}
            >
              Nasional
            </button>
            <button
              onClick={() => setTopic("internasional")}
              className={`${
                topic == "internasional"
                  ? "text-green-600 underline underline-offset-[2vh]"
                  : "text-gray-600"
              } hover:text-green-600 hover:underline hover:underline-offset-[2vh]`}
            >
              Internasional
            </button>
            <button
              onClick={() => setTopic("ziswaf")}
              className={`${
                topic == "ziswaf"
                  ? "text-green-600 underline underline-offset-[2vh]"
                  : "text-gray-600"
              } hover:text-green-600 hover:underline hover:underline-offset-[2vh]`}
            >
              Ziswaf
            </button>
            <button
              onClick={() => setTopic("hikmah_dan_doa")}
              className={`${
                topic == "hikmah_dan_doa"
                  ? "text-green-600 underline underline-offset-[2vh]"
                  : "text-gray-600"
              } hover:text-green-600 hover:underline hover:underline-offset-[2vh]`}
            >
              Hikmah&Doa
            </button>
          </div>
          <button className="hidden lg:text-xl w-full sm:w-auto justify-between  items-center gap-2 bg-primary text-white p-2 md:p-3 rounded-lg hover:scale-105">
            Pilih Kategory <img src={down} alt="" />
          </button>
        </div>
      </div>
      {/* cardBerita */}
      <div className="mx-5 md:mx-10 lg:mx-20 flex flex-row justify-between grid md:grid-cols-3 grid-cols-1 mt-4 mb-12 md:gap-6 sm:gap-5 gap-4 lg:gap-6">
        {berita.map((item) => (
          <CardBerita key={item.id} item={item} />
        ))}
      </div>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
