import logo from "../../assets/logo.png";
import Footer from "../../components/Footer";
export default function VisiMisi() {
  return (
    <div>
      <div className="font-Inter px-4 md:px-20 py-14">
        <div className="text-center mb-8">
          <h1 className="flex justify-center gap-2 font-black text-gray-600 text-2xl items-end">
            VISI, MISI DAN TUJUAN
            <p>
              LAZIS<span className="text-primary">MU</span>
            </p>
            <img className="h-10 w-10" src={logo} alt="" />
          </h1>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-green-500 mb-4">Visi</h2>
          <p className="text-gray-700">Menjadi Lembaga Amil Zakat Terpercaya</p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-green-500 mb-4">Misi</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>
              Meningkatkan kualitas pengelolaan ZIS yang amanah, profesional,
              dan transparan
            </li>
            <li>
              Meningkatkan pendayagunaan ZIS yang kreatif, inovatif, dan
              produktif
            </li>
            <li>Meningkatkan pelayanan donatur</li>
          </ol>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-green-500 mb-4">Prinsip</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 text-justify">
            <li>
              <span className="font-bold">Syariat Islam:</span> artinya dalam
              menjalankan tugas dan fungsinya, harus berpedoman sesuai syariat
              Islam, mulai dari tata cara perekrutan pegawai hingga tata cara
              pendistribbusian ZISKA;
            </li>
            <li>
              <span className="font-bold">Amanah dan integritas:</span> artinya
              harus menjadi lembaga yang dapat dipercaya, dengan memegang teguh
              kode etik dan prinsip-prinsip moral;
            </li>
            <li>
              <span className="font-bold">Kemanfaatan:</span> artinya memberikan
              manfaat yang besar bagi mustahik;
            </li>
            <li>
              <span className="font-bold">Keadilan:</span> artinya mampu
              bertindak adil, yakni sikap memperlakukan secara setara di dalam
              memenuhi hak-hak yang timbul berdasarkan perjanjian serta
              peraturan perundangan yang berlaku;
            </li>
            <li>
              <span className="font-bold">Kepastian hukum:</span> artinya muzaki
              dan mustahik harus memiliki jaminan dan kepastian hukum dalam
              proses pengelolaan dana ZISKA;
            </li>
            <li>
              <span className="font-bold">Terintegrasi:</span> artinya harus
              dilakukan secara heirarkis sehingga mampu meningkatkan kinerja
              pengumpulan, pendistribusian dan pendayagunaan dana ZISKA;
            </li>
            <li>
              <span className="font-bold">Akuntabilitas:</span> artinya
              pengelolaan dana ZISKA harus bisa dipertanggungjawabkan kepada
              masyarakat dan mudah diakses oleh masyarakat dan pihak lain yang
              berkepentingan;
            </li>
            <li>
              <span className="font-bold">Profesional:</span> artinya perilaku
              yang selalu mengedepankan sikap dan Tindakan yang dilandasi oleh
              tingkat kompetensi, kredibilitas dan komitmen yang tinggi;
            </li>
            <li>
              <span className="font-bold">Transparansi:</span> artinya tindakan
              menyampaikan informasi secara transparan, konsisten, dan kredibel
              untuk memberikan layanan yang lebih baik dan lebih cepat kepada
              pemangku kepentingan;
            </li>
            <li>
              <span className="font-bold">Sinergi:</span> artinya sikap
              membangun dan memastikan hubungan kerja sama internal yang
              produktif serta kemitraan yang harmonis dengan para pemangku
              kepentingan dana ZISKA untuk menghasilkan karya yang bermanfaat
              dan berkualitas.
            </li>
            <li>
              <span className="font-bold">Berkemajuan:</span> artinya melakukan
              sesuatu secara baik dan benar yang berorientasi ke depan.
            </li>
          </ol>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-green-500 mb-4">Tujuan</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 text-justify">
            <li>
              Meningkatkan efektivitas dan efisiensi pelayanan dalam pengelolaan
              dana ZISKA dalam rangka mencapai maksud dan tujuan Persyarikatan;
            </li>
            <li>
              Meningkatkan manfaat dana ZISKA untuk mewujudkan kesejahteraan
              masyarakat dan penanggulangan kemiskinan dalam rangka mencapai
              maksud dan tujuan Persyarikatan;
            </li>
            <li>
              Meningkatkan kemampuan ekonomi umat melalui pemberdayaan
              usaha-usaha produktif
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
}
