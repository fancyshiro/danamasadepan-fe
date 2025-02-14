import Student from "@/components/pages/dashboard/details/Student";

export default async function DetailPage({params}: {params: Promise<{id: string }>}) {
  const { id } = await params
  
  return (
    <div>
      {/* <Student id={id}/> */}
    </div>
  );
}