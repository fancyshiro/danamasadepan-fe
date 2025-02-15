"use client";

import { useGetOverview } from "@/lib/hooks/useOverview";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { Card, CardBody } from "@heroui/react";
import { MdOutlineTrendingUp, MdOutlineTrendingDown } from "react-icons/md";
import { HiOutlineBanknotes } from "react-icons/hi2";

const Overview = () => {
  const { data } = useGetOverview();
  const result = (data?.result as TOverview) || {};

  return (
    <main>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <Card classNames={{ base: "p-2 shadow-md border" }} isPressable>
          <CardBody>
            <div className="bg-primary/25 text-primary w-max p-2.5 rounded-full mb-4">
              <HiOutlineUserGroup size={28} />
            </div>
            <div>
              <h3>{result?.total_students ?? 0}</h3>
              <span>Total Semua Siswa</span>
            </div>
          </CardBody>
        </Card>

        <Card classNames={{ base: "p-2 shadow-md border" }} isPressable>
          <CardBody>
            <div className="bg-secondary/25 text-secondary w-max p-2.5 rounded-full mb-4">
              <HiOutlineBanknotes size={28} />
            </div>
            <div>
              <h4>Rp. {result?.total_balance ?? 0}</h4>
              <span>Total Seluruh Saldo</span>
            </div>
          </CardBody>
        </Card>

        <Card classNames={{ base: "p-2 shadow-md border" }} isPressable>
          <CardBody>
            <div className="bg-success/25 text-success w-max p-2.5 rounded-full mb-4">
              <MdOutlineTrendingUp size={28} />
            </div>
            <div>
              <h4>Rp. {result?.total_debit_amount?? 0}</h4>
              <span>Total Transaksi Debit</span>
            </div>
          </CardBody>
        </Card>

        <Card classNames={{ base: "p-2 shadow-md border" }} isPressable>
          <CardBody>
            <div className="bg-danger/25 text-danger w-max p-2.5 rounded-full mb-4">
              <MdOutlineTrendingDown size={28} />
            </div>
            <div>
              <h4>Rp. {result?.total_credit_amount ?? 0}</h4>
              <span>Total Transaksi Kredit</span>
            </div>
          </CardBody>
        </Card>

      </div>
    </main>
  );
};

export default Overview;

type TOverview = {
  total_balance: string;
  total_students: number;
  accepted_students: number;
  pending_students: number;
  total_transactions: number;
  total_debit_transactions: number;
  total_credit_transactions: number;
  total_debit_amount: string;
  total_credit_amount: string;
};
