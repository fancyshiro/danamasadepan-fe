import React from "react";
import Contact from "../forms/Contact";

const navigationLinks = [
  { name: "Beranda", path: "/" },
  { name: "Search", path: "/search" },
  { name: "Register", path: "/register" },
  { name: "Profil", path: "/profile" },
  { name: "Bantuan", path: "/bantuan" },
];

const legalLinks = [
  { name: "Terms of Service", path: "/terms" },
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Disclaimer", path: "/disclaimer" },
];

const resourcesLinks = [
  { name: "Blog", path: "/blog" },
  { name: "FAQ", path: "/faq" },
  { name: "Panduan Pengguna", path: "/guide" },
];


const Footer = () => {
  return (
    <>
      <main
        style={{
          backgroundImage: "url('/cover/bg17.png')",
          width: "100%",
          minHeight: "500px",
          backgroundSize: "cover",
        }}
      >
        <div className="container py-16">
          <Contact />
        </div>
      </main>
      <footer className="bg-zinc-900">
        <div className="container *:text-white py-16 grid lg:grid-cols-12 gap-y-8 lg:gap-x-8">
          <div className="col-span-5 space-y-2">
            <h3>Dana Masa Depan</h3>
            <p className="text-zinc-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              sequi molestiae explicabo eum facilis voluptates doloribus
              veritatis debitis quod accusantium!
            </p>
          </div>
          <div className="col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-y-8">
            <div>
              <span className="font-semibold">Menu</span>
              <ul className="flex flex-col mt-4 gap-4">
                {navigationLinks.map((item) => (
                  <a key={item.path} href={item.path}>
                    {item.name}
                  </a>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-semibold">Legal</span>
              <ul className="flex flex-col mt-4 gap-4">
                {legalLinks.map((item) => (
                  <a key={item.path} href={item.path}>
                    {item.name}
                  </a>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-semibold">Sumber Daya</span>
              <ul className="flex flex-col mt-4 gap-4">
                {resourcesLinks.map((item) => (
                  <a key={item.path} href={item.path}>
                    {item.name}
                  </a>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="container py-4 border-t border-zinc-800">
          <p className="text-zinc-100">
            &copy; 2023 Dana Masa Depan. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
