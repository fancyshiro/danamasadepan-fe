import Admin from "@/components/pages/dashboard/details/Admin";
import TabsAdmin from "@/components/pages/dashboard/details/TabsAdmin";

export default function DetailStudent({ params }: { params: { id: string } }) {
  return (
    <main className="col-span-5 grid grid-cols-1 xl:grid-cols-6 gap-6">
      <main className="xl:col-span-4">
        <Admin id={params.id} />
      </main>
      {/* <main className="xl:col-span-2">
        <TabsAdmin id={params.id} />
      </main> */}
    </main>
  );
}
