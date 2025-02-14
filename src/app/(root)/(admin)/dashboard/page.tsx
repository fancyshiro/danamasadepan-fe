import ChartWeekTransaction from "@/components/pages/dashboard/ChartWeekly";
import Overview from "@/components/pages/dashboard/Overview";
import PiePercentage from "@/components/pages/dashboard/PiePercentage";
import { Divider } from "@heroui/react";

export default function Dashboard() {
  return (
    <div className="col-span-4 xl:col-span-5 space-y-8 pb-16">
      <Overview />
      <Divider />
      <div className="grid grid-cols-12 gap-4">
        <ChartWeekTransaction className="p-4 col-span-8" />
        <PiePercentage className="p-4 col-span-4 h-max" />
      </div>
    </div>
  );
}
