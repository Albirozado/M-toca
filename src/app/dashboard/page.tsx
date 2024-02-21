import Dashboard from "@/components/Dashboard/Home";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import DataFecth from "@/components/dataFecth";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};


export default async function Home() {
    
  return (
    <>
      <DefaultLayout>
        <Dashboard />
        
      </DefaultLayout>
    </>
  );
}
