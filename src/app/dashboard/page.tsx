"use client"
import { useState, useEffect } from "react";
import Dashboard from "@/components/Dashboard/Home";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { useAppContext } from "@/components/userContext";
import { useRouter } from 'next/navigation';
import TopArtistas from "@/components/Tables/TopArtistas";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";




export default function Home({searchParams} : {
  searchParams: {
    accesstoken: string;
    password: string
  }


}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [token, setToken] = useState("");

    const userName = searchParams.accesstoken
    const passWord = searchParams.password






  return (
    <>
        <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
       
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} userName = {userName}/>
        
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
      
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          

          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <Dashboard />
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>

    </>
  );
}
