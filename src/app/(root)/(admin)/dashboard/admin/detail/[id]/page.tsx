import Admin from "@/components/pages/dashboard/details/Admin";
import TabsAdmin from "@/components/pages/dashboard/details/TabsAdmin";

export default async function DetailAdmin({ params }: { params: Promise<{ id: string }>}) {
  const { id } = await params; 

  return (
    <main className="col-span-4 xl:col-span-5 grid grid-cols-1 xl:grid-cols-6 gap-6">
      <main className="xl:col-span-4">
        <Admin id={id} />
      </main>
      <main className="xl:col-span-2">
        <TabsAdmin id={id} />
      </main>
    </main>
  );
}
