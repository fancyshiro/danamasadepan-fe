import SplineScene from "@/components/elements/SplineScene";
import Features from "@/components/pages/home/Features";
import Hero from "@/components/pages/home/Hero";
import SignInSection from "@/components/pages/home/SignIn";

export const metadata = {
  title: "Beranda",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <>
      <Hero/>
      <SplineScene scene="https://prod.spline.design/9p5XxKosrmptT8Jb/scene.splinecode" />
      <Features/>
      <SignInSection />
    </>
  );
}
