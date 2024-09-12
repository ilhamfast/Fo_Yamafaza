import qris from "../assets/qris.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { pembayaran } from "../redux/action/transactionAction";

export default function MetodePembayaran() {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [desk, setDesk] = useState("");
  const { id } = useParams();
  const { methode } = useSelector((state) => state.pembayaran);
  const { nominal } = useSelector((state) => state.pembayaran);
  const { kategori } = useSelector((state) => state.pembayaran);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAnonymousChange = () => {
    setIsAnonymous(!isAnonymous);
  };
  useEffect(() => {
    if (isAnonymous == true) {
      setName("Hamba Allah");
    } else {
      setName(user?.username || "");
    }
    setPhone(user?.phoneNumber || "");
  }, [user]);
  const formatNumber = (value) => {
    const newValue = (parseInt(value, 10) + 3000).toString();
    return newValue;
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center pt-5 font-Inter">
      <div className="sm:max-w-xl w-full bg-white shadow-lg p-4 sm:p-8">
        <div className="text-center">
          <h1 className="text-2xl sm:text-4xl font-bold text-primary mb-4 sm:mb-6">
            Form Pembayaran
          </h1>
        </div>
        <div className="mb-2 sm:mb-2">
          <p className="text-lg font-bold">Pilih Metode Pembayaran</p>
        </div>
        {methode == "qris" || methode == "" ? (
          <Link
            to={`/lazismu/pilihPembayaran/${id}`}
            className="active:scale-105 duration-300 hover:scale-105 flex gap-5 w-full border border-gray-300 rounded-lg p-1 mb-6 hover:border-primary focus-within:border-primary"
          >
            <img src={qris} className="w-14" alt="QR Code" />
            <div>
              <p className="font-bold text-lg">Pembayaran QR</p>
              <p className="text-sm">
                Bayar dengan aplikasi pembayaran pilihan Anda
              </p>
            </div>
          </Link>
        ) : (
          <>
            <Link
              to={`/lazismu/pilihPembayaran/${id}`}
              className="items-center active:scale-105 duration-300 hover:scale-105 flex gap-5 w-full border border-gray-300 rounded-lg p-1 mb-4 hover:border-primary focus-within:border-primary"
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
              <div>
                <p className="font-bold text-lg">Virtual Account</p>
                <p className="text-sm">
                  Transfer ke nomor virtual account Bank Anda
                </p>
              </div>
            </Link>
          </>
        )}
        <div className="mb-2 sm:mb-4">
          <p className="text-lg font-bold">Lengkapi Form Dibawah</p>
        </div>
        <div className="bg-white border border-gray-300 rounded-lg p-6">
          <div className="space-y-4">
            {isAnonymous == false && (
              <div>
                <label className="block text-lg font-medium mb-2">Nama</label>
                <input
                  className="w-full border border-gray-300 rounded-lg p-2 text-lg outline-green-200 "
                  placeholder="Nama"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}
            {isAnonymous == true && (
              <div>
                <label className="block text-lg font-medium mb-2">Nama </label>
                <p className="text-gray-600 font-medium p-2 rounded-lg border border-gray-300 text-lg">
                  Hamba Allah
                </p>
              </div>
            )}
            <div>
              <label className="block text-lg font-medium mb-2">
                Nomor Handphone
              </label>
              <input
                className="w-full border border-gray-300 rounded-lg p-2 text-lg outline-green-200 "
                placeholder="Nomor Handphone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={isAnonymous}
                onChange={handleAnonymousChange}
                className="h-4 w-4 rounded-md text-primary"
              />
              <label className="ml-2 text-base">
                Sembunyikan nama saya (donasi sebagai hamba Allah)
              </label>
            </div>
            <div>
              <label className="block text-lg font-medium mb-2">
                Pesan Anda
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-lg p-2 text-lg outline-green-200"
                placeholder="Pesan Anda..."
                value={desk}
                onChange={(e) => setDesk(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            if (methode == "va") {
              dispatch(
                pembayaran(
                  name,
                  phone,
                  desk,
                  formatNumber(nominal),
                  id,
                  kategori,
                  navigate
                )
              );
            } else {
              console.log("hello");
              dispatch(
                pembayaran(
                  name,
                  phone,
                  desk,
                  formatNumber(nominal),
                  id,
                  kategori,
                  navigate
                )
              );
            }
          }}
          className="mb-20 sm:mb-0 w-full mt-6 bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 focus:outline-none focus:ring focus:border-primary"
        >
          Lanjutkan Pembayaran
        </button>
      </div>
    </div>
  );
}
