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
import { GrView } from "react-icons/gr";
import { MdOutlineDeleteForever } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

interface User {
  id: number;
  name: string;
  description: string;
  creationDate: string;
  active: boolean;
}
export default function Home({
  searchParams,
}:{
  searchParams: {
    username: string;
  };
}) {


  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [userData, setUserData] = useState<any[]>([]);
  const userName = searchParams.username


 const [input, setInput] = useState<string>("");
 const [results, setResults] = useState<User[]>([]);

 const fetchData = (value: string) => {
  fetch("https://api.dev.mtoca.net/genre", {
          headers: {
            Authorization: `Bearer ${userName}`
          }
        })
    .then((response) => response.json())
     .then((json: User[]) => {
       const filteredResults = json.filter((user) =>
         value && user.name.toLowerCase().includes(value.toLowerCase())
       );
       setResults(filteredResults);
       console.log(filteredResults)
     });
 };

 const handleChange = (value: string) => {
   fetchData(value);
 };

  



  useEffect(() => {
   
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.dev.mtoca.net/genre/id=${1}`, {
          headers: {
            Authorization: `Bearer ${userName}`
          }
        });
        const data = await res.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData(); // Call the function to fetch data on component mount
  }, []);

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* <!-- Sidebar Start --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} userName={userName} />
        {/* <!-- Sidebar End --> */}

        {/* <!-- Content Area Start --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- Header Start --> */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- Header End --> */}

          {/* <!-- Main Content Start --> */}
          <main className="max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            <div>
              <form action="https://formbold.com/s/unique_form_id" method="POST" className="pb-4">
                <div className="relative">
                  <button className="absolute left-3 top-1/2 -translate-y-1/2">
                    <Image
                      alt="search"
                      width={19}
                      height={19}
                      src={"/images/icon/sideBarIcon/Asset5.png"}
                    />
                  </button>
                  <div className="flex items-center">
                    <input
                     onChange={(e) => handleChange(e.target.value)}
                      type="text"
                      placeholder="Pesquisar o genero de musica..."
                      className="w-full text-white bg-boxdark border border-slate-600  pl-11 pr-2 py-2 font-medium focus:outline-none xl:w-100"
                    />
                    <button className="py-2 px-4 border text-white border-[#cf3f84]">Pesquisar</button>
                  </div>
                </div>
              </form>

              <table className="w-full table-auto bg-boxdark">
                <thead className="">
                  <tr className="text-left">
                    <th className="pt-4 px-4 font-medium text-white xl:pl-8">
                      ID
                    </th>
                    <th className="px-4 font-medium text-white">
                      Name
                    </th>
                    <th className="px-4 min-w-[180px] font-medium text-white">
                      Description
                    </th>
                    <th className="px-4 font-medium text-white">
                      Data Created
                    </th>
                    <th className="px-4 font-medium text-white">
                      State
                    </th>
                    <th className="px-4 font-medium text-white">
                      Action
                    </th>
                  </tr>
                </thead>
              {results.length > 0 ? 
                <tbody>
                {Array.isArray(results) && results
                  .filter(u => u.id >= 0 && u.id <= 11) // Filter IDs from 1 to 10
                  .map(u => (
                    <tr key={u.id}>
                      <td className="border-b px-4 py-4 border-slate-600 xl:pl-8">
                        <div className="text-slate-300">
                          <p>{u.id}</p>
                        </div>
                      </td>
                      <td className="border-b px-4 py-4 border-slate-600 w-[220px]">
                        <p className="text-slate-300">
                          {u.name}
                        </p>
                      </td>
                      <td className="border-b px-4 py-4 border-slate-600">
                        <p className="text-slate-300 text-sm whitespace-nowrap w-[200px] truncate">
                          {u.description}
                        </p>
                      </td>
                      <td className="border-b text-sm px-4 py-4 text-slate-300 border-slate-600">
                        {new Date(u.creationDate).toLocaleDateString('pt-BR')}
                      </td>
                      <td className="border-b px-4 py-4 border-slate-600">
                        <span className={`text-green-700 text-sm py-[0.4rem] px-3 font-medium rounded-full ${u.active ? " bg-green-800 bg-opacity-30" : null}`}>
                          {u.active ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td className="border-b px-4 py-4 border-slate-600 text-slate-300 text-sm">
                        <div className="flex items-center">
                          <GrView size={15} className="mr-2" />
                          <MdOutlineDeleteForever size={20} />
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
              :
              <tbody>
              {Array.isArray(userData) && userData
                .filter(u => u.id >= 0 && u.id <= 7) // Filter IDs from 1 to 10
                .map(u => (
                  <tr key={u.id}>
                    <td className="border-b px-4 py-4 border-slate-600 xl:pl-8">
                      <div className="text-slate-300">
                        <p>{u.id}</p>
                      </div>
                    </td>
                    <td className="border-b px-4 py-4 border-slate-600 w-[220px]">
                      <p className="text-slate-300">
                        {u.name}
                      </p>
                    </td>
                    <td className="border-b px-4 py-4 border-slate-600">
                      <p className="text-slate-300 text-sm whitespace-nowrap w-[200px] truncate">
                        {u.description}
                      </p>
                    </td>
                    <td className="border-b text-sm px-4 py-4 text-slate-300 border-slate-600">
                      {new Date(u.creationDate).toLocaleDateString('pt-BR')}
                    </td>
                    <td className="border-b px-4 py-4 border-slate-600">
                      <span className={`text-green-700 text-sm py-[0.4rem] px-3 font-medium rounded-full ${u.active ? " bg-green-800 bg-opacity-30" : null}`}>
                        {u.active ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="border-b px-4 py-4 border-slate-600 text-slate-300 text-sm">
                      <div className="flex items-center">
                        <GrView size={15} className="mr-2" />
                        <MdOutlineDeleteForever size={20} />
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
              
              }
              </table>

            </div>
   
            <div className="flex items-center text-white mt-3">
              <span className="bg-boxdark border-zinc-500 rounded-sm border py-1 px-3 mr-1">
                1
              </span>
              <span className="border-zinc-500 rounded-sm border py-1 px-3 mr-1">
                2
              </span>
              <span className="border-zinc-500 rounded-sm border py-1 px-3 mr-1">
                3
              </span>
              <span className="border-zinc-500 rounded-sm border py-1 px-3 mr-1">
                4
              </span>
              <span className="border-zinc-500 rounded-sm border py-1 px-2 mr-1">
                <IoIosArrowForward size={23} />
              </span>
            </div>

            <div>
         
            </div>
          </main>
          {/* <!-- Main Content End --> */}
        </div>
        {/* <!-- Content Area End --> */}
      </div>


    </>
  );
}


/*
<tbody>
                  {Array.isArray(userData) && userData
                    .filter(u => u.id >= 0 && u.id <= 7) // Filter IDs from 1 to 10
                    .map(u => (
                      <tr key={u.id}>
                        <td className="border-b px-4 py-4 border-slate-600 xl:pl-8">
                          <div className="text-slate-300">
                            <p>{u.id}</p>
                          </div>
                        </td>
                        <td className="border-b px-4 py-4 border-slate-600 w-[220px]">
                          <p className="text-slate-300">
                            {u.name}
                          </p>
                        </td>
                        <td className="border-b px-4 py-4 border-slate-600">
                          <p className="text-slate-300 text-sm whitespace-nowrap w-[200px] truncate">
                            {u.description}
                          </p>
                        </td>
                        <td className="border-b text-sm px-4 py-4 text-slate-300 border-slate-600">
                          {new Date(u.creationDate).toLocaleDateString('pt-BR')}
                        </td>
                        <td className="border-b px-4 py-4 border-slate-600">
                          <span className={`text-green-700 text-sm py-[0.4rem] px-3 font-medium rounded-full ${u.active ? " bg-green-800 bg-opacity-30" : null}`}>
                            {u.active ? 'Active' : 'Inactive'}
                          </span>
                        </td>
                        <td className="border-b px-4 py-4 border-slate-600 text-slate-300 text-sm">
                          <div className="flex items-center">
                            <GrView size={15} className="mr-2" />
                            <MdOutlineDeleteForever size={20} />
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
*/