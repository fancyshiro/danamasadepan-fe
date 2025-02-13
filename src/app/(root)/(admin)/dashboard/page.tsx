import Overview from "@/components/pages/dashboard/Overview";
import { Divider } from "@heroui/react";

export default function Dashboard() {
  return (
    <div className="col-span-4 xl:col-span-5 space-y-8">
      <Overview/>
      <Divider />
    </div>
  );
}