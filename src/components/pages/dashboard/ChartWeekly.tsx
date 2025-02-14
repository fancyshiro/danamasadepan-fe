'use client';

import { useGetWeekly } from "@/lib/hooks/useTransaction";
import { CustomTooltip, daysOfWeek, parseIndonesianNumber } from "@/lib/utils";
import { Card, CardBody, Spinner } from "@heroui/react";
import { useMemo } from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip, Legend, CartesianGrid, Rectangle } from "recharts";

const ChartWeekly = ({ className }: { className?: string }) => {
  const { isPending, data } = useGetWeekly();

  const formattedData = useMemo(() => {
    if (!data?.result) return [];
    return daysOfWeek.map((day) => {
      const dayData = data.result.find((item: any) => new Date(item.date).toLocaleDateString("id-ID", { weekday: "long" }) === day);
      return { name: day,
        total_debit: dayData ? parseIndonesianNumber(dayData.total_debit) : 0,
        total_credit: dayData ? parseIndonesianNumber(dayData.total_credit) : 0,
      };
    });
  }, [data]);

  return (
    <Card className={className}>
      <div>
        <h4 className="text-xl font-semibold">Ringkasan Transaksi</h4>
        <p className="text-gray-500 mt-1">Data transaksi mingguan dalam bentuk grafik batang.</p>
      </div>
      <CardBody>
        <div className="h-[400px] w-full flex justify-center items-center mt-4">
          {isPending ? <Spinner /> : (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={formattedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-50" />
                <XAxis dataKey="name" tick={{ fill: "#666666" }} axisLine={{ stroke: "#E5E7EB" }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ paddingTop: "20px" }} />
                <Bar
                  name="Debit"
                  dataKey="total_debit"
                  fill="#10B981"
                  radius={[4, 4, 0, 0]}
                  activeBar={<Rectangle fill="#34D399" stroke="#059669" />}
                />
                <Bar
                  name="Kredit"
                  dataKey="total_credit"
                  fill="#EC4899"
                  radius={[4, 4, 0, 0]}
                  activeBar={<Rectangle fill="#F472B6" stroke="#BE185D" />}
                />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default ChartWeekly;
