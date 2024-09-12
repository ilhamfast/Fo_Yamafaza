import { Button } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import TodayDate from "../../components/TodayDate";
import qris from "../../assets/qris.svg";
import { useEffect, useState } from "react";
import { getDetailCampaign } from "../../redux/action/campaignAction";
import { Link, useParams } from "react-router-dom";
import CountdownTimer from "../../components/CountdownTimer";
import { RiBillFill } from "react-icons/ri";
import { MdTimer } from "react-icons/md";
import { FaRegCopy, FaCheck } from "react-icons/fa";
import {
  checkStatusQR,
  getQR,
  statusPembayaran,
} from "../../redux/action/transactionAction";
import { FaCircleCheck } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";
import QRCode from "qrcode.react";

export default function Payment() {
  const { nominal } = useSelector((state) => state.pembayaran);
  const { methode } = useSelector((state) => state.pembayaran);
  const { kategori } = useSelector((state) => state.pembayaran);
  const { noVa } = useSelector((state) => state.pembayaran);
  const { qr } = useSelector((state) => state.pembayaran);
  const { type } = useSelector((state) => state.pembayaran);
  const { statusBilling } = useSelector((state) => state.pembayaran);
  const { billingId } = useSelector((state) => state.pembayaran);
  const { timeId } = useSelector((state) => state.pembayaran);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { detailCampaign } = useSelector((state) => state.campaign);
  const [copySuccess, setCopySuccess] = useState("");
  const [status, setStatus] = useState(false);
  const [timerEnded, setTimerEnded] = useState(false);
  const [targetDate, setTargetDate] = useState(null);

  const formatNumber = (value) => {
    const newValue = (parseInt(value, 10) + 3000).toString();
    return newValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  useEffect(() => {
    if (id !== "zakat" && id !== "wakaf" && id !== "infak") {
      dispatch(getDetailCampaign(id));
    }
    if (type == "QRIS") {
      dispatch(getQR(timeId));
      dispatch(checkStatusQR(timeId));
    } else {
      dispatch(statusPembayaran(billingId));
    }
    // Set the target date only once when the component mounts
    if (!targetDate) {
      const newTargetDate = new Date();
      newTargetDate.setHours(newTargetDate.getHours() + 1);
      setTargetDate(newTargetDate);
    }
  }, [dispatch, id, billingId, type, targetDate, timeId]);

  const firstNominal = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${noVa.vaNumber}`).then(() => {
      setCopySuccess("Nomor virtual account berhasil disalin!");
      setTimeout(() => setCopySuccess(""), 2000);
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center pt-5 font-Inter">
      <div className="sm:max-w-xl w-full bg-white shadow-lg p-4 sm:p-8 rounded-lg">
        {status == false && (
          <div className="flex justify-between items-center">
            <div className="w-full">
              <div className="text-sm relative z-10 flex items-center text-white rounded-tr-full bg-primary font-semibold pr-4 p-1 w-52">
                <div className="absolute z-0 rounded-tr-full bg-primary/50 font-semibold h-6 top-[-1vh] w-[102%] left-0"></div>
                <p className="z-10">Form Pembayaran Online</p>
              </div>
              <p className="text-xs font-bold">metode Transaksi: {type}</p>
            </div>
            {methode === "qris" ? (
              <img src={qris} className="w-16" alt="QRIS" />
            ) : (
              <img
                src={
                  "https://static.vecteezy.com/system/resources/previews/026/702/784/non_2x/illustration-of-virtual-account-icon-in-dark-color-and-white-background-vector.jpg"
                }
                className="w-20"
                alt="VA"
              />
            )}
          </div>
        )}
        {status == true && (
          <>
            <h1 className="text-center text-2xl font-bold text-gray-600 mb-4">
              STATUS PEMBAYARAN
            </h1>
          </>
        )}
        {type == "VA NUMBER" && (
          <div className="font-Inter bg-green-500 p-4 rounded text-white w-full flex flex-col items-center mb-4">
            {statusBilling?.success == "false" ? (
              <>
                <p>Batas Waktu Pembayaran</p>
                <div className="flex items-center gap-2 text-lg">
                  <MdTimer />
                  <CountdownTimer
                    targetDate={targetDate}
                    timerEnded={timerEnded}
                    setTimerEnded={setTimerEnded}
                  />
                </div>
              </>
            ) : (
              <>
                <FaCircleCheck className="w-10 h-10 mb-2" />
                <p>Pembayaran Berhasil</p>
                <div className="flex items-center gap-2 text-lg">
                  TERIMAKASIH SUDAH BERDONASI
                </div>
              </>
            )}
          </div>
        )}
        {type === "QRIS" && (
          <div className="font-Inter bg-green-500 p-4 rounded text-white w-full flex flex-col items-center mb-4">
            {statusBilling?.responseCode == "13" ? (
              <>
                <p>Batas Waktu Pembayaran</p>
                <div className="flex items-center gap-2 text-lg">
                  <MdTimer />
                  <CountdownTimer
                    targetDate={targetDate}
                    timerEnded={timerEnded}
                    setTimerEnded={setTimerEnded}
                  />
                </div>
              </>
            ) : (
              <>
                <FaCircleCheck className="w-10 h-10 mb-2" />
                <p>Pembayaran Berhasil</p>
                <div className="flex items-center gap-2 text-lg">
                  TERIMAKASIH SUDAH BERDONASI
                </div>
              </>
            )}
          </div>
        )}
        <div className="space-y-2">
          {status == true && (
            <>
              <div className="border p-2 flex justify-between">
                <div className="w-2/6 space-y-2">
                  <p>Tanggal</p>
                  <p>Metode Pembayaran</p>
                  <p>ID donasi</p>
                  <p>Status</p>
                </div>
                {type == "VA NUMBER" && (
                  <div className="w-3/6 font-Inter text-gray-600 space-y-2">
                    <h1>
                      <TodayDate />
                    </h1>
                    <h1>{type}</h1>
                    <h1>{billingId}</h1>
                    {statusBilling.success == "false" && timerEnded == false ? (
                      <h1 className="border font-bold p-1 border-2 w-3/6 text-center rounded">
                        PENDING
                      </h1>
                    ) : statusBilling.success == "true" &&
                      timerEnded == false ? (
                      <h1 className="border font-bold p-1 border-green-500 text-green-500 border-2 w-3/6 text-center rounded">
                        BERHASIL
                      </h1>
                    ) : (
                      <h1 className="border font-bold p-1 border-red-500 text-red-500 border-2 w-3/6 text-center rounded">
                        GAGAL
                      </h1>
                    )}
                  </div>
                )}
                {type == "QRIS" && (
                  <div className="w-3/6 font-Inter text-gray-600 space-y-2">
                    <h1>
                      <TodayDate />
                    </h1>
                    <h1>{type}</h1>
                    <h1>{billingId}</h1>
                    {statusBilling?.responseCode == "13" &&
                    timerEnded == false ? (
                      <h1 className="border font-bold p-1 border-2 w-3/6 text-center rounded">
                        PENDING
                      </h1>
                    ) : (
                      <h1 className="border font-bold p-1 border-green-500 text-green-500 border-2 w-3/6 text-center rounded">
                        BERHASIL
                      </h1>
                    )}
                  </div>
                )}
              </div>
            </>
          )}
          {status == false && timerEnded == false && (
            <div className="flex justify-between gap-2">
              <div className=" shadow-md rounded-md p-2 w-full">
                <p className="font-semibold text-sm">Total Harga</p>
                <h1 className="font-Bold font-bold text-xl">
                  Rp.{formatNumber(nominal)}
                </h1>
              </div>
              <div className="w-full shadow-md rounded-md p-2 text-center flex flex-col justify-between">
                <p className="font-semibold underline underline-offset-8 text-sm">
                  Tanggal
                </p>
                <h1 className="font-Bold font-bold text-lg">
                  <TodayDate />
                </h1>
              </div>
            </div>
          )}
          {status == false && timerEnded == false && (
            <>
              <div className="flex items-end gap-1 text-sm font-semibold text-primary">
                <div className="h-full w-6">
                  <RiBillFill color="green" className="w-full h-full" />
                </div>
                <p className="text-green">Rincian biaya</p>
              </div>
              <div className="mt-2 text-sm font-semibold text-gray-800">
                <div className="flex justify-between">
                  <p>Donasi :</p>
                  <p className="text-green-600">Rp.{firstNominal(nominal)}</p>
                </div>
                <div className="flex justify-between">
                  <p>Admin :</p>
                  <p className="text-gray-600">Rp.3.000</p>
                </div>
              </div>
            </>
          )}
          {status == true && (
            <div className="flex items-end gap-1 text-sm font-semibold text-primary">
              <div className="h-full w-6">
                <RiBillFill color="green" className="w-full h-full" />
              </div>
              <p className="text-green text-lg">kategori Pembayaran</p>
            </div>
          )}
          {status == true &&
            id !== "zakat" &&
            id !== "infak" &&
            id !== "wakaf" && (
              <div className="flex justify-between gap-4 items-start">
                <img
                  src={detailCampaign.campaignImage}
                  className="w-1/6 h-40 w-full object-cover rounded-lg mt-4"
                  alt={detailCampaign.campaignName}
                />
                <p className="w-5/6 font-bold mt-2">
                  {detailCampaign.campaignName}
                </p>
              </div>
            )}
          {status == true && id === "zakat" && (
            <div>
              <p className="text-base">Pembayaran {id}</p>
              <p className="text-sm">Kategori: {kategori.replace(/_/g, " ")}</p>
            </div>
          )}
          {id === "infak" && (
            <div>
              <p className="text-base">Pembayaran {id}</p>
              <p className="text-sm">Kategori: {kategori.replace(/_/g, " ")}</p>
            </div>
          )}
          {id === "wakaf" && (
            <div>
              <p className="text-base">Pembayaran {id}</p>
              <p className="text-sm">Kategori: {kategori.replace(/_/g, " ")}</p>
            </div>
          )}
          {methode === "qris" &&
          statusBilling?.responseCode === "13" &&
          timerEnded == false ? (
            <>
              {status == false && timerEnded == true && (
                <div className="text-center flex flex-col items-center space-y-2">
                  <IoCloseCircle className="w-20 h-20" color="red" />
                  <p className="text-center text-red-500 font-bold text-3xl mb-4">
                    Proses Transaksi Gagal
                  </p>
                </div>
              )}
              {status === false && (
                <div className="flex flex-col items-center">
                  <div className="w-full flex flex-col items-center sm:w-2/4 border rounded p-4 mb-4 bg-white shadow-md">
                    <p className="text-center font-bold text-lg mb-4">
                      Scan disini
                    </p>
                    <div>
                      <QRCode
                        value={qr?.rawQrData}
                        size={200}
                        level={"H"}
                        // includeMargin={true}
                      />
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              {status == false && timerEnded == false && (
                <p className="text-center text-gray-600 font-bold text-lg mb-4">
                  Silahkan transfer ke :
                </p>
              )}
              {status == false && timerEnded == true && (
                <div className="text-center flex flex-col items-center space-y-2">
                  <IoCloseCircle className="w-20 h-20" color="red" />
                  <p className="text-center text-red-500 font-bold text-3xl mb-4">
                    Proses Transaksi Gagal
                  </p>
                </div>
              )}
              {status == false &&
                timerEnded == false &&
                statusBilling.success == "false" && (
                  <>
                    <div className="bg-gray-100 flex justify-between px-4 py-2 items-center gap-2">
                      <div className="rounded-md font-mono text-lg">
                        <div>
                          <p>Nomor Virtual Account</p>
                          <p className="text-2xl font-black text-gray-600">
                            {id == "zakat" ? (
                              <>{noVa}</>
                            ) : (
                              <>{noVa}</>
                            )}
                          </p>
                        </div>
                      </div>
                      <button
                        className="bg-green-500 active:scale-105 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={copyToClipboard}
                      >
                        <FaRegCopy />
                      </button>
                    </div>
                    <ol className="list-decimal list-inside bg-gray-100 p-4 rounded-lg shadow space-y-2">
                      <p className="font-semibold text-gray-600">
                        Langkah-Langkah :
                      </p>
                      <li className="pl-2">
                        Lakukan pembayaran melalui Transfer Antar Bank.
                      </li>
                      <li className="pl-2">
                        {`Pilih bank tujuan "BANK MUAMALAT INDONESIA".`}
                      </li>
                      <li className="pl-2">
                        Masukkan Nomor rekening berupa Nomor Virtual Account
                        yang muncul di atas.
                      </li>
                      <li className="pl-2">
                        Masukkan Nominal sesuai jumlah pembayaran yang harus
                        dilakukan.
                      </li>
                      <li className="pl-2">
                        Klik Kirim atau Lanjutkan Pembayaran.
                      </li>
                      <li className="pl-2">Pembayaran selesai.</li>
                    </ol>
                  </>
                )}
              {copySuccess && (
                <div className="flex items-center gap-2 fixed top-16 left-1/2 transform -translate-x-1/2 bg-gray-100 text-center text-gray-500 py-2 px-4 rounded-md shadow-md z-50">
                  {copySuccess} <FaCheck color="green" />
                </div>
              )}
            </>
          )}
          {status == false && (
            <button
              onClick={() => {
                setStatus(true);
                if (type == "QRIS") {
                  dispatch(checkStatusQR(timeId));
                } else {
                  dispatch(statusPembayaran(billingId));
                }
              }}
              color="green"
              className="w-full rounded p-1 font-bold mt-2 bg-white-400 text-primary border-primary border-2 hover:scale-105 duration-300 active:scale-105"
            >
              Cek status pembayaran
            </button>
          )}
          {status == true && (
            <div className="py-4">
              <button
                onClick={() => {
                  setStatus(false);
                  if (type == "QRIS") {
                    dispatch(checkStatusQR(timeId));
                  } else {
                    dispatch(statusPembayaran(billingId));
                  }
                }}
                color="green"
                className="w-full rounded p-1 font-bold bg-white-400 text-primary border-primary border-2 hover:scale-105 duration-300 active:scale-105"
              >
                Kembali ke halaman pembayaran
              </button>
            </div>
          )}
        </div>

        {status === false && (
          <div className=" mt-5 sm:mt-10">
            <Link to={`/lazismu/detailDonasi/detailDonasi`}>
              <Button
                color="green"
                className="w-full font-bold mt-2 bg-green-400 text-white hover:bg-green-500 active:bg-green-500 active:scale-105"
              >
                Cek Donasi Lainnya
              </Button>
            </Link>
            <Link to={`/lazismu/metodePembayaran/${id}`}>
              <Button className="font-bold w-full mt-2" color="gray">
                Kembali ke halaman sebelumnya
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
