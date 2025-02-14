"use client";

import HeroImage from "@/assets/images/image4.png";
import { Button, Image } from "@heroui/react";
import { MdOutlineContactSupport } from "react-icons/md";
import { PiSparkleFill } from "react-icons/pi";

const Hero = () => {
  return (
    <section className="grid lg:grid-cols-2 gap-16 py-16 min-h-[600px]">
      <div className="text-center lg:text-left">
        <h1>Wujudkan Impian Anda dengan Mudah!</h1>
        <p>
          Ciptakan rencana keuangan Anda dengan aman dan mudah. Website kami
          membantu Anda mengelola dan mengembangkan tabungan untuk mencapai
          tujuan finasial Anda✨
        </p>
        <div className="flex items-center justify-center lg:justify-start gap-2 flex-wrap mt-8">
          <Button
            color="primary"
            radius="full"
            size="lg"
            as="a"
            href="/student/register"
            startContent={<PiSparkleFill size={20} />}
          >
            Bergabung Sekarang
          </Button>
          <Button
            color="primary"
            variant="flat"
            size="lg"
            radius="full"
            startContent={<MdOutlineContactSupport size={20} />}
          >
            Hubungi Kami
          </Button>
        </div>
      </div>
      <div className="flex justify-center">
        <Image src={HeroImage.src} alt="hero" className="max-h-96" />
      </div>
    </section>
  );
};

export default Hero;
