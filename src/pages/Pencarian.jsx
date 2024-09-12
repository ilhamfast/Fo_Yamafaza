// import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Card from "../components/Card";
import CardCarousel from "../components/CardCarousel";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCampaign,
  searchCampaignName,
} from "../redux/action/campaignAction";
import { useParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import Footer from "../components/Footer";
import PageNumberSearch from "../components/PageNumberSearch";

export default function Pencarian() {
  const { getCampaignSearch } = useSelector((state) => state.campaign);
  const { campaign } = useSelector((state) => state.campaign);
  const dispatch = useDispatch();
  const { pencarian } = useParams();
  const { pageNumber } = useSelector((state) => state.campaign);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (pencarian) {
      // dispatch(setPageNumber(1))
      dispatch(searchCampaignName(pencarian, pageNumber - 1)); // Memanggil fungsi searchCampaignName dengan parameter pencarian
      dispatch(getAllCampaign(0));
    }
  }, [pencarian, pageNumber, dispatch]);

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
  return (
    <div>
      <div className="mx-4 md:mx-10 lg:mx-20">
        <div className="lg:mt-20 sm:mt-10 mt-14 text-NEUTRAL05 font-Inter flex flex-wrap gap-6">
          <p className="font-black md:text-2xl lg:text-3xl">
            {`Hasil Pencarian`}{" "}
            <span className="text-primary">{`"${pencarian}"`}</span>
          </p>
        </div>
        <div className="flex gap-4 items-end">
          <PageNumberSearch />
        </div>
        <div>
          <div className="hidden justify-between sm:grid md:grid-cols-3 grid-cols-2 md:gap-6 mt-4 sm:gap-5 gap-4">
            {getCampaignSearch.slice(0, 12).map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
          <div className="sm:hidden flex flex-row justify-between grid md:grid-cols-3 grid-cols-2 mt-1 gap-4">
            {getCampaignSearch.slice(0, 12).map((item) => (
              <CardCarousel key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="lg:mt-20 sm:mt-10 mt-5 text-NEUTRAL05 font-Inter flex flex-wrap">
          <p className="font-black md:text-2xl lg:text-3xl">
            Rekomendasi untuk anda
          </p>
        </div>
        <div className="hidden mt-5 justify-between sm:grid md:grid-cols-3 grid-cols-2 mb-12 md:gap-6 sm:gap-5 gap-3">
          {campaign.slice(0, 6).map((item) => (
            <Card key={item.campaignId} item={item} />
          ))}
        </div>
        <Carousel
          className="sm:hidden drop-shadow-lg "
          swipeable={true}
          draggable={true}
          // showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={false} // Mengatur autoplay menjadi false untuk menghentikan geser otomatis
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          initialSlide={1}
        >
          {campaign.slice(0, 6).map((item) => (
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
      <div>
        <Footer />
      </div>
    </div>
  );
}
