import { Icons } from "./Icons";

export const Options = {
  class: [
    { value: "X", name: "X" },
    { value: "XI", name: "XI" },
    { value: "XII", name: "XII" },
  ],
  major: [
    { value: "RPL", name: "Pengembangan Perangkat Lunak dan GIM" },
    { value: "RKJ", name: "Teknik Jaringan Komputer dan Telekomunikasi" },
    { value: "AKL", name: "Akuntansi dan Keuangan Lembaga" },
  ],
  gender: [
    { value: "Laki-laki", name: "Laki-Laki" },
    { value: "Perempuan", name: "Perempuan" },
  ],
};

export const Menus = {
  home: [
    {
      name: "Beranda",
      href: "/",
    },
    {
      name: "Register",
      href: "/student/register",
    },
    {
      name: "Search",
      href: "/student/search",
    },
    {
      name: "Kontak",
      href: "/contact",
    },
  ],
  dashboard: [
    {
      title: "Menu Utama",
      items: [
        {
          name: "Dashboard",
          href: "/dashboard",
          icon: Icons.Dashboard,
        },
        {
          name: "Persetujuan",
          href: "/dashboard/register",
          icon: Icons.Register,
        },
        {
          name: "Siswa",
          href: "/dashboard/student",
          icon: Icons.Student,
        },
        {
          name: "Admin",
          href: "/dashboard/admin",
          icon: Icons.Admin,
        },
        {
          name: "Transaksi",
          href: "/dashboard/transaction",
          icon: Icons.Transaction,
        },
        {
          name: "Kategori Role",
          href: "/dashboard/role",
          icon: Icons.Role,
        },
      ],
    },
    {
      title: "Lainnya",
      items: [
        {
          name: "Profile",
          href: "/profile",
          icon: Icons.Profile,
        },
        {
          name: "Laporan",
          href: "/dashboard/report",
          icon: Icons.File,
        },
        {
          name: "Pengaturan",
          href: "/settings",
          icon: Icons.Setting,
        },
      ],
    },
  ],
};

export const features = [
  {
    title: "Setoran Awal Ringan",
    description:
      "Mulai menabung dengan setoran awal yang sangat terjangkau untuk semua kalangan.",
    icon: "low-deposit.png",
    color: 'bg-primary/25 text-primary'
  },
  {
    title: "Tarik Tunai di Seluruh ATM",
    description:
      "Akses dana dengan mudah melalui jaringan ATM nasional dan internasional.",
    icon: "atm-access.png",
    color: 'bg-success/25 text-success'
  },
  {
    title: "Fitur Tabungan Berjangka",
    description:
      "Buat rencana keuangan lebih teratur dengan tabungan berjangka yang fleksibel.",
    icon: "saving-plan.png",
    color: 'bg-warning/25 text-warning'
  },
  {
    title: "Keamanan Terjamin",
    description:
      "Keamanan data dan dana Anda terjamin dengan sistem keamanan berlapis.",
    icon: "secure.png",
    color: 'bg-danger/25 text-danger'
  },
  {
    title: "Reward & Cashback",
    description:
      "Dapatkan berbagai reward dan cashback menarik setiap transaksi tertentu.",
    icon: "reward.png",
    color: 'bg-purple-500/25 text-purple-500'
  },
  {
    title: "Transfer & Pembayaran Cepat",
    description:
      "Nikmati layanan transfer dan pembayaran instan dengan biaya minimal.",
    icon: "fast-transfer.png",
    color: 'bg-emerald-500/25 text-emerald-500'
  },
];
