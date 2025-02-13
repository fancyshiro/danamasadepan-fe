import ListTransaksi from "@/components/elements/ListTransaksi";
import Student from "@/components/pages/dashboard/details/Student";

export default async function DetailStudent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="col-span-4 xl:col-span-5 grid grid-cols-1 lg:grid-cols-6 gap-6">
      <Student id={id} className="lg:col-span-4" />
      <ListTransaksi id={id} role="student" className="lg:col-span-2 bg-white dark:bg-neutral-900/70 p-4 rounded-xl border shadow-md" />
    </main>
  );
}
