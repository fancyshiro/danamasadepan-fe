"use client";

import { Card, CardBody } from "@heroui/react";
import { GrTransaction } from "react-icons/gr";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { RiAdminLine } from "react-icons/ri";
import { TbPigMoney } from "react-icons/tb";
import { BsCashStack } from "react-icons/bs";
import { MdOutlineMoneyOff } from "react-icons/md";

export default function ReportDashboard() {
  return (
    <main className="col-span-4 xl:col-span-5 ">
      <div>
        <h3>Laporan Dashboard Admin</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit,
          doloremque?
        </p>
      </div>

      <div className="grid-cols-2 grid gap-6 mt-8">
        {/* Export Laporan Siswa */}
        <Card classNames={{ base: "p-3" }} isPressable>
          <CardBody className="flex items-center flex-row gap-4 cursor-pointer">
            <div className="bg-primary/25 text-primary w-max p-2.5 rounded-full mb-4">
              <HiOutlineUserGroup size={28} />
            </div>

            <div>
              <h5>Export Laporan Siswa</h5>
              <p>Download semua data siswa yang terdaftar.</p>
            </div>
          </CardBody>
        </Card>

        {/* Export Laporan Siswa Menabung */}
        <Card classNames={{ base: "p-3" }} isPressable>
          <CardBody className="flex items-center flex-row gap-4 cursor-pointer">
            <div className="bg-cyan-500/25 text-cyan-500 w-max p-2.5 rounded-full mb-4">
              <TbPigMoney size={28} />
            </div>

            <div>
              <h5>Export Laporan Siswa Menabung</h5>
              <p>Download semua data siswa yang menabung.</p>
            </div>
          </CardBody>
        </Card>

        {/* Export Laporan Admin */}
        <Card classNames={{ base: "p-3" }} isPressable>
          <CardBody className="flex items-center flex-row gap-4 cursor-pointer">
            <div className="bg-secondary/25 text-secondary w-max p-2.5 rounded-full mb-4">
              <RiAdminLine size={28} />
            </div>

            <div>
              <h5>Export Laporan Admin</h5>
              <p>Download daftar semua admin.</p>
            </div>
          </CardBody>
        </Card>

        {/* Export Laporan Transaksi */}
        <Card classNames={{ base: "p-3" }} isPressable>
          <CardBody className="flex items-center flex-row gap-4 cursor-pointer">
            <div className="bg-success/25 text-success w-max p-2.5 rounded-full mb-4">
              <GrTransaction size={28} />
            </div>

            <div>
              <h5>Export Semua Transaksi</h5>
              <p>Download semua transaksi siswa.</p>
            </div>
          </CardBody>
        </Card>

        {/* Export Transaksi Debit */}
        <Card classNames={{ base: "p-3" }} isPressable>
          <CardBody className="flex items-center flex-row gap-4 cursor-pointer">
            <div className="bg-green-500/25 text-green-500 w-max p-2.5 rounded-full mb-4">
              <BsCashStack size={28} />
            </div>

            <div>
              <h5>Export Transaksi Debit</h5>
              <p>Download semua transaksi pemasukan (deposit/tabungan siswa).</p>
            </div>
          </CardBody>
        </Card>

        {/* Export Transaksi Kredit */}
        <Card classNames={{ base: "p-3" }} isPressable>
          <CardBody className="flex items-center flex-row gap-4 cursor-pointer">
            <div className="bg-red-500/25 text-red-500 w-max p-2.5 rounded-full mb-4">
              <MdOutlineMoneyOff size={28} />
            </div>

            <div>
              <h5>Export Transaksi Kredit</h5>
              <p>Download semua transaksi pengeluaran (penarikan siswa).</p>
            </div>
          </CardBody>
        </Card>
      </div>
    </main>
  );
}
