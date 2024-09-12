import logo from "../../assets/logo.png";
import Footer from "../../components/Footer";

function TentangKami() {
  const detailContent =
    "LAZISMU adalah lembaga zakat tingkat nasional yang berkhidmat dalam pemberdayaan masyarakat melalui pendayagunaan secara produktif dana zakat, infaq, wakaf dan dana kedermawanan lainnya baik dari perseorangan, lembaga, perusahaan dan instansi lainnya.Didirikan oleh PP.Muhammadiyah pada tahun 2002, selanjutnya dikukuhkan oleh Menteri Agama Republik Indonesia sebagai Lembaga Amil Zakat Nasional melalui SK No.457/21 November 2002. Dengan telah berlakunya Undang-undang Zakat nomor 23 tahun 2011, Peraturan Pemerintah nomor 14 tahun 2014, dan Keputusan Menteri Agama Republik Indonesia nomor 333 tahun 2015 .LAZISMU sebagai lembaga amil zakat nasional telah dikukuhkan kembali melalui SK Menteri Agama Republik Indonesia nomor 730 tahun 2016 lalu di perpanjang kembali dengan nomor 90 Tahun 2022 . LAZISMU adalah lembaga zakat tingkat nasional yang berkhidmat dalam pemberdayaan masyarakat melalui pendayagunaan secara produktif dana zakat, infaq, wakaf dan dana kedermawanan lainnya baik dari perseorangan, lembaga, perusahaan dan instansi lainnya.Latar belakang berdirinya LAZISMU terdiri atas dua faktor. Pertama, fakta Indonesia yang berselimut dengan kemiskinan yang masih meluas, kebodohan dan indeks pembangunan manusia yang sangat rendah.Semuanya berakibat dan sekaligus disebabkan tatanan keadilan sosial yang lemah. Kedua, zakat diyakini mampu bersumbangsih dalam mendorong keadilan sosial, pembangunan manusia dan mampu mengentaskan kemiskinan.Sebagai negara berpenduduk muslim terbesar di dunia, Indonesia memiliki potensi zakat, infaq dan wakaf yang terbilang cukup tinggi.Namun, potensi yang ada belum dapat dikelola dan didayagunakan secara maksimal sehingga tidak memberi dampak yang signifikan bagi penyelesaian persoalan yang ada. Berdirinya LAZISMU dimaksudkan sebagai institusi pengelola zakat dengan manajemen modern yang dapat menghantarkan zakat menjadi bagian dari penyelesai masalah (problem solver) sosial masyarakat yang terus berkembang.Dengan budaya kerja amanah, professional dan transparan, LAZISMU berusaha mengembangkan diri menjadi Lembaga Zakat terpercaya.Dan seiring waktu, kepercayaan publik semakin menguat.Dengan spirit kreatifitas dan inovasi, LAZISMU senantiasa menproduksi program-program pendayagunaan yang mampu menjawab tantangan perubahan dan problem sosial masyarakat yang berkembang.Saat ini, LAZISMU telah tersebar hampir di seluruh Indonesia yang menjadikan program-program pendayagunaan mampu menjangkau seluruh wilayah secara cepat, fokus dan tepat sasaran.";
  const detailContent2 =
    " 01. KEMISKINAN, Indonesia yang berselimut dengan kemiskinan yang masih meluas, kebodohan dan indeks pembangunan manusia yang sangat rendah.02. SUMBANGSIH, zakat diyakini mampu bersumbangsih dalam mendorong keadilan sosial,03. PROBLEM SOLVER, Berdirinya LAZISMU dimaksudkan sebagai institusi pengelola zakat dengan manajemen modern yang dapat menghantarkan zakat menjadi bagian dari penyelesai masalah";
  const processContent = (content) => {
    // Split content by the numbered sections
    const parts = content.split(/(\d{2}\.\s)/g).filter(Boolean);
    const processedParts = [];

    // Combine the numbers with the following text
    for (let i = 0; i < parts.length; i++) {
      if (/\d{2}\.\s/.test(parts[i])) {
        processedParts.push(`<strong>${parts[i]}</strong>${parts[i + 1]}`);
        i++;
      } else {
        processedParts.push(parts[i]);
      }
    }

    return processedParts;
  };
  return (
    <div>
      <div className="font-Inter">
        <div className="flex flex-col items-center px-4 md:px-20 py-14">
          <p className="flex justify-center gap-2 font-black text-gray-600 text-2xl items-end">
            TENTANG
            <p>
              LAZIS<span className="text-primary">MU</span>
            </p>
            <img className="h-10 w-10" src={logo} alt="" />
          </p>
          <div className="text-justify text-gray-600 leading-relaxed bg-white p-6 w-full">
            {detailContent &&
              detailContent.split(". ").map((sentence, index) => {
                // Highlight the text before "adalah" and numbers at the beginning
                let updatedSentence = sentence.replace(
                  /(\d+\.)/g,
                  "<strong>$1</strong>"
                );
                updatedSentence = updatedSentence.replace(
                  /([^.]*)adalah/g,
                  "<strong>$1</strong> adalah"
                );
                return (
                  <p
                    className="mb-4"
                    key={index}
                    dangerouslySetInnerHTML={{ __html: updatedSentence + "." }}
                  ></p>
                );
              })}

            {processContent(detailContent2).map((part, index) => (
              <p
                className="mb-4"
                key={index}
                dangerouslySetInnerHTML={{ __html: part }}
              ></p>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TentangKami;
