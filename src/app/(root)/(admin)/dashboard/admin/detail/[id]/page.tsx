import Admin from "@/components/pages/dashboard/details/Admin";

export default function DetailAdmin({ params }: { params: { id: string } }) {

  return (
    <main className="col-span-4 xl:col-span-3 p-4">
      <Admin id={params.id}/>
    </main>
  );
}
