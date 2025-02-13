import Footer from "@/components/layouts/Footer";
import NavBar from "@/components/layouts/NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main className="container *:border-b-2">{children}</main>
      <Footer/>
    </>
  );
}
