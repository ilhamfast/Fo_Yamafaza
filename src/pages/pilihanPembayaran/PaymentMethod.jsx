import { useState } from "react";
import qris from "../../assets/qris.svg";

const paymentOptions = [
  {
    value: "qris",
    label: "Pembayaran QR",
    description: "Bayar dengan aplikasi pembayaran pilihan Anda",
    img: qris,
  },
  {
    value: "bri",
    label: "VA Number BRI",
    description: "Transfer ke nomor virtual account BRI Anda",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/BRI_2020.svg/2560px-BRI_2020.svg.png",
  },
  {
    value: "bca",
    label: "VA Number BCA",
    description: "Transfer ke nomor virtual account BCA Anda",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png  ",
  },
  {
    value: "mandiri",
    label: "VA Number Mandiri",
    description: "Transfer ke nomor virtual account Mandiri Anda",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/2560px-Bank_Mandiri_logo_2016.svg.png",
  },
  {
    value: "bni",
    label: "VA Number BNI",
    description: "Transfer ke nomor virtual account BNI Anda",
    img: "https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/1280px-BNI_logo.svg.png",
  },
  {
    value: "bsi",
    label: "VA Number BSI",
    description: "Transfer ke nomor virtual account BSI Anda",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bank_Syariah_Indonesia.svg/2560px-Bank_Syariah_Indonesia.svg.png",
  },
];

const PaymentMethodsDropdown2 = () => {
  const [selectedPayment, setSelectedPayment] = useState("");

  const handleChange = (event) => {
    setSelectedPayment(event.target.value);
  };

  return (
    <div>
      <div className="mb-2 sm:mb-4">
        <p className="text-lg font-bold">Pilih Metode Pembayaran</p>
      </div>
      <div className="relative w-full mb-6">
        <select
          value={selectedPayment}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2 focus:border-primary"
        >
          <option value="" disabled>
            Pilih Metode Pembayaran
          </option>
          {paymentOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="mt-4">
          {paymentOptions.map(
            (option) =>
              selectedPayment === option.value && (
                <div
                  key={option.value}
                  className="flex gap-5 border border-gray-300 rounded-lg p-1"
                >
                  <img src={option.img} className="w-14" alt={option.label} />
                  <div>
                    <p className="font-bold text-lg">{option.label}</p>
                    <p className="text-sm">{option.description}</p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodsDropdown2;
