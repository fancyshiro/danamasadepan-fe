"use client";

import SignIn from "@/components/forms/SignIn";
import { Image } from "@heroui/react";
import Image1 from "@/assets/images/image1.png";

const SignInSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 py-16 min-h-[600px]" id="sign-in">
      <div className="flex justify-center items-center">
        <Image src={Image1.src} alt="image" />
      </div>
      <SignIn />
    </section>
  );
};

export default SignInSection;
