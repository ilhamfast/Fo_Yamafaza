import logo from "../../assets/logo.png";
import Footer from "../../components/Footer";

export default function ApaItuZiswaf() {
  return (
    <>
    <div className="font-Inter px-4 md:px-20 py-14">
      <div className="text-center mb-8">
        <h1 className="flex justify-center gap-2 font-black text-gray-600 text-2xl items-end">
          APA ITU ZISWAF
          <p>
            LAZIS<span className="text-primary">MU</span>
          </p>
          <img className="h-10 w-10" src={logo} alt="Logo" />
        </h1>
      </div>
      <div className="mb-8">
        <p className="text-gray-700 text-justify">
          Ziswaf adalah singkatan dari Zakat, Infak, Sedekah, dan Wakaf. Berikut
          penjelasan masing-masing komponen:
        </p>
      </div>
      <div>
        <h2 className="font-semibold text-gray-800 mb-2">Zakat</h2>
        <p className="text-gray-700 text-justify mb-4">
          Zakat adalah kewajiban bagi setiap Muslim yang mampu untuk memberikan
          sebagian dari harta mereka kepada yang berhak menerimanya. Ada dua
          jenis zakat, yaitu zakat fitrah dan zakat mal. Zakat fitrah diberikan
          menjelang Idul Fitri, sedangkan zakat mal adalah zakat harta yang
          dikeluarkan setiap tahun.
        </p>

        <h2 className="font-semibold text-gray-800 mb-2">Infak</h2>
        <p className="text-gray-700 text-justify mb-4">
          Infak adalah sumbangan sukarela yang diberikan oleh seorang Muslim
          dari hartanya untuk kepentingan umum atau khusus tanpa ada batasan
          jumlah dan waktu tertentu. Infak bisa diberikan kapan saja dan untuk
          berbagai keperluan, seperti pembangunan masjid, bantuan bencana, dan
          lain sebagainya.
        </p>

        <h2 className="font-semibold text-gray-800 mb-2">Sedekah</h2>
        <p className="text-gray-700 text-justify mb-4">
          Sedekah adalah bentuk lain dari sumbangan sukarela yang tidak terbatas
          pada harta, tetapi juga bisa berupa amal perbuatan yang bermanfaat
          bagi orang lain. Sedekah bisa berupa uang, barang, makanan, atau
          bahkan tindakan baik seperti membantu sesama.
        </p>

        <h2 className="font-semibold text-gray-800 mb-2">Wakaf</h2>
        <p className="text-gray-700 text-justify mb-4">
          Wakaf adalah pemberian harta benda yang tahan lama, seperti tanah atau
          bangunan, untuk digunakan bagi kepentingan umum atau keagamaan secara
          permanen. Harta wakaf tidak boleh dijual, diwariskan, atau diberikan
          kepada pihak lain, tetapi harus digunakan sesuai dengan tujuan wakaf
          tersebut.
        </p>

        <p className="text-gray-700 text-justify">
          Ziswaf merupakan konsep penting dalam Islam yang bertujuan untuk
          meningkatkan kesejahteraan masyarakat, mengurangi kesenjangan sosial,
          dan memperkuat solidaritas antarumat. Melalui Ziswaf, diharapkan dapat
          tercipta pemerataan ekonomi dan keadilan sosial di kalangan umat
          Islam.
        </p>
      </div>
    </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
