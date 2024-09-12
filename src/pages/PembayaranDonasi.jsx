import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailCampaign } from "../redux/action/campaignAction";
import { useDispatch, useSelector } from "react-redux";
import dataPembayaran from "../data/dataPembayaran";
import { setNominal } from "../redux/reducers/pembayaranReducer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

export default function PembayaranDonasi() {
  const dispatch = useDispatch();
  const { detailCampaign } = useSelector((state) => state.campaign);
  const { id } = useParams();
  const [selectedTotal, setSelectedTotal] = useState("");
  const navigate = useNavigate();
  const { nominal } = useSelector((state) => state.pembayaran);

  function hapusTitik(nominal) {
    let nominalStr = nominal.toString();
    let nominalTanpaTitik = nominalStr.replace(/\./g, "");
    return nominalTanpaTitik;
  }

  dispatch(setNominal(hapusTitik(selectedTotal)));
  useEffect(() => {
    if (id) {
      dispatch(getDetailCampaign(id));
    }
  }, [id, dispatch]);
  const formatNumber = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleInputChange = (e) => {
    let inputValue = e.target.value.replace(/[^\d]/g, ""); // Menghapus karakter non-angka
    // Menambahkan titik setiap tiga digit dari belakang
    inputValue = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    setSelectedTotal(formatNumber(inputValue));
  };

  const handleClick = () => {
    if (
      nominal === "" ||
      parseFloat(nominal) <= 0 ||
      parseFloat(nominal) < 10000
    ) {
      toast.error("Masukkan nominal dengan benar (0 < nominal <= 10000)");
    } else {
      navigate(`/lazismu/metodePembayaran/${id}`);
    }
  };
  return (
    <div>
      {/* content */}
      <ToastContainer></ToastContainer>
      <div
        className="font-Inter text-gray-600 flex justify-center"
        key={detailCampaign.id}
      >
        {/* content 1 */}
        <div className="sm:w-4/6 sm:mt-16 mt-8 xl:mt-20 flex flex-col items-center rounded-lg">
          <div className="md:p-5 lg:p-2 w-5/6 rounded-3xl lg:rounded-2xl xl:rounded-xl gap-4 lg:gap-8 ring-black bg-white ring-2 drop-shadow-lg ring-gray-300/20 md:flex justify-between">
            <div className="md:w-1/2">
              <img
                src={detailCampaign.campaignImage}
                className="md:rounded-xl rounded-t-3xl xl:rounded-xl w-full"
                alt=""
              />
            </div>
            <div className="md:w-1/2 p-5 md:p-0">
              <p className="font-bold lg:text-3xl md:text-2xl text-2xl">
                Anda akan berdonasi untuk campaign{" "}
              </p>
              <p className="xl:text-xl lg:text-xl md:text-lg text-base mt-3 lg:mt-3">
                {detailCampaign.campaignName}
              </p>
            </div>
          </div>
          {/* colom */}
          <div className="w-5/6 mt-5">
            <p className="font-bold text-xl">
              Nominal Zakat, Infak, Atau Wakaf
            </p>
            <p>Nominal Zakat, Infak, Atau Wakaf Anda Sebesar Rp </p>
          </div>
          {/* harga */}
          <div className="w-5/6 gap-2 grid grid-cols-2 md:gap-6 my-3">
            {dataPembayaran.map((item) => (
              <button
                key={item.id}
                className={`bg-white ring-2 ring-gray-300/40 drop-shadow-lg w-full p-2 rounded-sm active:translate-y-[-5px] duration-300 ${
                  selectedTotal === item.total ? "bg-primary" : ""
                }`}
                onClick={() => setSelectedTotal(item.total)}
              >
                Rp {item.total}
              </button>
            ))}
          </div>
          {/*  */}
          <div className="w-5/6">
            <p className="text-xl lg:text-2xl mt-5 font-bold">Jumlah</p>
          </div>
          {/*  */}
          <div className="w-5/6">
            <div className="w-full ring-gray-400 ring-2 mt-3 rounded-lg flex items-center">
              <p className="text-xl rounded-l-lg p-2 ring-gray-400 ring-2">
                Rp
              </p>
              <input
                type="text"
                placeholder="0"
                className="w-full focus:outline-none text-xl m-2 "
                value={selectedTotal}
                onChange={handleInputChange}
              />
            </div>
          </div>
          {/*  */}
          <div className="w-5/6 mt-2">
            <p className="text-green-500 font-semibold">Noted :</p>
            <p>Jumlah harus lebih besar dari Rp 10.000,-</p>
          </div>
          {/*  */}
          <div className="w-5/6 mt-5 mb-20">
            <button
              onClick={handleClick}
              className="w-full bg-primary font-bold text-lg rounded-lg shadow shadow-lg  text-white p-2 active:translate-y-[-5px] duration-300"
            >
              Lanjut Pembayaran
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
