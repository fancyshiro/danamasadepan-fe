"use client";

import TiltedCard from "@/components/reactbits/Components/TiltedCard/TiltedCard";
import { Chip } from "@heroui/react";

const Location = () => {
  return (
    <main className="py-16 hidden lg:block">
      <div className="text-center">
        <h3>Lokasi Kami Saat Ini</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, non.
        </p>
      </div>

      <TiltedCard
        imageSrc="https://sma.bppi.sch.id/theme/images/SMA_BPPI.jpg"
        containerHeight="400px"
        containerWidth="1000px"
        imageHeight="300px"
        imageWidth="800px"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showTooltip={true}
        captionText="Jl. Adipati Agung No.23, Baleendah, Kec. Baleendah, Kabupaten Bandung, Jawa Barat 40375"
        displayOverlayContent={true}
        overlayContent={
          <Chip
            variant="flat"
            classNames={{
              base: "bg-zinc-300/70 text-zinc-900 backdrop-blur-xl",
            }}
          >
            SMK BPPI Baleendah
          </Chip>
        }
      />
    </main>
  );
};

export default Location;
