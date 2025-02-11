"use client";

import { lazy, Suspense } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));

const SplineScene = ({ scene }: { scene: string }) => {
  return (
    <main className="py-16 rounded-xl hidden">
      <Suspense fallback={null}>
        <Spline
          className="rounded-xl"
          scene={scene}
          onLoad={(splineApp) => {
            const object = splineApp.findObjectByName("Big"); // Ganti dengan nama objek di Spline
          }}
        />
      </Suspense>
    </main>
  );
};

export default SplineScene;
