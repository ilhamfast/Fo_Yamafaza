import logo from "../../assets/logo.png";
import Footer from "../../components/Footer";

export default function KebijakanRefund() {
  return (
    <div>
      <div className="font-Inter px-4 md:px-20 py-14">
        <div className="text-center mb-8">
          <h1 className="flex justify-center gap-2 font-black text-gray-600 text-2xl items-end">
            KEBIJAKAN REFUND
            <p>
              LAZIS<span className="text-primary">MU</span>
            </p>
            <img className="h-10 w-10" src={logo} alt="Logo" />
          </h1>
        </div>
        <div className="mb-8">
          <ol className="list-decimal list-inside text-gray-700 text-justify space-y-4">
            <li>
              Donatur melakukan konfirmasi pembayaran melalui saluran layanan
              melalui nomer WA 0856 1626 222.
            </li>
            <li>
              Donatur wajib mencantumkan bukti pembayaran/transfer bank yang
              asli pada saat melakukan permohonan refund dana.
            </li>
            <li>
              Lazismu berhak meminta dokumen tambahan jika merasa diperlukan.
            </li>
            <li>
              Lazismu akan memproses pengajuan refund dana setelah semua dokumen
              dilengkapi dan sesuai dengan fakta atau catatan rekening koran
              milik Lazismu.
            </li>
            <li>
              Proses pembayaran refund dana akan dilakukan pada hari kerja dan
              memakan waktu sesuai dengan proses transaksi bank.
            </li>
            <li>
              Lazismu berhak menolak pengajuan refund dana jika ditemukan
              indikasi pemalsuan data atau penipuan.
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
}
