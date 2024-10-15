import React from "react";
import line from "../assets/Line.png";
import { CalendarDays } from "lucide-react";
export const SearchBar = () => {
  return (
    <div className=" xl:min-w-[783px] pt-10 z-100">
      <div className="flex flex-col w-full ">
        <div className="flex w-max z-10 rounded-md bg-white ">
          <div className="px-8 py-3">Rent</div>
          <div className="px-8 py-3">Buy</div>
          <div className="px-8 py-3 border-b-2 border-purple-400">sell</div>
        </div>

        <div className="w-full px-4 py-4  bg-white">
          <div className="flex items-center gap-10  pt-2">
            <div className="flex flex-col w-full ">
              <p className=" text-slate-500">Location</p>
              {/* <input type="text" className=" outline-none" />
               */}
              <p className=" font-bold text-lg">Barcelona, Spain</p>
            </div>
            <img className="" src={line}></img>
            <div className="flex flex-col w-full ">
              <p className=" text-slate-500">When</p>
              {/* <input
                type="text"
                className=" outline-purple-500 bg-yellow-100"
              /> */}
              <div className="flex gap-5 ">
                <p className=" font-bold text-lg whitespace-nowrap" >Select Move-in Date</p>
                <CalendarDays />
              </div>
            </div>
            <img className="" src={line}></img>
            <div className="flex flex-col w-full">
              <button className="bg-primary px-2 py-3 w-full h-12 rounded-md text-white">
                Browse Properties
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
