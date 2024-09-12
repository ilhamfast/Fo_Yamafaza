import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailBerita } from "../redux/action/beritaAction";
import { FaCalendar } from "react-icons/fa";
import logo from "../assets/logo.png";
import Footer from "../components/Footer";
import { MdTopic } from "react-icons/md";

function DetailBerita() {
  const { newsId } = useParams();
  const dispatch = useDispatch();
  const { detailBerita } = useSelector((state) => state.berita);

  useEffect(() => {
    if (newsId) {
      dispatch(getDetailBerita(newsId));
    }
  }, [dispatch, newsId]);

  return (
    <div className="font-Inter">
      <div className="flex flex-col items-center px-4 md:px-20 py-12">
        <p className="flex justify-center gap-2 font-black text-gray-600 text-2xl items-end">
          <p>
            LAZIS<span className="text-primary">MU</span>
          </p>
          NEWS <img className="h-10 w-10" src={logo} alt="" />
        </p>
        <div className="flex flex-col items-center py-5 gap-2 text-center">
          <h3 className="font-semibold text-xl md:text-3xl text-gray-600">
            {detailBerita?.title}
          </h3>
          <div className="flex justify-center gap-5 w-full md:w-1/2">
            <p className="flex items-center text-gray-600 gap-1 text-xs">
              <FaCalendar color="gray" className="sm:w-5 sm:h-5" />
              Ditulis pada
              <p className="font-semibold"> {detailBerita?.date}</p>
            </p>
            <p className="flex items-center gap-1 text-xs">
              <MdTopic color="gray" className="sm:w-6 sm:h-6" />
              Topic :
              <p className="text-primary font-semibold text-xs">
                {" "}
                {detailBerita?.topic?.topicName}
              </p>
            </p>
          </div>
          <img src={detailBerita?.image} className=" sm:w-[80%]" alt="" />
        </div>
        <div className=" text-justify text-gray-600 sm:text-lg leading-relaxed">
          {detailBerita?.content &&
            detailBerita.content.split("\n").map((paragraph, index) => {
              const parts = paragraph.split("-");
              if (index === 0 && parts.length > 1) {
                return (
                  <p key={index}>
                    <span className="font-bold">{parts[0]}</span>-
                    {parts.slice(1).join("-")}
                  </p>
                );
              } else {
                return (
                  <p className="mb-4" key={index}>
                    {paragraph}
                  </p>
                );
              }
            })}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default DetailBerita;
