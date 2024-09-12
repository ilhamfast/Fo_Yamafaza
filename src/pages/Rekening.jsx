import content1 from "../assets/conten1.svg";
import Footer from "../components/Footer";

export default function Rekening() {
  return (
    <div className="font-Inter">
      {/* judul */}
      <div className="flex justify-center mt-24">
        <h1 className="text-6xl text-GREENDARK font-bold">Rekening</h1>
      </div>
      <div className="flex justify-center mt-10">
        <h1 className="text-3xl text-gray-600 font-bold">
          Yuk Cek Rincian Rekening Di Sini
        </h1>
      </div>
      {/* tabel */}
      <div className="w-full mt-10 px-20">
        <table className="w-full table-auto border-collapse border border-slate-400">
          <thead className="">
            <tr>
              <th className="border border-slate-300 border-black">
                NAMA BANK
              </th>
              <th className="border border-slate-300 border-black">JENIS</th>
              <th className="border border-slate-300 border-black">
                NAMA REKENING
              </th>
              <th className="border border-slate-300 border-black">
                NOMOR REKENING
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-ALERTGREEN">
              <th
                rowSpan={2}
                className="bg-white border border-slate-300 border-black p-2 text-center"
              >
                BCA
              </th>
              <td className="border border-slate-300 border-black p-2 text-center">
                ZAKAT
              </td>
              <td className="border border-slate-300 border-black p-2 text-center">
                Yeay Lembaga Amil Zakat
              </td>
              <td className="border border-slate-300 border-black p-2 text-center">
                068765906452
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 border-black p-2 text-center">
                INFAQ
              </td>
              <td className="border border-slate-300 border-black p-2 text-center">
                The Eagles
              </td>
              <td className="border border-slate-300 border-black p-2 text-center">
                068765906452
              </td>
            </tr>
            <tr className="bg-ALERTGREEN">
              <th
                rowSpan={1}
                className="bg-white border border-slate-300 border-black p-2 text-center"
              >
                BCA SYARIAH
              </th>
              <td className="border border-slate-300 border-black p-2 text-center">
                ZAKAT
              </td>
              <td className="border border-slate-300 border-black p-2 text-center">
                Yeay Lembaga Amil Zakat
              </td>
              <td className="border border-slate-300 border-black p-2 text-center">
                068765906452
              </td>
            </tr>
            <tr className="bg-ALERTGREEN">
              <th
                rowSpan={4}
                className="bg-white border border-slate-300 border-black p-2 text-center"
              >
                BNI
              </th>
              <td className="border border-slate-300 border-black p-2 text-center">
                ZAKAT
              </td>
              <td className="border border-slate-300 border-black p-2 text-center">
                Yeay Lembaga Amil Zakat
              </td>
              <td className="border border-slate-300 border-black p-2 text-center">
                068765906452
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 border-black p-2 text-center">
                INFAQ
              </td>
              <td className="border border-slate-300 border-black p-2 text-center">
                The Eagles
              </td>
              <td className="border border-slate-300 border-black p-2 text-center">
                068765906452
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 border-black p-2 text-center">
                INFAQ
              </td>
              <td className="border border-slate-300 border-black p-2 text-center">
                The Eagles
              </td>
              <td className="border border-slate-300 border-black p-2 text-center">
                068765906452
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 border-black p-2 text-center">
                INFAQ
              </td>
              <td className="border border-slate-300 border-black p-2 text-center">
                The Eagles
              </td>
              <td className="border border-slate-300 border-black p-2 text-center">
                068765906452
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* content2 */}
      <div className="flex mt-20 justify-between mx-20 items-center">
        <div className="font-Inter text-NEUTRAL04">
          <h1 className="my-5 text-6xl w-4/6 font-bold">
            Salurkan donasi kamu dengan mudah
          </h1>
          <p className="text-xl w-2/4 my-5 ">
            Jadikan program dan design kamu lebih menarik dan tertata rapi
            dengan menggunakan jasa dari Coristict.Studio
          </p>
          <button className="my-8 bg-GREENDARK rounded-full px-4 py-2 text-xl text-white font-bold hover:scale-105">
            Donasi Sekarang
          </button>
        </div>
        <div>
          <img src={content1} alt="" />
        </div>
      </div>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
