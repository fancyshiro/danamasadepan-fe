import React from "react";
import { FaUser } from "react-icons/fa6";

const Features = () => {
  return (
    <main className="py-16 space-y-12 hidden">
      <div>
        <h3>Fitur yang Dimiliki</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, non.
        </p>
      </div>

      <div className="flex flex-col gap-6 flex-wrap *:border-2 *:border-neutral-900 *:bg-white *:shadow-lg *:cursor-pointer *:rounded-xl w-full h-[800px]">

        <div className="w-[32%] h-[40%] p-6 flex flex-col justify-center space-y-4">
          <span className="text-4xl">
            <FaUser />
          </span>
          <div>
            <h4>{features[0].title}</h4>
            <p>{features[0].description}</p>
          </div>
        </div>

        <div className="w-[32%] h-[30%] p-6 flex flex-col justify-center space-y-4"></div>
        <div className="w-[32%] grow"></div>
        <div className="w-[32%] h-1/4"></div>
        <div className="w-[32%] h-[40%]"></div>
        <div className="w-[32%] grow"></div>
        <div className="w-[32%] h-[40%]"></div>
        <div className="w-[32%] h-[30%]"></div>
        <div className="w-[32%] grow"></div>
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
