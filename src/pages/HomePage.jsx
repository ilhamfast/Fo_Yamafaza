// import content1 from "../assets/conten1.svg";
import image1 from "../assets/image1.svg";
import image2 from "../assets/image2.svg";
import image3 from "../assets/image3.svg";
import image4 from "../assets/image4.svg";
import navbar from "../assets/navbar.jpg";
import logo from "../assets/logo.png";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategory,
  getCampaignActive,
  sumarry,
} from "../redux/action/campaignAction";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardCarousel from "../components/CardCarousel";
import PilarH from "../components/PilarH";
import Pilar from "../components/Pilar";
import { getAllBerita } from "../redux/action/beritaAction";

export default function HomePage() {
  const [showCard, setShowCard] = useState(6);
  const dispatch = useDispatch();
  const { dataHome } = useSelector((state) => state.campaign);
  const { allCategory } = useSelector((state) => state.campaign);
  const { summary } = useSelector((state) => state.campaign);
  const { berita } = useSelector((state) => state.berita);

  const formatNumber = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const lebihBanyak = () => {
    setShowCard(showCard + 6);
  };

  useEffect(() => {
    dispatch(getCampaignActive());
    dispatch(getAllCategory());
    dispatch(sumarry());
    dispatch(getAllBerita(0, null));
  }, [dispatch]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
  };
  const responsive2 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div>
      {/* header */}
      <div className="mt-10 sm:mt-none gap-4 lg:pr-5 md:pr-5 pr-2 xl:pr-20 md:mt-10 h-44 sm:h-80 md:h-80 lg:h-96 max-h-96 bg-primary flex justify-between font-bold text-3xl sm:items-center items-start">
        <div className="w-5/6">
          <img
            src={navbar}
            alt=""
            className="object-cover w-full h-44 sm:h-80 md:h-80 lg:h-96 "
          />
        </div>
        <div className="top-0 left-0 md:mt-10 h-[36vh] sm:h-80 md:h-80 lg:h-96 bg-gradient-to-r from-transparent via-primary/50 to-primary w-[44%] md:w-[44%] xl:w-[43%] absolute"></div>
        <div className="w-full">
          <p className="font-Madimi sm:text-3xl text-base md:text-4xl lg:text-5xl text-black/70 mt-5 sm:mt-0">
            Donasi Mudah Kini Bisa Lebih Cepat Tanpa Ada Jarak
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="absolute top-[22vh] sm:top-[50vh] md:top-[50vh] lg:top-[60vh] flex sm:w-5/6 w-[90%] xl:w-5/6 bg-white shadow shadow-lg rounded-3xl px-1 sm:px-5 md:px-10 lg:px-20 sm:py-5 py-2 transition delay-150 duration-300 ease-in-out">
          <div className="flex w-full justify-around md:justify-between p-2 items-start">
            <div className="flex flex-col items-center justify-between h-full">
              <img
                src={image1}
                className="w-16 sm:w-20 md:w-24 lg:w-28"
                alt=""
              />
              <p className="text-green-600 md:text-lg text-[10px] ms:text-sm lg:text-xl font-semibold">
                {summary.totalDistributionReceiver || 0}
              </p>
              <p className="font-bold md:text-lg sm:text-sm text-[8px] text-center lg:text-xl text-black font-Inter">
                Penerima Manfaat
              </p>
            </div>
            <div className="flex flex-col items-center justify-between h-full">
              <img
                src={image3}
                className="w-16 sm:w-20 md:w-24 lg:w-28"
                alt=""
              />
              <p className="text-green-600 md:text-lg text-[10px] ms:text-sm lg:text-xl font-semibold">
                Rp {formatNumber(summary.totalTransactionAmount || 0)}
              </p>
              <p className="font-bold md:text-lg sm:text-sm text-[8px] text-center lg:text-xl text-black font-Inter">
                Penghimpunan
              </p>
            </div>
            <div className="flex flex-col items-center justify-between h-full ">
              <img
                src={image2}
                className="w-16 sm:w-20 md:w-24 lg:w-28"
                alt=""
              />
              <p className="text-green-600 md:text-lg text-[10px] ms:text-sm lg:text-xl font-semibold">
                Rp {formatNumber(summary.totalDistributionAmount || 0)}
              </p>
              <p className="font-bold md:text-lg sm:text-sm text-[8px] text-center lg:text-xl text-black font-Inter">
                Distribusi
              </p>
            </div>
            <div className="flex flex-col items-center justify-between h-full">
              <img
                src={image4}
                className="w-16 sm:w-20 md:w-24 lg:w-28"
                alt=""
              />
              <p className="text-green-600 md:text-lg text-[10px] ms:text-sm lg:text-xl font-semibold">
                {summary.totalUser || 0}
              </p>
              <p className="font-bold md:text-lg sm:text-sm text-[8px] text-center lg:text-xl text-black font-Inter">
                Donatur
              </p>
            </div>
          </div>
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
      {/* button */}
      <div className="flex md:mt-10 mt-5 mx-4 md:mx-10 lg:mx-20 text-2xl lg:text-4xl font-Inter font-bold">
        Berita Terkini
      </div>
      <Carousel
        className="drop-shadow-lg md:mx-10 lg:mx-20"
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive2}
        // ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        // autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        initialSlide={1} // Mengatur slide awal ke index kedua (indeks dimulai dari 0)
      >
        {berita.slice(0, 5).map((item) => (
          <Link
            key={item.id}
            to={`/lazismu/berita/${item.title}/${item.newsId}`}
          >
            <div>
              <img
                className="md:mb-10 mb-10 my-2 h-44 sm:h-72 md:h-[70vh] w-full object-content"
                src={item.image}
                alt=""
              />
            </div>
          </Link>
        ))}
      </Carousel>

      {/* card */}
      <div>
        <div className="flex justify-between items-end text-xl font-Inter sm:text-3xl font-bold my-2 sm:my-3 md:mx-10 lg:mx-20 mx-4">
          Program Aktif
          <Link
            to={`/lazismu/detailDonasi/detailDonasi`}
            className="text-xs text-green-500 sm:text-base"
          >
            Lihat semua
          </Link>
        </div>
        <div className="hidden md:mx-10 lg:mx-20 justify-between sm:grid md:grid-cols-3 grid-cols-2 mb-12 md:gap-6 sm:gap-5 gap-3">
          {dataHome.slice(0, showCard).map((item) => (
            <Card key={item.campaignId} item={item} />
          ))}
        </div>
        <Carousel
          className="sm:hidden drop-shadow-lg mx-2"
          swipeable={true}
          draggable={true}
          // showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={false} // Mengatur autoplay menjadi false untuk menghentikan geser otomatis
          autoPlaySpeed={1000}
          keyBoardControl={true}
          // customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          initialSlide={0}
          partialVisbile={true}
        >
          {dataHome.slice(0, showCard).map((item) => (
            <div key={item.campaignId}>
              <CardCarousel
                key={item.campaignId}
                item={item}
                height={"h-60"}
                margin={"m-1"}
              />
            </div>
          ))}
        </Carousel>
      </div>
      {/* button2 */}
      <div className="hidden md:flex justify-center my-10">
        {showCard <= 12 && (
          <button
            onClick={lebihBanyak}
            className="xl-text-xl lg:text-lg text-sm bg-primary font-bold text-white rounded-md px-6 py-2 text-lg text-Inter hover:scale-105"
          >
            Program Lainnya
          </button>
        )}
      </div>
      {/* category */}
      <div className="flex flex-col text-xl font-Inter sm:text-3xl font-bold my-2 sm:my-3 mx-4 md:mx-10 lg:mx-20">
        <p>Category</p>
        <div className="flex flex-wrap gap-x-3 gap-y-3 mt-2">
          {allCategory.map((item) => (
            <Link
              to={`/lazismu/detailDonasi/${item.categoryName}`}
              key={item.id}
              className="text-xs sm:text-base ring-1 ring-green-500 p-1 rounded-sm active:bg-green-500 active:text-white"
            >
              {item.categoryName.replace(/_/g, " ")}
            </Link>
          ))}
        </div>
      </div>
      {/* content2 */}
      <div className="flex justify-center mt-8">
        <img src={logo} className="sm:h-12 h-8 w-8 sm:w-12" alt="" />
      </div>
      <h6 className="text-xl sm:text-3xl font-bold mb-2 text-center">
        6 PILAR PROGRAM LAZIS<span className="text-primary">MU</span>
      </h6>
      <div className="mx-4">
        <PilarH />
      </div>
      {/* footer */}
      <div>
        <div className="block md:hidden p-6 sm:p-0 mx-4">
          <Pilar />
        </div>
        <Footer />
      </div>
    </div>
  );
}
