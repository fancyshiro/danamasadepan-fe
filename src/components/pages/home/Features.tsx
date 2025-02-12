import SpotlightCard from "@/components/reactbits/Components/SpotlightCard/SpotlightCard";
import { FaUser } from "react-icons/fa6";

const Features = () => {
  return (
    <main className="py-16 space-y-12">
      <div>
        <h3>Fitur yang Dimiliki</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, non.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <SpotlightCard key={index}>
            <div className="space-y-4">
              <FaUser size={28} />
              <h4>{feature.title}</h4>
              <p className="text-zinc-400">{feature.description}</p>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </main>
  );
};

export default Features;

const features = [
  {
    title: "Bunga Kompetitif",
    description:
      "Nikmati suku bunga tabungan yang kompetitif untuk pertumbuhan saldo lebih cepat.",
    icon: "interest-rate.png",
  },
  {
    title: "Gratis Biaya Administrasi",
    description:
      "Tanpa biaya admin bulanan, saldo Anda tetap utuh tanpa potongan tambahan.",
    icon: "no-fee.png",
  },
  {
    title: "Akses Mobile Banking",
    description:
      "Kelola tabungan Anda dengan mudah melalui aplikasi mobile banking kapan saja, di mana saja.",
    icon: "mobile-banking.png",
  },
  {
    title: "Setoran Awal Ringan",
    description:
      "Mulai menabung dengan setoran awal yang sangat terjangkau untuk semua kalangan.",
    icon: "low-deposit.png",
  },
  {
    title: "Tarik Tunai di Seluruh ATM",
    description:
      "Akses dana dengan mudah melalui jaringan ATM nasional dan internasional.",
    icon: "atm-access.png",
  },
  {
    title: "Fitur Tabungan Berjangka",
    description:
      "Buat rencana keuangan lebih teratur dengan tabungan berjangka yang fleksibel.",
    icon: "saving-plan.png",
  },
  {
    title: "Keamanan Terjamin",
    description:
      "Keamanan data dan dana Anda terjamin dengan sistem keamanan berlapis.",
    icon: "secure.png",
  },
  {
    title: "Reward & Cashback",
    description:
      "Dapatkan berbagai reward dan cashback menarik setiap transaksi tertentu.",
    icon: "reward.png",
  },
  {
    title: "Transfer & Pembayaran Cepat",
    description:
      "Nikmati layanan transfer dan pembayaran instan dengan biaya minimal.",
    icon: "fast-transfer.png",
  },
];
