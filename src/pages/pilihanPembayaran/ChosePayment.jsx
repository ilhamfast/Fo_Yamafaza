import { TbArrowBack } from "react-icons/tb";
import { Link, useNavigate, useParams } from "react-router-dom";
import qris from "../../assets/qris.svg";
import { setMethode, setType } from "../../redux/reducers/pembayaranReducer";
import { useDispatch } from "react-redux";

export default function ChosePayment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const paymentOptions = [
  //   {
  //     value: "bri",
  //     label: "VA Number BRI",
  //     description: "Transfer ke nomor virtual account BRI Anda",
  //     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/BRI_2020.svg/2560px-BRI_2020.svg.png",
  //   },
  //   {
  //     value: "bca",
  //     label: "VA Number BCA",
  //     description: "Transfer ke nomor virtual account BCA Anda",
  //     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png  ",
  //   },
  //   {
  //     value: "mandiri",
  //     label: "VA Number Mandiri",
  //     description: "Transfer ke nomor virtual account Mandiri Anda",
  //     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/2560px-Bank_Mandiri_logo_2016.svg.png",
  //   },
  //   {
  //     value: "bni",
  //     label: "VA Number BNI",
  //     description: "Transfer ke nomor virtual account BNI Anda",
  //     img: "https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/1280px-BNI_logo.svg.png",
  //   },
  //   {
  //     value: "bsi",
  //     label: "VA Number BSI",
  //     description: "Transfer ke nomor virtual account BSI Anda",
  //     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bank_Syariah_Indonesia.svg/2560px-Bank_Syariah_Indonesia.svg.png",
  //   },
  // ];
  const { id } = useParams();
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center pt-5 font-Inter">
      <div className="sm:max-w-xl w-full bg-white shadow-lg p-4 sm:p-8">
        <Link
          to={`/lazismu/metodePembayaran/${id}`}
          className="flex items-center gap-1 font-semibold text-gray-500 hover:translate-y-[-5px] duration-200"
        >
          Kembali
          <div>
            <TbArrowBack className="w-6 h-6" />
          </div>
        </Link>
        <div className="mb-2 sm:mb-2 mt-2">
          <p className="text-lg font-bold">Pembayaran QR</p>
        </div>
        <button
          onClick={() => {
            navigate(`/lazismu/metodePembayaran/${id}`);
            dispatch(setType("QRIS"));
            dispatch(setMethode("qris"));
          }}
          className="duration-300 active:scale-105 hover:scale-105 flex gap-5 w-full border border-gray-300 rounded-lg p-1 mb-6 hover:border-primary focus-within:border-primary"
        >
          <img src={qris} className="w-14" alt="QR Code" />
          <div className="text-left">
            <p className="font-bold text-lg">Pembayaran QR</p>
            <p className="text-sm">
              Bayar dengan aplikasi pembayaran pilihan Anda
            </p>
          </div>
        </button>
        <div className="mb-2 sm:mb-2">
          <p className="text-lg font-bold">Pembayaran VA Number</p>
        </div>
        <div className="mt-2 space-y-4">
          <button
            onClick={() => {
              dispatch(setMethode("va"));
              dispatch(setType("VA NUMBER"));
              navigate(`/lazismu/metodePembayaran/${id}`);
            }}
            className="duration-300 items-center active:scale-105 hover:scale-105 flex gap-5 w-full border border-gray-300 rounded-lg p-1 hover:border-primary focus-within:border-primary"
          >
            <div>
              <img
                src={
                  "https://static.vecteezy.com/system/resources/previews/026/702/784/non_2x/illustration-of-virtual-account-icon-in-dark-color-and-white-background-vector.jpg"
                }
                className="w-14"
                alt={"VA"}
              />
            </div>
            <div className="text-left">
              <p className="font-bold text-lg">Virtual Account</p>
              <p className="text-sm">
                Transfer ke nomor virtual account Bank Anda
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
