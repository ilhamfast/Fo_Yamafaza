import { Button, Modal } from "flowbite-react";
import { setShowModalPayment } from "../redux/reducers/modalReducer";
import { useDispatch, useSelector } from "react-redux";
import TodayDate from "./TodayDate";
import qris from "../assets/qris.svg";
import qr from "../assets/qr.jpg";
import { useEffect, useState } from "react";
import { getDetailCampaign } from "../redux/action/campaignAction";
import { useParams } from "react-router-dom";
import CountdownTimer from "./CountdownTimer";
import { RiBillFill } from "react-icons/ri";

export default function Modalbayar() {
  const { showModalPayment } = useSelector((state) => state.modal);
  const { nominal } = useSelector((state) => state.pembayaran);
  const { kategori } = useSelector((state) => state.pembayaran);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { detailCampaign } = useSelector((state) => state.campaign);
  const formatNumber = (value) => {
    // Konversi nilai dari string ke angka, tambahkan 2500, lalu kembali konversi ke string
    const newValue = (parseInt(value, 10) + 2000).toString();
    // Format kembali nilai yang sudah ditambahkan 2500
    return newValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  const [bayar, setBayar] = useState(false);
  useEffect(() => {
    if (id != "zakat" && id != "wakaf" && id != "infak") {
      dispatch(getDetailCampaign(id));
    }
    
  }, [dispatch, id]);

  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 3);
  const firstNominal = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <Modal
      show={showModalPayment}
      // onClose={() => dispatch(setShowModalPayment(false))}
      hideCloseButton={true}
      className="font-Inter "
      size={"sm"}
    >
      <Modal.Body style={{ backgroundColor: "#ffffff" }} className="rounded">
        <div className="mb-4 flex justify-between items-center">
          <div className="w-full">
            <div className="text-sm relative z-10 flex items-center text-white rounded-tr-full bg-primary font-semibold pr-4 p-1 w-52">
              <div className="absolute z-0 rounded-tr-full bg-primary/50 font-semibold h-6 top-[-1vh] w-[102%] left-0"></div>
              <p className="z-10">Form Pembayaran Online</p>
            </div>
            <p className="text-xs font-bold">No.Transaksi: T267360188275</p>
          </div>
          <img src={qris} className="w-16" alt="" />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between gap-2">
            <div className="bg-white shadow-md rounded-md p-2 w-full">
              <p className="font-semibold text-sm">Total Harga</p>
              <h1 className="font-Bold font-bold text-xl">
                Rp.{formatNumber(nominal)}
              </h1>
            </div>
            <div className="w-full bg-white shadow-md rounded-md p-2 text-center flex flex-col justify-between">
              <p className="font-semibold underline underline-offset-8 text-sm">
                Tanggal
              </p>
              <h1 className="font-Bold font-bold text-lg">
                <TodayDate />
              </h1>
            </div>
          </div>
          {bayar == false && (
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
                  <p className="text-gray-600">Rp.2.000</p>
                </div>
              </div>
            </>
          )}

          {id != "zakat" &&
            id != "infak" &&
            id != "wakaf" &&
            bayar == false && (
              <>
                <img
                  src={detailCampaign.campaignImage}
                  className="h-40 w-full object-cover"
                  alt=""
                />
                <p className="font-bold">{detailCampaign.campaignName}</p>
              </>
            )}
          {id == "zakat" && bayar == false && (
            <div>
              <p className="text-base">pembayaran {id}</p>
              <p className="text-sm">kategory : {kategori}</p>
            </div>
          )}
          {bayar == true && (
            <>
              <p className="text-center font-bold text-lg">Scan disini</p>
              <img src={qr} className="w-full h-72" alt="" />
              <CountdownTimer targetDate={targetDate} />
            </>
          )}
        </div>
      </Modal.Body>
      {bayar == false && (
        <Modal.Footer style={{ backgroundColor: "#ffffff" }} className="rounded">
          <Button
            onClick={() => setBayar(true)}
            color={"none"}
            className="w-1/2 bg-green-400 text-white hover:bg-green-500 active:bg-green-500 active:scale-105"
          >
            Lanjut Bayar
          </Button>
          <Button
            className="w-1/2"
            color="gray"
            onClick={() => dispatch(setShowModalPayment(false))}
          >
            Keluar
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
}
