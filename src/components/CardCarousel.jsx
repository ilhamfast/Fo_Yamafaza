import location from "../assets/location.svg";
import time from "../assets/time.svg";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Target from "./Target";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPageNumber } from "../redux/reducers/campaignReducer";
export default function CardCarousel({ item, height, margin }) {
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const cardCategory = () => {
      setCategory(item?.category);
    };
    cardCategory();
  }, [item]);
  const formatNumber = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  const handleDetail = (item) => {
    navigate(`/lazismu/detailCampaign/${item}`);
    dispatch(setPageNumber(1));
  };
  return (
    <div className={`${height}`}>
      <div
        className={`flex flex-col justify-between ${margin} bg-white drop-shadow-lg h-full rounded-md`}
      >
        <div>
          <img
            src={item?.campaignImage}
            alt=""
            className="rounded-t-md h-24 sm:h-48 object-cover w-full"
          />
          <div className="mt-1 text-[7px] px-1 flex gap-1 items-center">
            <div>{item?.creator?.username}</div>
            <div className="bg-transparent ring-primary ring-1 rounded-full text-primary px-1 text-[6px] ">
              {category?.categoryName}
            </div>
          </div>
          <div className="text-[10px] px-1 font-semibold line-clamp-2">
            {item?.campaignName}
          </div>
        </div>
        <div className="text-[8px] px-1">
          <div className="flex gap-1 items-center">
            <img src={location} className=" w-3" alt="" />
            <p className="md:text-sm xl:text-base sm:text-xs text-[8px]">
              {item?.location}
            </p>
          </div>
          <div className="flex flex-wrap justify-between gap-1">
            <div className="flex gap-1">
              <div>Terkumpul</div>
              <div className="text-green-600 font-semibold">
                Rp {formatNumber(item?.currentAmount)}
              </div>
            </div>
            <div className="flex gap-1">
              <div>Terget</div>
              <div className="text-green-600 font-semibold">
                Rp {formatNumber(item?.targetAmount)}
              </div>
            </div>
          </div>
          <div className="mt-1">
            <Target
              targetAmount={item?.targetAmount}
              amountCampaign={item?.currentAmount}
            />
          </div>
          <div className="mt-2 flex gap-1 items-center text-[7px]">
            <img className="w-3" src={time} alt="" />
            <p>{item?.startDate}</p> Sampai
            <p>{item?.endDate}</p>
          </div>
          <button
            onClick={() => handleDetail(item?.campaignCode)}
            className="active:bg-green-600 my-2 w-full rounded-sm lg:px-5 md:px-4 sm:px-3 px-2 xl:px-6 py-1 lg:py-2 bg-primary lg:text-base md:text-sm sm:text-xs text-[10px] text-white font-bold md:hover:scale-105 md:hover:bg-green-600"
          >
            Ikut Donasi
          </button>
        </div>
      </div>
    </div>
  );
}
CardCarousel.propTypes = {
  item: PropTypes.object,
  height: PropTypes.string,
  margin: PropTypes.string,
};
