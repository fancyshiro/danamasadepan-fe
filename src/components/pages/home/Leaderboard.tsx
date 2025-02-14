"use client";

import Image5 from "@/assets/images/image5.png";
import { Button, Card, CardHeader, Image, Spinner } from "@heroui/react";
import { useGetOverview } from "@/lib/hooks/useOverview";
import { LuCrown } from "react-icons/lu"; 
import { BiMedal } from "react-icons/bi";
import { MdOutlineMilitaryTech } from "react-icons/md";
import { PiMedalLight } from "react-icons/pi";

const icons = [<LuCrown size={22} />, <BiMedal size={26} />, <MdOutlineMilitaryTech size={26} />]
const color = ['primary', 'secondary', 'warning']

const Leaderboard = () => {
  const { data, isPending } = useGetOverview();
  const topStudents = data?.result?.top_students || [];

  return (
    <main className="py-16 space-y-12">
      <div className="text-center">
        <h3>Top Siswa Rajin Menabung</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro,
          magni!
        </p>
      </div>

      {isPending && (
        <div className="flex justify-center items-center h-40">
          <Spinner size="lg" />
        </div>
      )}

      {!isPending && (
        <div className="grid lg:grid-cols-2">
          <div className="space-y-4 flex justify-center flex-col">
            {topStudents.slice(0, 5).map((item: any, index: number) => (
              <Card className="hover:scale-110 duration-500 cursor-pointer dark:bg-zinc-900/70">
                <CardHeader>
                  <Button isIconOnly variant="flat" color={color[index] as "primary" | "secondary" | "warning" }>
                    {icons[index] ?? <PiMedalLight size={22} />}
                  </Button>
                  <div className="flex flex-col ms-4">
                    <span className="font-semibold text-xl">{item.name}</span>
                    <small>{item.class} - {item.major}</small>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="flex justify-center items-center">
            <Image src={Image5.src} alt="leaderboard" className="min-h-72" />
          </div>
        </div>
      )}
    </main>
  );
};

export default Leaderboard;
