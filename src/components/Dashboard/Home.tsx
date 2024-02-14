"use client";
import React from "react";
import ChartThree from "../Charts/ChartThree";
import CardDataStats from "../CardDataStats";
import { FaMusic } from "react-icons/fa";
import { IoIosAlbums } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import TableThree from "../Tables/TableThree";
import TopArtistas from "../Tables/TopArtistas.jsx";
const ECommerce: React.FC = () => {
  return (
    <>
    
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        <CardDataStats title="Musicas" total= "25.958" >
          <div className="py-2 pr-4 pl-2 bg-[#C32867] rounded-md">
            <FaMusic size={40} color="white" />
          </div>
        </CardDataStats>

        <CardDataStats title="Albuns" total="159.259" >
          <div className="py-2 px-4 bg-[#08870D] rounded-md">
            <IoIosAlbums size={40} color="white"/>
          </div>
        </CardDataStats>

        <CardDataStats title="Likes" total="589.258" >
          <div className="py-2 px-4 bg-[#C11B1B] rounded-md">
            <FaHeart size={40} color="white"/>
         </div>
        </CardDataStats>

        <CardDataStats title="Podcast" total="10.259" >
        <div className="py-2 px-4 bg-[#D67C2C] rounded-md">
            <FaMicrophoneAlt size={40} color="white"/>
         </div>
        </CardDataStats>

        <CardDataStats title="Usuarios" total="50.259" >
        <div className="py-2 px-4 bg-[#2180D9] rounded-md">
            <FaUserLarge size={40} color="white"/>
         </div>
        </CardDataStats>

        <CardDataStats title="Downloads" total="85.258" >
        <div className="py-2 px-4 bg-[#2C7F84] rounded-md">
            <FiDownload size={40} color="white" />
         </div>
        </CardDataStats>
      </div>
    <div>
      <TopArtistas/>
    </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartThree />
        <TableThree/>
      </div>
    </>
  );
}

export default ECommerce;
