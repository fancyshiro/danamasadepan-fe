import NavDash from "@/components/layouts/NavDash";
import SideBarDash from "@/components/layouts/SideBarDash";

export const metadata = {
  title: "Dashboard",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavDash />
      <section className="mx-auto lg:max-w-[1324px] px-6">
        <main className="grid lg:grid-cols-5 xl:grid-cols-6 gap-8 mt-8">
          <SideBarDash />
          {children}
        </main>
      </section>
    </>
  );
}
