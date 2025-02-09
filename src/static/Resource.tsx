
import { Icons } from "./Icons";

export const Options = {
  class: [
    { value: "X", name: "X" },
    { value: "XI", name: "XI" },
    { value: "XII", name: "XII" },
  ],
  major: [
    { value: "PPLG", name: "Pengembangan Perangkat Lunak dan GIM" },
    { value: "TJKT", name: "Teknik Jaringan Komputer dan Telekomunikasi" },
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
          name: "Pendaftaran",
          href: "/dashboard/register",
          icon: Icons.Register,
        },
        {
          name: "Siswa",
          href: "/",
          icon: Icons.Student,
        },
        {
          name: "Admin",
          href: "/",
          icon: Icons.Admin,
        },
        {
          name: "Transaksi",
          href: "/dashboard/transaction",
          icon: Icons.Transaction,
        },
        {
          name: "Kategori Role",
          href: "/",
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
          icon: null,
        },
        {
          name: "Laporan",
          href: "/report",
          icon: null,
        },
        {
          name: "Pengaturan",
          href: "/settings",
          icon: null,
        },
      ],
    },
  ],
};
