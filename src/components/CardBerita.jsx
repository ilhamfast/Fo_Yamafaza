import PropTypes from "prop-types";
import calendar from "../assets/calendar.svg";
import { Link } from "react-router-dom";
export default function CardBerita({ item }) {
  return (
    <div>
      <Link to={`/lazismu/berita/${item?.title}/${item?.newsId}`}>
        <div className="flex flex-col shadow shadow-lg card-wrapper h-full bg-NEUTRAL06 md:rounded-xl rounded-lg justify-between gap-1 font-NEUTRAL04 font-Inter cursor-pointer hover:scale-105 transition delay-150 duration-300 ease-in-out">
          <img
            src={item?.image}
            className="object-content h-[20vh] sm:h-[50%] w-full md:rounded-t-xl rounded-t-lg"
            alt=""
          />
          <div className="p-2">
            <p className="font-Inter font-bold md:text-base text-sm line-clamp-3 sm:line-clamp-3">
              {item?.title}
            </p>
            <p className="font-Inter mt-2 md:text-sm text-xs line-clamp-3 sm:line-clamp-5">
              {item?.content}
            </p>
          </div>
          <div className="flex md:text-sm text-xs justify-between pb-2 px-2">
            <div className="flex gap-2 md:gap-3 items-end">
              <img src={calendar} className="w-4 md:w-6" alt="" />
              <p>{item?.date}</p>
            </div>
            <p className="mt-1 md:mt-0 text-primary font-semibold">
              {item?.topic?.topicName}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
CardBerita.propTypes = {
  item: PropTypes.array.isRequired,
};
