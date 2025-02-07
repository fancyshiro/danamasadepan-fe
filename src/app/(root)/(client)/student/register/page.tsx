import RegisterSection from "@/components/pages/Register";

export const metadata = {
  title: "Register",
}

export default function Register() {
  return (
    <main className="container py-16 border">
      <RegisterSection/>
    </main>
  );
}