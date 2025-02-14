"use client";

import { useGetOverview } from "@/lib/hooks/useOverview";
import { Card, Spinner } from "@heroui/react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#10B981", "#EC4899"];

const PiePercentage = ({ className }: { className?: string }) => {
  const { data, isPending } = useGetOverview();

  const transactionData = [
    { name: "Debit", value: Number(data?.result?.percentage_debit) || 0 },
    { name: "Kredit", value: Number(data?.result?.percentage_credit) || 0 },
  ];

  return (
    <Card className={className}>
      <h4 className="text-xl font-semibold mb-4">Persentase Transaksi</h4>
      <div className="w-full h-[300px] flex justify-center items-center">
        {isPending ? <Spinner /> : (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={transactionData}
                cx="50%"
                cy="50%"
                labelLine
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {transactionData.map((entry, index) => <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]}/>)}
              </Pie>
              <Tooltip formatter={(value) => `${Number(value).toFixed(1)}%`} />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </Card>
  );
};

export default PiePercentage;
