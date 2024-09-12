import logo from "../assets/logo.png";
import Card from "../components/Card";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import CardCarousel from "../components/CardCarousel";
import { useEffect } from "react";
import {
  getAllCampaign,
  getAllCategory,
  getCampaignCategory,
} from "../redux/action/campaignAction";
import PageNumber from "../components/PageNumber";
import { setPageNumber } from "../redux/reducers/campaignReducer";

export default function DetailDonasi() {
  const { id } = useParams();
  const { campaign } = useSelector((state) => state.campaign);
  const dispatch = useDispatch();
  const { allCategory } = useSelector((state) => state.campaign);
  const { pageNumber } = useSelector((state) => state.campaign);
  const navigate = useNavigate();
  // console.log(page);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (id == "detailDonasi") {
      dispatch(getAllCampaign(pageNumber - 1));
    } else {
      dispatch(getCampaignCategory(id, pageNumber - 1));
    }
    dispatch(getAllCategory());
  }, [dispatch, id, pageNumber]);
  const handleCategoryChange = (selectedCategory) => {
    navigate(`/lazismu/detailDonasi/${selectedCategory}`);
    dispatch(setPageNumber(1));
  };

  return (
    <div>
      <div>
        <Navbar url={id} />
      </div>
      {/* content 1 */}

      {/* search */}
      <div className="text-NEUTRAL05 font-Inter flex flex-wrap items-center justify-between mt-16 sm:mt-5 md:mt-28 mx-4 md:mx-10 lg:mx-20">
        <h3>
          <p className="flex sm:items-end gap-1 sm:gap-2 font-black md:text-2xl lg:text-3xl">
            DAFTAR<span className="text-primary"> CAMPAIGN</span>
            <img src={logo} className="h-5 w-5 sm:h-10 sm:w-10" alt="" />
          </p>
          <p className="text-xs sm:text-base mb-2 sm:mb-0">
            Pilih dan salurkan donasi untuk program yang berarti bagi Anda dan
            mereka
          </p>
        </h3>
        <div className="flex flex-col items-end w-full sm:w-auto">
          <select
            className="p-2 w-full sm:w-full sm:p-3 text-sm sm:text-lg bg-white rounded-md ring-1 outline-none ring-green-400/40 drop-shadow-lg"
            defaultValue={id}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option className="text-[10px] sm:text-base" value="detailDonasi">
              All CATEGORY
            </option>
            {allCategory.map((item) => (
              <option
                key={item.id}
                className="text-[10px] sm:text-base"
                value={item.categoryName}
              >
                {item.categoryName.replace(/_/g, " ")}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* card */}
      <div className="mx-5 md:mx-10 lg:mx-20 mb-[14vh]">
        <div className="hidden justify-between sm:grid md:grid-cols-3 grid-cols-2 mt-8 md:gap-6 sm:gap-5 gap-4">
          {campaign.slice(0, 12).map((item) => (
            <Card key={item.campaignId} item={item} />
          ))}
        </div>
        <div className="sm:hidden flex flex-row justify-between grid md:grid-cols-3 grid-cols-2 mt-4 gap-2">
          {campaign.slice(0, 12).map((item) => (
            <CardCarousel
              key={item.campaignId}
              item={item}
              margin=""
              height=""
            />
          ))}
        </div>
        {/* pagination */}
        <div className="mt-10">
          <PageNumber />
        </div>
      </div>
    </div>
  );
}
