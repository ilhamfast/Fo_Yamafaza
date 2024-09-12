import { Timeline } from "flowbite-react";
import { HiAcademicCap } from "react-icons/hi";
import { GiHealingShield } from "react-icons/gi";
import { FaChartLine } from "react-icons/fa";
import {
  FaGroupArrowsRotate,
  FaBookQuran,
  FaMountainCity,
} from "react-icons/fa6";
function PilarH() {
  return (
    <div className="hidden md:block p-10 w-full bg-green-100/20">
      <Timeline horizontal className="flex gap-4 justify-between">
        <Timeline.Item>
          <Timeline.Content>
            <div className="flex justify-center">
              <span className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full">
                <HiAcademicCap color="green" className="w-6 h-6" />
              </span>
            </div>
            <p className="text-center">Pendidikan</p>
            <Timeline.Body>
              Program peningkatan mutu SDM dengan menjalankan berbagai program
              di bidang pendidikan berupa pemenuhan sarana dan biaya pendidikan
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Content>
            <div className="flex justify-center">
              <span className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full -start-4e-900">
                <GiHealingShield color="green" className="w-6 h-6" />
              </span>
            </div>
            <p className="text-center">Kesehatan</p>
            <Timeline.Body>
              Program Lazismu yang berfokus pada pemenuhan hak-hak mustahik
              untuk mendapatkan kehidupan yang berkualitas melalui layanan
              kesehatan atau prokes.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Content>
            <div className="flex justify-center">
              <span className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full -start-4e-900">
                <FaChartLine color="green" className="w-6 h-6" />
              </span>
            </div>
            <Timeline.Title className="text-center">Ekonomi</Timeline.Title>
            <Timeline.Body>
              Program peningkatan kesejahteraan penerima manfaat dana Zakat dan
              donasi lainnya dengan pola pemberdayaan maupun pelatihan-pelatihan
              wirausaha.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
      <Timeline horizontal className="flex gap-4">
        <Timeline.Item>
          <Timeline.Content>
            <div className="flex justify-center">
              <span className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full -start-4e-900">
                <FaBookQuran color="green" className="w-6 h-6" />
              </span>
            </div>
            <Timeline.Title className="text-center">
              Sosial Dakwah
            </Timeline.Title>
            <Timeline.Body>
              Pilar yang berfungsi menguatkan sisi ruhani dan pemenuhan
              kebutuhan untuk kegiatan dakwah dengan tujuan kemandirian para
              da’i dan institusi dakwah.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Content>
            <div className="flex justify-center">
              <span className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full -start-4e-900">
                <FaGroupArrowsRotate color="green" className="w-6 h-6" />
              </span>
            </div>
            <Timeline.Title className="text-center">Kemanusiaan</Timeline.Title>
            <Timeline.Body>
              Penanganan masalah sosial yang timbul akibat ekses external
              terhadap kehidupan mustahik, seperti bantuan bencana, pendampingan
              manula dan kegiatan karikatif
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Content>
            <div className="flex justify-center">
              <span className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full -start-4e-900">
                <FaMountainCity color="green" className="w-6 h-6" />
              </span>
            </div>
            <Timeline.Title className="text-center">Lingkungan</Timeline.Title>
            <Timeline.Body>
              Sumbangsih Lazismu untuk peningkatan kualitas lingkungan bagi
              kehidupan masyarakat dan ekosistem yang lebih baik sehingga bisa
              menjaga keseimbangan alam.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}

export default PilarH;
