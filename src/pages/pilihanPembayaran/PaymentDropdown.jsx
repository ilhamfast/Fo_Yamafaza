import qris from "../../assets/qris.svg";

const PaymentMethodsDropdown = () => (
  <div>
    <div className="mb-2 sm:mb-4">
      <p className="text-lg font-bold">Pilih Metode Pembayaran</p>
    </div>
    <div className="w-full mb-6">
      <select className="w-full border border-gray-300 rounded-lg p-2 focus:border-primary">
        <option value="" disabled selected hidden>
          Pilih Metode Pembayaran
        </option>
        <option value="qris">
          <div className="flex gap-5">
            <img src={qris} className="w-14" alt="QR Code" />
            <div>
              <p className="font-bold text-lg">Pembayaran QR</p>
              <p className="text-sm">
                Bayar dengan aplikasi pembayaran pilihan Anda
              </p>
            </div>
          </div>
        </option>
        <option value="bri">
          <div className="flex gap-5">
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/BRI_2020.svg/2560px-BRI_2020.svg.png"
              }
              className="w-14"
              alt="Bank BRI"
            />
            <div>
              <p className="font-bold text-lg">VA Number BRI</p>
              <p className="text-sm">
                Transfer ke nomor virtual account BRI Anda
              </p>
            </div>
          </div>
        </option>
        <option value="bca">
          <div className="flex gap-5">
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png"
              }
              className="w-14"
              alt="Bank BCA"
            />
            <div>
              <p className="font-bold text-lg">VA Number BCA</p>
              <p className="text-sm">
                Transfer ke nomor virtual account BCA Anda
              </p>
            </div>
          </div>
        </option>
        <option value="mandiri">
          <div className="flex gap-5">
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/2560px-Bank_Mandiri_logo_2016.svg.png"
              }
              className="w-14"
              alt="Bank Mandiri"
            />
            <div>
              <p className="font-bold text-lg">VA Number Mandiri</p>
              <p className="text-sm">
                Transfer ke nomor virtual account Mandiri Anda
              </p>
            </div>
          </div>
        </option>
        <option value="bni">
          <div className="flex gap-5">
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/1280px-BNI_logo.svg.png"
              }
              className="w-14"
              alt="Bank BNI"
            />
            <div>
              <p className="font-bold text-lg">VA Number BNI</p>
              <p className="text-sm">
                Transfer ke nomor virtual account BNI Anda
              </p>
            </div>
          </div>
        </option>
        <option value="bsi">
          <div className="flex gap-5">
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bank_Syariah_Indonesia.svg/2560px-Bank_Syariah_Indonesia.svg.png"
              }
              className="w-14"
              alt="Bank BSI"
            />
            <div>
              <p className="font-bold text-lg">VA Number BSI</p>
              <p className="text-sm">
                Transfer ke nomor virtual account BSI Anda
              </p>
            </div>
          </div>
        </option>
      </select>
    </div>
  </div>
);

export default PaymentMethodsDropdown;
