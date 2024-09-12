import { Timeline } from "flowbite-react";
import { HiAcademicCap } from "react-icons/hi";
import { GiHealingShield } from "react-icons/gi";
import { FaChartLine } from "react-icons/fa";
import {
  FaGroupArrowsRotate,
  FaBookQuran,
  FaMountainCity,
} from "react-icons/fa6";
function Pilar() {
  return (
    <Timeline>
      <Timeline.Item>
        <span className="absolute flex items-center justify-center w-8 h-8 bg-green-100 rounded-full -start-4 ring-8 ring-white">
          <HiAcademicCap color="green" className="" />
        </span>

        <Timeline.Content className="pl-2">
          <Timeline.Title>Pendidikan</Timeline.Title>
          <Timeline.Body>
            Program peningkatan mutu SDM dengan menjalankan berbagai program di
            bidang pendidikan berupa pemenuhan sarana dan biaya pendidikan
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <span className="absolute flex items-center justify-center w-8 h-8 bg-green-100 rounded-full -start-4 ring-8 ring-white ">
          <GiHealingShield color="green" className="" />
        </span>
        <Timeline.Content className="pl-2">
          <Timeline.Title>Kesehatan</Timeline.Title>
          <Timeline.Body>
            Program Lazismu yang berfokus pada pemenuhan hak-hak mustahik untuk
            mendapatkan kehidupan yang berkualitas melalui layanan kesehatan
            atau prokes.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <span className="absolute flex items-center justify-center w-8 h-8 bg-green-100 rounded-full -start-4 ring-8 ring-white ">
          <FaChartLine color="green" className="" />
        </span>
        <Timeline.Content className="pl-2">
          <Timeline.Title>Ekonomi</Timeline.Title>
          <Timeline.Body>
            Program peningkatan kesejahteraan penerima manfaat dana Zakat dan
            donasi lainnya dengan pola pemberdayaan maupun pelatihan-pelatihan
            wirausaha.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <span className="absolute flex items-center justify-center w-8 h-8 bg-green-100 rounded-full -start-4 ring-8 ring-white ">
          <FaGroupArrowsRotate color="green" className="" />
        </span>
        <Timeline.Content className="pl-2">
          <Timeline.Title>Kemanusiaan</Timeline.Title>
          <Timeline.Body>
            Penanganan masalah sosial yang timbul akibat ekses external terhadap
            kehidupan mustahik, seperti bantuan bencana, pendampingan manula dan
            kegiatan karikatif
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <span className="absolute flex items-center justify-center w-8 h-8 bg-green-100 rounded-full -start-4 ring-8 ring-white ">
          <FaBookQuran color="green" className="" />
        </span>
        <Timeline.Content className="pl-2">
          <Timeline.Title>Sosial Dakwah</Timeline.Title>
          <Timeline.Body>
            Pilar yang berfungsi menguatkan sisi ruhani dan pemenuhan kebutuhan
            untuk kegiatan dakwah dengan tujuan kemandirian para da’i dan
            institusi dakwah.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <span className="absolute flex items-center justify-center w-8 h-8 bg-green-100 rounded-full -start-4 ring-8 ring-white ">
          <FaMountainCity color="green" className="" />
        </span>
        <Timeline.Content className="pl-2">
          <Timeline.Title>Lingkungan</Timeline.Title>
          <Timeline.Body>
            Sumbangsih Lazismu untuk peningkatan kualitas lingkungan bagi
            kehidupan masyarakat dan ekosistem yang lebih baik sehingga bisa
            menjaga keseimbangan alam.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}

export default Pilar;
