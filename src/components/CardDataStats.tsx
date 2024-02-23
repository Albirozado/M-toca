import React, { ReactNode } from "react";

interface CardDataStatsProps {
  title: string;
  total: string;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  children,
}) => {
  return (
    <div className="rounded-sm border px-7 py-4 shadow-default border-strokedark bg-boxdark">
      <div className="flex items-center">
        <div className="">
          {children}
        </div>
        <div className="flex items-end justify-between  pl-3">
          <div>
            <h4 className="text-xl font-bold text-white">{title}</h4>
            <span className=" text-sm font-medium text-slate-300">
              {total}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CardDataStats;
