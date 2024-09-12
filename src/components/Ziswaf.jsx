import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoryZakat } from "../redux/action/ziswafAction";
import { setKategori, setNominal } from "../redux/reducers/pembayaranReducer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Ziswaf() {
  const [button, setButton] = useState("zakat");
  const [click, setClick] = useState(false);
  const [biaya, setBiaya] = useState("");
  const dispatch = useDispatch();
  const { categoryZakat } = useSelector((state) => state.ziswaf);
  const { kategori } = useSelector((state) => state.pembayaran);
  const { nominal } = useSelector((state) => state.pembayaran);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllCategoryZakat(button));
  }, [dispatch, button]);

  const handleButton = (value) => {
    setButton(value);
    setClick(false);
    dispatch(setKategori(null));
  };
  const handleNominalChange = (e) => {
    let inputValue = e.target.value.replace(/[^\d]/g, ""); // Menghapus karakter non-angka
    // Menambahkan titik setiap tiga digit dari belakang
    inputValue = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    setBiaya(formatNumber(inputValue));
  };
  const formatNumber = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  function hapusTitik(nominal) {
    let nominalStr = nominal.toString();
    let nominalTanpaTitik = nominalStr.replace(/\./g, "");
    return nominalTanpaTitik;
  }
  dispatch(setNominal(hapusTitik(biaya)));

  const handleCategoryChange = (selectedCategory) => {
    if (selectedCategory == null) {
      // dispatch(setKategori(selectedCategory));
    }
    dispatch(setKategori(selectedCategory));
  };
  const handleBayar = () => {
    if (kategori == null || kategori == `kategory ${button}`) {
      toast.error(`Pilih kategori ${button}`);
    } else if (nominal == "") {
      toast.error(`Masukkan nominal ${button}`);
    } else {
      navigate(`/lazismu/metodePembayaran/${button}`);
    }
  };
  const handleClick = () => {
    dispatch(setKategori(categoryZakat[0]?.categoryName));
    setClick(true);
  };
  return (
    <div className="xl:w-2/6 w-full sm:w-4/6 lg:w-5/6 mx-4 top-[40vh] drop-shadow-3xl bg-white p-4 rounded-lg">
      <div className="bg-primary rouded-full w-full flex justify-between px-4 py- font-Inter rounded-lg">
        <button
          onClick={() => handleButton("zakat")}
          className={`text-white font-bold text-base md:text-lg focus:bg-green-600 xl:rounde p-2 hover:bg-green-600 w-2/6 ${
            button == "zakat" ? "bg-green-600" : "bg-transparant"
          }`}
        >
          Zakat
        </button>
        <button
          onClick={() => handleButton("infak")}
          className={`text-white font-bold text-base md:text-lg focus:bg-green-600 xl:rounde p-2 hover:bg-green-600 w-2/6 ${
            button == "infak" ? "bg-green-600" : "bg-transparant"
          }`}
        >
          Infak
        </button>
        <button
          onClick={() => handleButton("wakaf")}
          className={`text-white font-bold text-base md:text-lg focus:bg-green-600 xl:rounde p-2 hover:bg-green-600 w-2/6 ${
            button == "waqaf" ? "bg-green-600" : "bg-transparant"
          }`}
        >
          Wakaf
        </button>
      </div>
      <div className="font-Inter mt-3">
        <p className="font-bold md:text-lg text-base">
          {button == "zakat"
            ? "Yuk Hitung Zakatmu !"
            : button == "infak"
            ? "Ayo Mulai Infak"
            : "Ayo Mulai Waqaf"}
        </p>
       x <div className="flex md:justify-end">
          {click == false && (
            <button
              className="mt-2 md:text-white md:mt-0 p-2 md:p-1 w-full md:w-1/2 sm:p-3 text-sm sm:text-lg bg-white md:bg-primary rounded-md ring-1 outline-none ring-green-500 drop-shadow-lg"
              onClick={handleClick}
            >
              Kategory {button}
            </button>
          )}
          {click == true && (
            <select
              className="mt-2 md:text-white md:mt-0 p-2 md:p-1 w-full md:w-1/2 sm:p-3 text-sm sm:text-lg bg-white md:bg-primary rounded-md ring-1 outline-none ring-green-500 drop-shadow-lg"
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              {categoryZakat.map((item) => (
                <option
                  key={item.id}
                  className="text-[10px] sm:text-base"
                  value={item.categoryName}
                >
                  {item.categoryName.replace(/_/g, " ")}
                </option>
              ))}
            </select>
          )}
        </div>
        <div>
          <p className="text-sm md:text-lg mt-3 lg:w-3/4 text-NEUTRAL04">
            {button == "zakat"
              ? " Ayo masukkan jumlah harta kamu, dan kamu bisa melihat jumlah zakatmu disini !"
              : button == "infak"
              ? "Silakan isi jumlah infakmu. Insya Allah berkah."
              : "Mari wakaf tunai bersama kami!"}
          </p>
        </div>
        <div className="w-full ring-gray-300 shadow ring-1 my-4 xl:my-10 rounded-xl flex items-center">
          <p className="md:text-xl rounded-l-xl p-3 md:p-2 ring-gray-300 ring-1">
            Rp.
          </p>
          <input
            type="text"
            className="w-full focus:outline-none text-xl m-2 "
            value={biaya}
            onChange={handleNominalChange}
          />
        </div>
        <div className="flex md:justify-end">
          <button
            onClick={handleBayar}
            className="w-full md:w-auto rounded-md bg-primary text-white font-bold text-lg px-6 py-2 active:scale-105 md:hover:scale-105 transition duration-150 ease-in-out items-center"
          >
            Bayar{" "}
            {button == "zakat"
              ? "Zakat"
              : button == "infak"
              ? "Infak"
              : "Waqaf"}
          </button>
        </div>
      </div>
    </div>
  );
}
