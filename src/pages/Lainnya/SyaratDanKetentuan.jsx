import logo from "../../assets/logo.png";
import Footer from "../../components/Footer";

export default function SyaratDanKetentuan() {
  return (
    <div>
      <div className="font-Inter px-4 md:px-20 py-14">
        <div className="text-center mb-8">
          <h1 className="flex justify-center gap-2 font-black text-gray-600 text-2xl items-end">
            SYARAT DAN KETENTUAN
            <p>
              LAZIS<span className="text-primary">MU</span>
            </p>
            <img className="h-10 w-10" src={logo} alt="Logo" />
          </h1>
        </div>
        <div className="mb-8">
          <ol className="list-decimal list-inside text-gray-700 text-justify space-y-4">
            <li>
              Pengguna situs adalah pengunjung web lazismu.org yang dengan
              sengaja atau melalui channel lainnya masuk ke lazismu.org.
            </li>
            <li>
              Pengguna situs dapat mendaftar sebagai donatur baik untuk
              keperluan membayar ZIS atau hanya untuk mendaftar saja.
            </li>
            <li>
              Penguna situs dilarang memasukkan data yang bukan miliknya atau
              data milik orang lain tanpa seijin pemilik data tersebut.
            </li>
            <li>
              Semua data yang masuk ke Lazismu tidak akan dikonfirmasi ulang
              kepada pengisi data, maka dari itu pastikan data yang anda
              masukkan sudah benar sesuai point no. 2.
            </li>
            <li>
              Semua data pengguna situs yang dimasukkan pada saat mendaftar atau
              pada saat melakukan langkah pembayaran ZIS menjadi milik Lazismu
              dan akan digunakan untuk kepentingan Lazismu.
            </li>
            <li>
              Pengguna situs yang telah terdaftar mengijinkan kepada Lazismu
              untuk melakukan komunikasi melalui saluran komunikasi yang ada.
            </li>
            <li>
              Pengguna situs yang melakukan pembayaran ZIS melalui situs lazismu
              akan menerima konfirmasi secara otomatis melalui SMS dan email
              yang telah di daftarkan.
            </li>
            <li>
              Pengguna situs yang melakukan pembayaran ZIS melalui Lazismu, jika
              menginginkan, dapat meminta kuitansi pembayaran dalam bentuk hard
              copy melalui saluran layanan atau chat by web.
            </li>
            <li>
              Kuitansi Zakat Lazismu sebagai bukti pembayaran yang sah dapat
              digunakan sebagai pengurang Penghasilan Kena Pajak (PKP).
            </li>
            <li>
              Pembayaran ZIS melalui situs akan mengikuti ketentuan biaya-biaya
              yang dikenakan, sesuai proses transaksi melalui payment gateway
              yang ada.
            </li>
            <li>
              Pembayaran ZIS akan di salurkan melalui program-program yang telah
              di rencanakan oleh Lazismu kecuali pengguna menentukan sendiri
              program yang akan didanainya melalui pilihan pada saat proses
              transaksi.
            </li>
            <li>
              Lazismu berhak mengubah syarat dan ketentuan ini jika dianggap
              perlu dan akan menggantinya langsung melalui halaman ini.
            </li>
            <li>
              Lazismu tidak menerima segala bentuk dana yang bersumber dari
              kejahatan. UU RI No. 8 Tahun 2010 Tentang Pencegahan dan
              Pemberantasan Tindak Pidana Pencucian Uang.
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
}
