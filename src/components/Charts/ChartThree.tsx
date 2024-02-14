import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

import styles from "../../css/genero.module.css"

const ChartThree: React.FC = () => {
 
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-5.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-5">
      
        <h2 className="ml-1 text-xl font-semibold text-white">Genero</h2>
      
      <p className="underline font-semibold text-end mr-1">ver mais</p>
      <div className="flex w-full ">
          <div className="bg-[#845EC2] m-1 py-6 rounded-md text-center capitalize w-[25%]">
            <h2 className="text-white font-bold ">R&B</h2>
          </div>

          <div className="bg-[#D65DB1]  m-1 py-6 rounded-md text-center capitalize w-[37.5%]">
            <h2 className="text-white font-bold  ">Hip-Hop</h2>
          </div>

          <div className="bg-[#FF6F91]  m-1 py-6 rounded-md text-center capitalize w-[37.5%]">
            <h2 className="text-white font-bold ">Gospel</h2>
          </div>
      </div>

      <div className="flex w-full ">
         

          <div className=" bg-[#FF9671]  m-1 py-6 rounded-md text-center capitalize w-[35%]">
            <h2 className="text-white font-bold  ">Amapiano</h2>
          </div>

          <div className=" bg-[#FF8066]  m-1 py-6 rounded-md text-center capitalize w-[35%]">
            <h2 className="text-white font-bold ">Classicas</h2>
          </div>

          <div className="bg-[#AEAE24] m-1 py-6 rounded-md text-center capitalize w-[30%]">
            <h2 className="text-white font-bold">Pop</h2>
          </div>
      </div>

      <div className="flex w-full ">
      <div className="bg-[#229080] m-1 py-6 rounded-md text-center capitalize w-[30%]">
           <h2 className="text-white font-bold">dace</h2>
         </div>

         <div className=" bg-[#D6A64D]  m-1 py-6 rounded-md text-center capitalize w-[35%]">
           <h2 className="text-white font-bold  ">kizomba</h2>
         </div>

         <div className=" bg-[#5167B5]  m-1 py-6 rounded-md text-center capitalize w-[35%]">
           <h2 className="text-white font-bold ">jazz</h2>
         </div>

       
     </div>
    </div>
  );
};

export default ChartThree;
/*
    
          <div className="bg-green-400 m-1 py-6 rounded-md text-center capitalize w-[30%]">
            <h2 className="text-white font-bold ">KIZOM</h2>
          </div>

          <div className=" bg-violet-700  m-1 py-6 rounded-md text-center capitalize w-[35%]">
            <h2 className="text-white font-bold  ">KIZOM</h2>
          </div>

          <div className=" bg-lime-500  m-1 py-6 rounded-md text-center capitalize w-[35%]">
            <h2 className="text-white font-bold ">KIZOM</h2>
          </div>

*/