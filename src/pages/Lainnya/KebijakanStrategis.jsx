import logo from "../../assets/logo.png";
import Footer from "../../components/Footer";
export default function KebijakanStrategis() {
  return (
    <div>
      <div className="font-Inter px-4 md:px-20 py-14">
        <div className="text-center mb-8">
          <h1 className="flex justify-center gap-2 font-black text-gray-600 text-2xl items-end">
            KEBIJAKAN Strategis
            <p>
              LAZIS<span className="text-primary">MU</span>
            </p>
            <img className="h-10 w-10" src={logo} alt="" />
          </h1>
          ;
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Misi Pendayagunaan
          </h2>
          <p className="text-gray-700 mb-6 text-justify">
            Terciptanya kehidupan sosial ekonomi umat yang berkualitas sebagai
            benteng atas problem kemiskinan, keterbelakangan, dan kebodohan pada
            masyarakat melalui berbagai program yang dikembangkan Muhammadiyah.
          </p>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Kebijakan Strategis Pendayagunaan
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-8 text-justify">
            <li>
              Prioritas penerima manfaat adalah kelompok fakir, miskin dan
              fisabilillah.
            </li>
            <li>
              Pendistribusian ZIS dilakukan secara terprogram (terencana dan
              terukur) sesuai core gerakan Muhammadiyah, yakni: pendidikan,
              ekonomi, dan sosial-dakwah.
            </li>
            <li>
              Melakukan sinergi dengan majelis, lembaga, ortom dan amal-usaha
              Muhammadiyah dalam merealisasikan program.
            </li>
            <li>
              Melakukan sinergi dengan institusi dan komunitas diluar
              Muhammadiyah untuk memperluas domain dakwah sekaligus meningkatkan
              awareness public kepada persyarikatan.
            </li>
            <li>
              Meminimalisir bantuan karitas kecuali bersifat darurat seperti di
              kawasan timur Indonesia, daerah yang terpapar bencana dan
              upaya-upaya penyelamatan.
            </li>
            <li>
              Intermediasi bagi setiap usaha yang menciptakan kondisi dan
              faktor-faktor pendukung bagi terwujudnya masyarakat Islam yang
              sebenar-benarnya Visi Muhammadiyah 2025.
            </li>
            <li>
              Memobilisasi pelembagaan gerakan ZIS di seluruh struktur
              Muhammadiyah dan amal usaha.
            </li>
          </ol>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Sinergi Pendayagunaan
          </h2>
          <p className="text-gray-700 mb-6 text-justify">
            Berpijak pada posisi LAZISMU sebagai lembaga intermediate, maka
            dalam penyaluran dan pendayagunaan dana ziswaf bersinergi dengan
            berbagai lembaga baik di internal Muhammadiyah maupun lembaga diluar
            Muhammadiyah. Seperti program pendayagunaan bidang pertanian,
            lazismu bersinergi dengan MPM (Majelis Pemberdayaan Masyarakat) PP
            Muhammadiyah, program kemanusiaan bersinergi dengan LPB PP
            Muhammadiyah, masalah sosial bersinergi dengan MPS Muhammadiyah,
            bidang ekonomi dengan MEK Muhammadiyah dan untuk pemberdayaan kaum
            perempuan lazismu bersinergi dengan PP ‘Aisyiyah. Sedang sinergi
            dengan lembaga di luar Muhammadiyah, LAZISMU telah menggandeng
            berbagai lembaga dan komunitas dalam menyalurkan dan mendayagunakan
            dana ziswaf seperti lembaga IWAPI, komunitas WIRAMUDA, berbagai
            komunitas hobby dan profesi dan sebagainya. Tujuan dari sinergi
            adalah agar pendayagunaan memberi manfaat yang maksimal kepada
            masyarakat karena dikelola oleh lembaga pengelola yang expert serta
            menjangkau lokasi sasaran program yang lebih luas.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
