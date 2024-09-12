import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import location from "../assets/location.svg";
import { CiShare1 } from "react-icons/ci";
import Footer from "../components/Footer";
// import pana from "../assets/pana.svg";
import user from "../assets/user.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCampaign,
  getAllCategory,
  getCampaignDistribution,
  getCampaignHistory,
  getDetailCampaign,
} from "../redux/action/campaignAction";
import Target from "../components/Target";
import CardCarousel from "../components/CardCarousel";
import Card from "../components/Card";
import Pilar from "../components/Pilar";
import PageNumber from "../components/PageNumber";
import { setPageNumber } from "../redux/reducers/campaignReducer";

export default function DetailCampaign() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [button, setButton] = useState("Detail");
  const { campaign } = useSelector((state) => state.campaign);
  const { allCategory } = useSelector((state) => state.campaign);
  const { detailCampaign } = useSelector((state) => state.campaign);
  const dispatch = useDispatch();
  const { categoryCampaign } = useSelector((state) => state.campaign);
  const { campaignHistory } = useSelector((state) => state.campaign);
  const { pageNumber } = useSelector((state) => state.campaign);
  const { distribution } = useSelector((state) => state.campaign);

  const handleShareLink = () => {
    if (navigator.share) {
      navigator
        .share({
          title: document.title,
          url: `https://ruangberbagi.org/lazismu/detailCampaign/${detailCampaign?.campaignCode}`,
        })
        .then(() => console.log("Berbagi berhasil"))
        .catch((error) => console.error("Kesalahan saat berbagi:", error));
    } else {
      alert("Maaf, fitur berbagi tidak didukung di perangkat Anda.");
    }
  };

  const donasi = (id) => {
    navigate(`/lazismu/pembayaran/${id}`);
  };
  const formatNumber = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      dispatch(getDetailCampaign(id));
      dispatch(getAllCampaign(0));
      dispatch(getAllCategory());
      dispatch(getCampaignHistory(id, pageNumber - 1));
      dispatch(getCampaignDistribution(id, pageNumber - 1));
    }
  }, [id, dispatch]);
  return (
    <div>
      {/* content */}
      <div className="font-Inter">
        <div className="mt-10 sm:mt-0 bg-green-100/20 sm:py-10 pb-4 border-b-2 border-gray-200">
          <div className="flex-none md:flex justify-between xl:px-20 lg:px-10  sm:mt-10 sm:px-5 font-Inter xl:gap-8 md:gap-5 gap-3">
            <div className="md:w-1/2 w-full">
              <img
                src={detailCampaign?.campaignImage}
                className=" xl:h-96 w-full "
                alt=""
              />
            </div>
            <div className="md:w-3/6 w-full px-4 md:px-0">
              <p className="mt-3 md:mt-0 font-bold lg:text-4xl md:text-3xl xl:text-5xl text-2xl text-gray-600 text-center md:text-end">
                Salurkan Donasi Kamu Dengan Mudah
              </p>
              <div className="flex flex-wrap justify-between gap-1 md:pl-5 mt-2">
                <div className="md:text-base text-sm flex gap-2 items-center">
                  <p>Kategori</p>
                  <p className="bg-primary text-white px-2 rounded-3xl text-xs font-semibold">
                    {categoryCampaign?.categoryName}
                  </p>
                </div>
                <div className="flex gap-1 items-center">
                  <img src={location} className="w-4 md:w-7" alt="" />
                  <p className="md:text-base text-sm">
                    {detailCampaign?.location}
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="flex flex-wrap justify-between mt-1 sm:mt-3 md:pl-5 ">
                <div>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                    Terkumpul
                  </p>
                  <p className="text-black md:text-lg text-sm md:text-base lg:text-xl font-semibold">
                    Rp {formatNumber(detailCampaign?.currentAmount || 0)}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                    Dana Dibutuhkan
                  </p>
                  <p className="text-black md:text-lg text-sm md:text-base lg:text-xl font-semibold">
                    Rp {formatNumber(detailCampaign?.targetAmount || 0)}
                  </p>
                </div>
              </div>
              {/* target */}
              <div className="md:pl-5 lg:mt-2 mt-1">
                <Target
                  targetAmount={detailCampaign?.targetAmount}
                  amountCampaign={detailCampaign?.currentAmount}
                />
              </div>
              {/*  */}
              <div className="flex gap-3 md:justify-between items-center md:pl-5 mt-3">
                <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                  Sisa Waktu :
                </p>
                <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                  {detailCampaign?.startDate} Sampai {detailCampaign?.endDate}
                </p>
              </div>
              {/*  */}
              <div className="flex flex-wrap items-center gap-2 lg:gap-3 md:pl-5 mt-1">
                <p className="text-gray-600 md:text-base text-sm lg:text-lg">
                  Bagikan Campaign
                </p>
                <div className="flex gap-1">
                  <button
                    onClick={handleShareLink}
                    className="text-sm lg:text-lg items-center hover:scale-110 flex gap-2 border-2 border-primary px-1 rounded-lg font-semibold text-primary"
                  >
                    Share <CiShare1 />
                  </button>
                </div>
              </div>
              {/*  */}
              <div className="w-full md:pl-5 mt-5">
                <button
                  className="w-full bg-primary font-bold md:text-base text-sm md:text-base lg:text-lg rounded-sm md:rounded- text-white p-1 lg:p-2 hover:translate-y-[-5px] duration-300"
                  onClick={() => donasi(id)}
                >
                  Donasi Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* button */}
        <div className="mt-5 flex gap-5 justify-center p-1 border-b-2 border-gray-200 bg-white">
          <button
            onClick={() => setButton("Detail")}
            className={`${
              button == "Detail"
                ? " underline underline-offset-[2vh] sm:underline-offset-[3vh] text-green-500"
                : "text-gray-500 bg-white"
            }  p-2 font-bold text-xl`}
          >
            Detail
          </button>
          <button
            onClick={() => {
              setButton("Update");
              dispatch(setPageNumber(1));
            }}
            className={`${
              button == "Update"
                ? " underline underline-offset-[2vh] sm:underline-offset-[3vh] text-green-500"
                : "text-gray-500 bg-white"
            }  p-2 font-bold text-xl`}
          >
            Distribution
          </button>
          <button
            onClick={() => {
              setButton("Donatur");
              dispatch(setPageNumber(1));
            }}
            className={`${
              button == "Donatur"
                ? " underline underline-offset-[2vh] sm:underline-offset-[3vh] text-green-500"
                : "text-gray-500 bg-white"
            }  p-2 font-bold text-xl`}
          >
            Donatur
          </button>
        </div>
        {/* 3 button */}
        {button == "Detail" && (
          <div className="sm:flex my-5 justify-center sm:px-20">
            <div className="flex flex-col gap-2 lg:gap-2 text-Inter lg:text-lg md:text-base text-xs text-NEUTRAL04 w-[100%] md:w-4/6  bg-white ring-NEUTRAL04 drop-shadow-lg p-5 sm:px-10 text-justify">
              <h3>{detailCampaign.description}</h3>
              <p className="font-bold">Dapat disalurkan dengan cara :</p>
              <ul>
                <h3 className="font-semibold text-gray-900">
                  1. {`Klik tombol "Donasi Sekarang"`}
                </h3>
                <h3 className="font-semibold text-gray-900">
                  2. Masukkan nominal donasi
                </h3>
                <h3 className="font-semibold text-gray-900">
                  3. Isi data diri
                </h3>
                <h3 className="font-semibold text-gray-900">
                  4. Pilih metode pembayaran
                </h3>
                <h3 className="font-semibold text-gray-900">
                  5.{" "}
                  {` Klik "Lanjutkan Pembayaran" dan ikuti langkah selanjutnya`}
                </h3>
                <h3 className="font-semibold text-gray-900">
                  6. Dapatkan laporan via email
                </h3>
              </ul>
            </div>
            {/* pilar */}
            <div className="p-6 sm:p-0 sm:w-2/4 mx-4">
              <h6 className="text-xl mb-2 text-center">
                6 PILAR PROGRAM LAZISMU
              </h6>
              <Pilar />
            </div>
          </div>
        )}
        {button == "Update" && (
          <div className="flex flex-col items-center gap-4 mt-10 mx-4">
            {/* <img src={pana} className="md:w-auto w-60" alt="" /> */}
            {distribution.map((item) => (
              <div
                className="flex justify-between w-full max-w-2xl gap-5 bg-white shadow-lg rounded border-2 border-gray-200 p-2"
                key={item.id}
              >
                <img src={item.image} className="w-[100%]" alt="" />
                <div className="w-full">
                  <h1 className="text-end font-bold text-gray-600 text-xs sm:text-base">
                    {item.distributionDate}
                  </h1>
                  <h1 className="font-bold text-sm sm:text-base">
                    {item.description}
                  </h1>
                  Kepada :
                  <h1 className="text-primary font-bold text-sm sm:text-base">
                    {item.receiver}
                  </h1>
                  Sebesar :
                  <h1 className="text-primary font-bold text-sm sm:text-base">
                    Rp {formatNumber(item.distributionAmount)}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        )}
        {button == "Donatur" && (
          <div>
            <div className="mt-10 md:mt-10 mb-5 md:px-20 px-4 space-y-4 sm:grid grid-cols-2 gap-5">
              {campaignHistory.length >= 1 &&
                campaignHistory.map((item) => (
                  <div
                    key={item?.id}
                    className="items-center rounded-lg bg-white drop-shadow-lg flex px-4 py-2 gap-5 w-full"
                  >
                    <div>
                      <img src={user} className="w-12 md:w-14 lg:w-16" alt="" />
                    </div>
                    <div className="w-full">
                      <div className="flex justify-between w-full text-base md:text-lg xl:text-xl">
                        <p className="font-semibold text-sm md:text-base">
                          {item?.username}
                        </p>
                        <p className="text-sm md:text-base">
                          {item?.transactionDate}
                        </p>
                      </div>
                      <p className="text-sm md:text-lg xl:text-xl font-bold text-primary">
                        Rp {formatNumber(item?.transactionAmount)}
                      </p>
                      <p className="text-sm md:text-base">{item?.message}</p>
                    </div>
                  </div>
                ))}
            </div>
            <PageNumber></PageNumber>
          </div>
        )}
        {/*  */}
      </div>
      <div className="px-5 md:px-10 lg:px-20 bg-white py-2">
        <div className="flex flex-col text-center sm:gap-3">
          <p className=" md:text-3xl xl:text-5xl text-2xl font-Montserrat font-bold text-primary">
            Bantu Mereka
          </p>
          <div className="md:text-xl xl:text-3xl text-base">
            <p>Mereka butuh uluran tangan kita.</p>
            <p>Sedikit bantuan kita sangat berarti bagi mereka</p>
          </div>
        </div>
        <div className="flex justify-between items-end text-xl font-Inter sm:text-2xl font-bold my-2 sm:my-3">
          Campaign Populer
          <Link
            to={`/lazismu/detailDonasi/detailCampaign`}
            className="text-xs text-green-500 sm:text-base"
          >
            Lihat semua
          </Link>
        </div>
        {/* card */}
        <div className="sm:hidden md:mx-10 lg:mx-20 flex flex-row justify-between grid md:grid-cols-3 grid-cols-2  md:gap-6 sm:gap-5 gap-3">
          {campaign.slice(0, 6).map((item) => (
            <CardCarousel key={item.campaignId} item={item} />
          ))}
        </div>
        <div className="hidden justify-between sm:grid md:grid-cols-3 grid-cols-2  mb-8 md:gap-6 sm:gap-5 gap-3">
          {campaign.slice(0, 6).map((item) => (
            <Card key={item.campaignId} item={item} />
          ))}
        </div>
        {/* category */}
        <div className="flex flex-col text-xl font-Inter sm:text-2xl font-bold my-2 sm:my-3">
          <p>Category</p>
          <div className="flex flex-wrap gap-x-3 gap-y-3 mt-2">
            {allCategory.map((item) => (
              <Link
                to={`/lazismu/detailDonasi/${item.categoryName}`}
                key={item.campaignId}
                className="text-xs sm:text-base ring-1 ring-green-500 p-1 rounded-sm active:bg-green-500 active:text-white"
              >
                {item.categoryName.replace(/_/g, " ")}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
