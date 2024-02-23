"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarLinkGroup from "./SidebarLinkGroup";
import { IoIosArrowForward } from "react-icons/io";
import { BiMusic, BiSolidDashboard } from "react-icons/bi";
import { PiMusicNotes } from "react-icons/pi";
import { CgMenuGridR } from "react-icons/cg";
import { GiBackwardTime } from "react-icons/gi";
import { ImFileMusic } from "react-icons/im";
import { LuMic2 } from "react-icons/lu";
import { HiOutlineUsers } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi";
import { GrUserSettings } from "react-icons/gr";
import { TbUserUp } from "react-icons/tb";
import { AiOutlineDollar } from "react-icons/ai";
import { PiUserCircle } from "react-icons/pi";
import Dash from "../../../public/images/icon/sideBarIcon/dash.png"
import Actividades from "../../../public/images/icon/sideBarIcon/Actividade.png"
import Admins from "../../../public/images/icon/sideBarIcon/Admins.png"
import Client from "../../../public/images/icon/sideBarIcon/Client.png"
import Dollar from "../../../public/images/icon/sideBarIcon/dollar.png"
import Jobs from "../../../public/images/icon/sideBarIcon/jobs.png"
import Artist from "../../../public/images/icon/sideBarIcon/artist.png"
import User from "../../../public/images/icon/sideBarIcon/user.png"
import Users from "../../../public/images/icon/sideBarIcon/Users.png"
import Upload from "../../../public/images/icon/sideBarIcon/upload.png"
import Moods from "../../../public/images/icon/sideBarIcon/Moods.png"
import MusicIcon from "../../../public/images/icon/sideBarIcon/MusicIcon.png"
import Perfil from "../../../public/images/icon/sideBarIcon/perfil.png"
import Logo from "../../../public/images/icon/sideBarIcon/M-tocalogo-(1).png"






interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true",
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden duration-300 ease-linear bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 pt-2">
        <Link href="/">
          <Image
          className="pt-2"
            width={200}
            height={200}
            src={"/images/icon/sideBarIcon/M-tocalogo-(1).png"}
            alt="Logo"
            priority
          />
        </Link>


      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 px-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              Menu
            </h3>

            <ul className="mb-2 flex flex-col gap-1.5">
              {/* <!-- Menu Item Dashboard --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/" || pathname.includes("dashboard")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          (pathname === "/" ||
                            pathname.includes("dashboard")) &&
                          "bg-graydark dark:bg-meta-4"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <Image
                        alt="image"
                        width={19}
                        height={19}
                        src={Dash}

                        />
                       
                        Dashboard
                        <IoIosArrowForward className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && "rotate-90"
                          }`}/>
                      
                      </Link>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                          <li className="flex px-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                            <Link
                              href="/"
                              className={`group relative flex items-center gap-2.5 rounded-md pl-2 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                pathname === "/" && "text-white"
                              }`}
                            >
                              Home
                            </Link>
                          </li>
                        </ul>
                        
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
             
            </ul>

            <ul className="mb-2 flex flex-col gap-1.5">
              {/* <!-- Menu Item Dashboard --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/music" || pathname.includes("albuns")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                      
                        href="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out  ${
                          open &&
                          " bg-slate-600 "
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(false);
                        }}
                      >
                        <Image
                        alt="image"
                        width={19}
                        height={19}
                        src={MusicIcon}

                        />
                       
                        Musicas
                        <IoIosArrowForward className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && "rotate-90"
                          }`}/>
                      
                      </Link>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <ul className="mb-5.5 flex flex-col gap-2.5 bg-slate-700 ">
                         
                          <li>
                          <SidebarLinkGroup
                            activeCondition={
                              pathname === "/forms" || pathname.includes("forms")
                            }
                          >
                            {(handleClick, open) => {
                              return (
                                <React.Fragment>
                                  <Link
                                    href="#"
                                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                      (pathname === "/forms" ||
                                        pathname.includes("forms")) &&
                                      "bg-graydark dark:bg-meta-4"
                                    }`}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      sidebarExpanded
                                        ? handleClick()
                                        : setSidebarExpanded(true);
                                    }}
                                  >
                                   <Image
                        alt="image"
                        width={19}
                        height={19}
                        src={Moods}

                        />
                                    Moods

                                    <IoIosArrowForward className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                                      open && "rotate-90"
                                    }`}/>
                                  </Link>
                                  {/* <!-- Dropdown Menu Start --> */}
                                  <div
                                    className={`translate transform overflow-hidden ${
                                      !open && "hidden"
                                    }`}
                                  >
                                    <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                                      <li>
                                        <Link
                                          href="/forms/form-elements"
                                          className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                            pathname === "/forms/form-elements" &&
                                            "text-white"
                                          }`}
                                        >
                                          Album Elements
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          href="/forms/form-layout"
                                          className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                            pathname === "/forms/form-layout" &&
                                            "text-white"
                                          } `}
                                        >
                                          Album Layout
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  {/* <!-- Dropdown Menu End --> */}
                                </React.Fragment>
                              );
                            }}
                          </SidebarLinkGroup>
                          </li>
                          <li>
                          <SidebarLinkGroup
                            activeCondition={
                              pathname === "/forms" || pathname.includes("forms")
                            }
                          >
                            {(handleClick, open) => {
                              return (
                                <React.Fragment>
                                  <Link
                                    href="#"
                                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                      (pathname === "/forms" ||
                                        pathname.includes("forms")) &&
                                      "bg-graydark dark:bg-meta-4"
                                    }`}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      sidebarExpanded
                                        ? handleClick()
                                        : setSidebarExpanded(true);
                                    }}
                                  >
                                   <Image
                        alt="image"
                        width={19}
                        height={19}
                        src={MusicIcon}

                        />
                                    Genero

                                    <IoIosArrowForward className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                                      open && "rotate-90"
                                    }`}/>
                                  </Link>
                                  {/* <!-- Dropdown Menu Start --> */}
                                  <div
                                    className={`translate transform overflow-hidden ${
                                      !open && "hidden"
                                    }`}
                                  >
                                    <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                                      <li>
                                        <Link
                                          href="/forms/form-elements"
                                          className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                            pathname === "/forms/form-elements" &&
                                            "text-white"
                                          }`}
                                        >
                                          Album Elements
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          href="/forms/form-layout"
                                          className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                            pathname === "/forms/form-layout" &&
                                            "text-white"
                                          } `}
                                        >
                                          Album Layout
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  {/* <!-- Dropdown Menu End --> */}
                                </React.Fragment>
                              );
                            }}
                          </SidebarLinkGroup>
                          </li>
                          <li>
                          <SidebarLinkGroup
                            activeCondition={
                              pathname === "/forms" || pathname.includes("forms")
                            }
                          >
                            {(handleClick, open) => {
                              return (
                                <React.Fragment>
                                  <Link
                                    href="#"
                                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                      (pathname === "/forms" ||
                                        pathname.includes("forms")) &&
                                      "bg-graydark"
                                    }`}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      sidebarExpanded
                                        ? handleClick()
                                        : setSidebarExpanded(true);
                                    }}
                                  >
                                   <Image
                        alt="image"
                        width={19}
                        height={19}
                        src={Actividades}

                        />
                                    Actividades

                                    <IoIosArrowForward className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                                      open && "rotate-90"
                                    }`}/>
                                  </Link>
                                  {/* <!-- Dropdown Menu Start --> */}
                                  <div
                                    className={`translate transform overflow-hidden ${
                                      !open && "hidden"
                                    }`}
                                  >
                                    <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                                      <li>
                                        <Link
                                          href="/forms/form-elements"
                                          className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                            pathname === "/forms/form-elements" &&
                                            "text-white"
                                          }`}
                                        >
                                          Album Elements
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          href="/forms/form-layout"
                                          className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                            pathname === "/forms/form-layout" &&
                                            "text-white"
                                          } `}
                                        >
                                          Album Layout
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  {/* <!-- Dropdown Menu End --> */}
                                </React.Fragment>
                              );
                            }}
                          </SidebarLinkGroup>
                          </li>
                        </ul>
                        
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

            
              <li>
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/forms" || pathname.includes("forms")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          (pathname === "/forms" ||
                            pathname.includes("forms")) &&
                          "bg-graydark dark:bg-meta-4"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                       <Image
                        alt="image"
                        width={19}
                        height={19}
                        src={Jobs}

                        />
                        Jobs

                        <IoIosArrowForward className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                          open && "rotate-90"
                        }`}/>
                      </Link>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                          <li>
                            <Link
                              href="/forms/form-elements"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                pathname === "/forms/form-elements" &&
                                "text-white"
                              }`}
                            >
                              Album Elements
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/forms/form-layout"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                pathname === "/forms/form-layout" &&
                                "text-white"
                              } `}
                            >
                              Album Layout
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              </li>
              <li>
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/forms" || pathname.includes("forms")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          (pathname === "/forms" ||
                            pathname.includes("forms")) &&
                          "bg-graydark dark:bg-meta-4"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                       <Image
                        alt="image"
                        width={19}
                        height={19}
                        src={Artist}

                        />
                        Artistas

                        <IoIosArrowForward className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                          open && "rotate-90"
                        }`}/>
                      </Link>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                          <li>
                            <Link
                              href="/forms/form-elements"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                pathname === "/forms/form-elements" &&
                                "text-white"
                              }`}
                            >
                              Album Elements
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/forms/form-layout"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                pathname === "/forms/form-layout" &&
                                "text-white"
                              } `}
                            >
                              Album Layout
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              </li>
          
            </ul>

            <ul className="mb-2 flex flex-col gap-1.5">
              {/* <!-- Menu Item Dashboard --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/music" || pathname.includes("albuns")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                      
                        href="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out  ${
                          open &&
                          " bg-slate-600 "
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(false);
                        }}
                      >
                        <Image
                        alt="image"
                        width={19}
                        height={19}
                        src={Users}

                        />
                       
                        Usuarios
                        <IoIosArrowForward className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && "rotate-90"
                          }`}/>
                      
                      </Link>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <ul className="mb-5.5 flex flex-col gap-2.5 bg-slate-700 ">
                         
                          <li>
                          <SidebarLinkGroup
                            activeCondition={
                              pathname === "/forms" || pathname.includes("forms")
                            }
                          >
                            {(handleClick, open) => {
                              return (
                                <React.Fragment>
                                  <Link
                                    href="#"
                                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                      (pathname === "/forms" ||
                                        pathname.includes("forms")) &&
                                      "bg-graydark dark:bg-meta-4"
                                    }`}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      sidebarExpanded
                                        ? handleClick()
                                        : setSidebarExpanded(true);
                                    }}
                                  >
                                   <Image
                        alt="image"
                        width={19}
                        height={19}
                        src={Client}

                        />
                                    Clientes

                                    <IoIosArrowForward className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                                      open && "rotate-90"
                                    }`}/>
                                  </Link>
                                  {/* <!-- Dropdown Menu Start --> */}
                                  <div
                                    className={`translate transform overflow-hidden ${
                                      !open && "hidden"
                                    }`}
                                  >
                                    <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                                      <li>
                                        <Link
                                          href="/forms/form-elements"
                                          className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                            pathname === "/forms/form-elements" &&
                                            "text-white"
                                          }`}
                                        >
                                          Album Elements
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          href="/forms/form-layout"
                                          className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                            pathname === "/forms/form-layout" &&
                                            "text-white"
                                          } `}
                                        >
                                          Album Layout
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  {/* <!-- Dropdown Menu End --> */}
                                </React.Fragment>
                              );
                            }}
                          </SidebarLinkGroup>
                          </li> 

                          <li>
                          <SidebarLinkGroup
                            activeCondition={
                              pathname === "/forms" || pathname.includes("forms")
                            }
                          >
                            {(handleClick, open) => {
                              return (
                                <React.Fragment>
                                  <Link
                                    href="#"
                                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                      (pathname === "/forms" ||
                                        pathname.includes("forms")) &&
                                      "bg-graydark dark:bg-meta-4"
                                    }`}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      sidebarExpanded
                                        ? handleClick()
                                        : setSidebarExpanded(true);
                                    }}
                                  >
                                   <Image
                        alt="image"
                        width={19}
                        height={19}
                        src={Admins}

                        />
                                    Admins

                                    <IoIosArrowForward className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                                      open && "rotate-90"
                                    }`}/>
                                  </Link>
                                  {/* <!-- Dropdown Menu Start --> */}
                                  <div
                                    className={`translate transform overflow-hidden ${
                                      !open && "hidden"
                                    }`}
                                  >
                                    <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                                      <li>
                                        <Link
                                          href="/forms/form-elements"
                                          className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                            pathname === "/forms/form-elements" &&
                                            "text-white"
                                          }`}
                                        >
                                          Album Elements
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          href="/forms/form-layout"
                                          className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                            pathname === "/forms/form-layout" &&
                                            "text-white"
                                          } `}
                                        >
                                          Album Layout
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  {/* <!-- Dropdown Menu End --> */}
                                </React.Fragment>
                              );
                            }}
                          </SidebarLinkGroup>
                          </li>
                          <li>
                          <SidebarLinkGroup
                            activeCondition={
                              pathname === "/forms" || pathname.includes("forms")
                            }
                          >
                            {(handleClick, open) => {
                              return (
                                <React.Fragment>
                                  <Link
                                    href="#"
                                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                      (pathname === "/forms" ||
                                        pathname.includes("forms")) &&
                                      "bg-graydark dark:bg-meta-4"
                                    }`}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      sidebarExpanded
                                        ? handleClick()
                                        : setSidebarExpanded(true);
                                    }}
                                  >
                                   <Image
                        alt="image"
                        width={19}
                        height={19}
                        src={Upload}

                        />
                                    Uploaders

                                    <IoIosArrowForward className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                                      open && "rotate-90"
                                    }`}/>
                                  </Link>
                                  {/* <!-- Dropdown Menu Start --> */}
                                  <div
                                    className={`translate transform overflow-hidden ${
                                      !open && "hidden"
                                    }`}
                                  >
                                    <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                                      <li>
                                        <Link
                                          href="/forms/form-elements"
                                          className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                            pathname === "/forms/form-elements" &&
                                            "text-white"
                                          }`}
                                        >
                                          Album Elements
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          href="/forms/form-layout"
                                          className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                            pathname === "/forms/form-layout" &&
                                            "text-white"
                                          } `}
                                        >
                                          Album Layout
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  {/* <!-- Dropdown Menu End --> */}
                                </React.Fragment>
                              );
                            }}
                          </SidebarLinkGroup>
                          </li>
                        </ul>
                        
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

            
             
              <li>
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/forms" || pathname.includes("forms")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          (pathname === "/forms" ||
                            pathname.includes("forms")) &&
                          "bg-graydark dark:bg-meta-4"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                       <Image
                        alt="image"
                        width={19}
                        height={19}
                        src={Dollar}

                        />
                        Pagamentos

                        <IoIosArrowForward className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                          open && "rotate-90"
                        }`}/>
                      </Link>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                          <li>
                            <Link
                              href="/forms/form-elements"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                pathname === "/forms/form-elements" &&
                                "text-white"
                              }`}
                            >
                              Album Elements
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/forms/form-layout"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                pathname === "/forms/form-layout" &&
                                "text-white"
                              } `}
                            >
                              Album Layout
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              </li>
          
            </ul>

            
            
          
          </div>
            
          



          {/* <!-- Others Group --> */}
          <div>
            <h3 className="mb-4 mt-4 ml-2 text-sm font-semibold text-bodydark2">
              Outros
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Chart --> */}
              <li>
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/forms" || pathname.includes("forms")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          (pathname === "/forms" ||
                            pathname.includes("forms")) &&
                          "bg-graydark dark:bg-meta-4"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                       <Image
                        alt="image"
                        width={19}
                        height={19}
                        src={Perfil}

                        />
                        Meu Perfil

                        <IoIosArrowForward className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                          open && "rotate-90"
                        }`}/>
                      </Link>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                          <li>
                            <Link
                              href="/forms/form-elements"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                pathname === "/forms/form-elements" &&
                                "text-white"
                              }`}
                            >
                              Album Elements
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/forms/form-layout"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                pathname === "/forms/form-layout" &&
                                "text-white"
                              } `}
                            >
                              Album Layout
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              </li>
              {/* <!-- Menu Item Chart --> */}
              <li>
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/forms" || pathname.includes("forms")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          (pathname === "/forms" ||
                            pathname.includes("forms")) &&
                          "bg-graydark dark:bg-meta-4"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                       <Image
                        alt="image"
                        width={19}
                        height={19}
                        src={Dash}

                        />
                        Logout

                        <IoIosArrowForward className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                          open && "rotate-90"
                        }`}/>
                      </Link>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                          <li>
                            <Link
                              href="/forms/form-elements"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                pathname === "/forms/form-elements" &&
                                "text-white"
                              }`}
                            >
                              Album Elements
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/forms/form-layout"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                pathname === "/forms/form-layout" &&
                                "text-white"
                              } `}
                            >
                              Album Layout
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              </li>

            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
