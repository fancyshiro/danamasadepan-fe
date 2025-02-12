"use client";

import { useGetTransactionByAdmin } from "@/lib/hooks/useTransaction";
import { formattedDate } from "@/lib/utils/FormatedDate";
import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  Divider,
  Select,
  SelectItem,
  Spinner,
} from "@heroui/react";
import { useState } from "react";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import CardTransaction from "./cards/CardTransaction";
import FetchState from "./FecthState";

const ListTransaksi = ({ id }: { id: string }) => {
  const [type, setType] = useState<"debit" | "kredit" | "all">("all");

  // Query data transaksi
  const { data, isPending, isFetched } = useGetTransactionByAdmin( id, type !== "all" ? type : undefined );
  const transaction = data?.result || [];

  return (
    <main>
      <Select
        label="Tipe Transaksi"
        placeholder="Pilih Tipe Transaksi"
        value={type}
        description={`5 Transaksi Terakhir yang Telah Dilakukan`}
        onChange={(event) => {
          const value = event.target.value as "debit" | "kredit" | "all";
          setType(value);
        }}
      >
        {["all", "debit", "kredit"].map((item) => (
          <SelectItem key={item} value={item}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </SelectItem>
        ))}
      </Select>

      <FetchState
        dataLength={transaction.length}
        isLoading={isPending}
        isFetched={isFetched}
      >
        <div className="flex flex-col gap-4 mt-6">
          {transaction.slice(0, 5).map((item: any) => (
            <CardTransaction key={item.id} {...item} />
          ))}
        </div>
      </FetchState>
    </main>
  );
};

export default ListTransaksi;
