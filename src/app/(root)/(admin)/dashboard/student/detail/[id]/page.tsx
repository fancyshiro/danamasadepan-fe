import Admin from "@/components/pages/dashboard/details/Admin";

export default async function DetailStudent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <main className="col-span-5 grid grid-cols-1 xl:grid-cols-6 gap-6">
      <main className="xl:col-span-4">
        <Admin id={id} />
      </main>
    </main>
  );
}
