"use client";

import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Image,
  Spinner,
} from "@heroui/react";
import Image5 from "@/assets/images/image5.png";
import { useGetOverview } from "@/lib/hooks/useOverview";

const Leaderboard = () => {
  const { data, isPending } = useGetOverview();
  const topStudents = data?.result?.top_students || [];

  return (
    <main className="py-16 space-y-12">
      <div>
        <h3>Top LeaderBoard Siswa Rajin Menabung</h3>
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
          <div className="space-y-4">
            <Card
              classNames={{ base: "p-2 rounded-2xl w-full border" }}
              className="dark:bg-zinc-900/70"
              isPressable
              isBlurred
            >
              <CardHeader>
                <h3 className="text-warning">🪙 Rp.{topStudents[0]?.balance}</h3>
              </CardHeader>
              <CardBody>
                <Divider className="mb-4" />
                <div className="flex items-center gap-4">
                  <Avatar name={topStudents[0].name} />
                  <div>
                    <h5 className="font-medium">{topStudents[0]?.name}</h5>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {topStudents[0]?.class} {topStudents[0]?.major}
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card
              classNames={{ base: "p-2 rounded-2xl w-full border" }}
              className="dark:bg-zinc-900/70"
              isPressable
              isBlurred
            >
              <CardHeader>
                <h4 className="text-warning">🪙 Rp.{topStudents[1]?.balance}</h4>
              </CardHeader>
              <CardBody>
                <Divider className="mb-4" />
                <div className="flex items-center gap-4">
                  <Avatar name={topStudents[1]?.name} />
                  <div>
                    <h5 className="font-medium">{topStudents[1]?.name}</h5>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {topStudents[1]?.class} {topStudents[1]?.major}
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card
              classNames={{ base: "p-2 rounded-2xl w-full border" }}
              className="dark:bg-zinc-900/70"
              isPressable
              isBlurred
            >
              <CardHeader>
                <h5 className="text-warning font-bold">🪙 Rp.{topStudents[2].balance}</h5>
              </CardHeader>
              <CardBody>
                <Divider className="mb-4" />
                <div className="flex items-center gap-4">
                  <Avatar name={topStudents[2].name} />
                  <div>
                    <h5 className="font-medium">{topStudents[2]?.name}</h5>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {topStudents[2]?.class} {topStudents[2]?.major}
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
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
