"use client"
import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { GrView } from "react-icons/gr";
import { MdOutlineDeleteForever } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { FaPlus } from "react-icons/fa6";

interface User {
  id: number;
  jobName: string;
  jobType: string

}
export default function Jobs({searchParams} : {
    searchParams: {
      username: string;
    }
  
  
  }) {
    const userName = searchParams.username
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [userData, setUserData] = useState<any[]>([]);

    useEffect(() => {
   
      const fetchData = async () => {
        try {
          const res = await fetch("https://api.dev.mtoca.net/jobs", {
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

    const [input, setInput] = useState<string>("");
 const [results, setResults] = useState<User[]>([]);

 const fetchData = (value: string) => {
  fetch("https://api.dev.mtoca.net/jobs", {
          headers: {
            Authorization: `Bearer ${userName}`
          }
        })
    .then((response) => response.json())
     .then((json: User[]) => {
       const filteredResults = json.filter((user) =>
         value && user.jobName.toLowerCase().includes(value.toLowerCase()) || user.jobType.toLowerCase().includes(value.toLowerCase()) 
       );
       setResults(filteredResults);
       console.log(filteredResults)
     });
 };

 const handleChange = (value: string) => {
   fetchData(value);
 };


return(
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
          <div className="flex justify-between">
            <div className="flex">
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
                    className="w-full text-white bg-boxdark border border-slate-600  pl-11 pr-2 py-2 font-medium focus:outline-none xl:w-75"
                  />
                  <button className="py-2 px-4 border text-white border-[#cf3f84]">Pesquisar</button>
                </div>
              </div>
              <button type="button" className=" mx-2 text-white border-slate-600 border relative cursor-default rounded-sm bg-boxdark py-1.5 pl-3 pr-10 text-left shadow-sm sm:text-sm sm:leading-6" aria-labelledby="listbox-label">
                  <span className="flex items-center">
                    <span className="mx-3 block truncate">Job Genre</span>
                  </span>
                  <span className="pointer-events-none absolute border-slate-600 border-l inset-y-0 right-0 lex items-center p-2 ">
                    <IoIosArrowDown size={20}/>
                  </span>
              </button>

              <button type="button" className=" mr-2 text-white border-slate-600 border relative cursor-default rounded-sm bg-boxdark py-1.5 pl-3 pr-10 text-left shadow-sm sm:text-sm sm:leading-6" aria-labelledby="listbox-label">
                  <span className="flex items-center">
                    <span className="mx-3 block truncate">Job Type</span>
                  </span>
                  <span className="pointer-events-none absolute border-slate-600 border-l inset-y-0 right-0 lex items-center p-2 ">
                    <IoIosArrowDown size={20}/>
                  </span>
              </button>

              <button type="button" className="text-white border-slate-600 border relative cursor-default rounded-sm bg-boxdark py-1.5 pl-3 pr-10 text-left shadow-sm sm:text-sm sm:leading-6" aria-labelledby="listbox-label">
                  <span className="flex items-center">
                    <span className="mx-3 block truncate">Data Realise</span>
                  </span>
                  <span className="pointer-events-none absolute border-slate-600 border-l inset-y-0 right-0 lex items-center p-2 ">
                    <IoIosArrowDown size={20}/>
                  </span>
              </button>
            </div>
            <div>
              <button type="button" className=" flex items-center px-4 text-white bg-[#cf3f84] relative cursor-default rounded-sm py-2  text-left shadow-sm sm:text-sm sm:leading-6" aria-labelledby="listbox-label">
                  <span className="flex items-center">
                    <span className="block truncate font-medium">Adicionar</span>
                  </span>
                  <span className="ml-[3px]">
                  <FaPlus  size={10} className="font-medium"/>
                  </span>
              </button>
            </div>
          </div>
        </form>

        <table className="w-full table-auto bg-boxdark">
          <thead className="">
            <tr className="text-left">
              <th className="pt-4 px-4 font-medium text-white xl:pl-8">
                Image
              </th>
              <th className="px-4 font-medium text-white">
                Artist Name
              </th>
              <th className="px-4 font-medium text-white">
                Job Genre
              </th>
              <th className="px-4 font-medium text-white">
                job Type
              </th>
              <th className="px-4 font-medium text-white">
                Job Name
              </th>
              <th className="px-4 font-medium text-white">
                Description
              </th>
              <th className="px-4 font-medium text-white">
                Data Realise
              </th>
              <th className="px-4 font-medium text-white">
                Artist Username
              </th>
              <th className="px-4 font-medium text-white">
                Action
              </th>
            </tr>
          </thead>
          
          {Array.isArray(userData) && userData
                .filter(u => u.id >= 0 && u.id <= 8) // Filter IDs from 1 to 10
                .map(u => (
                  <tbody>
       
                <tr>
                  <td className="border-b px-4 py-4 border-slate-600 xl:pl-8">
                    <div className="text-slate-300">
                      <p>Image</p>
                      <Image
                      src={u.photo.href}
                      width={100}
                      height={100}
                      alt="photo"
                      />

                    </div>
                  </td>
                  <td className="border-b px-4 py-4 border-slate-600">
                    <p className="text-slate-300">
                      {u.artistName}
                    </p>
                  </td>
                  <td className="border-b px-4 py-4 border-slate-600">
                    <p className="text-slate-300 text-sm whitespace-nowrap truncate">
                      {u.jobGenre}
                    </p>
                  </td>
                  <td className="border-b text-sm px-4 py-4 text-slate-300 border-slate-600">
                 {u.jobType}
                  </td>
                  <td className="border-b px-4 py-4 border-slate-600">
                    <span className={` text-sm px-4 py-4 text-slate-300  `}>
                     {u.jobName}
                    </span>
                  </td>
                  <td className="border-b px-4 py-4 border-slate-600">
                    <span className={` text-sm px-4 py-4 text-slate-300 `}>
                     Null
                    </span>
                  </td>
                  <td className="border-b px-4 py-4 border-slate-600">
                    <span className={` text-sm px-4 py-4 text-slate-300 `}>
                     {u.releaseDate}
                    </span>
                  </td>
                  <td className="border-b px-4 py-4 border-slate-600">
                    <span className={` text-sm px-4 py-4 text-slate-300  `}>
                     {u.artistUsername}
                    </span>
                  </td>
                  <td className="border-b px-4 py-4 border-slate-600 text-slate-300 text-sm">
                    <div className="flex items-center">
                      <GrView size={15} className="mr-2" />
                      <MdOutlineDeleteForever size={20} />
                    </div>
                  </td>
                </tr>
            
          </tbody>
                ))}
         
        
        
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
)
}