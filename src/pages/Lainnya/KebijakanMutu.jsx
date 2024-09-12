import logo from "../../assets/logo.png";
import Footer from "../../components/Footer";

export default function KebijakanMutu() {
  return (
    <div>
      <div className="font-Inter px-4 md:px-20 py-14">
        <div className="text-center mb-8">
          <h1 className="flex justify-center gap-2 font-black text-gray-600 text-2xl items-end">
            KEBIJAKAN MUTU
            <p>
              LAZIS<span className="text-primary">MU</span>
            </p>
            <img className="h-10 w-10" src={logo} alt="" />
          </h1>
        </div>
        <div className="mb-8">
          <p className="text-gray-700 text-justify">
            LAZISMU adalah Lembaga Amil Zakat Terpercaya yang berada di bawah
            Persyarikatan Muhammadiyah dengan kebijakan mutu sebagai berikut:
          </p>
        </div>
        <div>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 text-justify">
            <li>
              Berkomitmen untuk senantiasa menjalankan visi, misi, dan tujuan
              Persyarikatan Muhammadiyah dan LAZISMU.
            </li>
            <li>
              Berkomitmen untuk mematuhi seluruh peraturan dan persyaratan yang
              berlaku.
            </li>
            <li>
              Berkomitmen untuk mematuhi seluruh kebijakan yang telah ditetapkan
              oleh Persyarikatan Muhammadiyah dan pimpinan LAZISMU.
            </li>
            <li>
              Berkomitmen untuk meningkatkan kompetensi dan profesionalitas SDM.
            </li>
            <li>Berkomitmen untuk memprioritaskan kepuasan pelanggan.</li>
            <li>
              Berkomitmen untuk menjadikan kebijakan mutu sebagai kerangka kerja
              dalam penyusunan sasaran dan program mutu.
            </li>
            <li>
              Berkomitmen untuk melakukan peninjauan kebijakan dan sasaran mutu
              secara periodik.
            </li>
            <li>
              Berkomitmen untuk menjamin efektivitas penerapan dan meningkatkan
              kinerja sistem manajemen secara berkelanjutan.
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
}
