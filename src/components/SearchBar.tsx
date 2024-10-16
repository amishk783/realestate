import line from "../assets/Line.png";
import { CalendarDays, Search } from "lucide-react";
export const SearchBar = () => {
  return (
    <div className=" md:min-w-[643px] max-sm:mr-4 lg:min-w-[783px] pt-8 xl:pt-10 z-100">
      <div className="flex flex-col w-full ">
        <div className="flex w-full max-sm:justify-between sm:w-max z-10 rounded-md bg-white ">
          <div className="px-8 py-3 w-full ">Rent</div>
          <div className="px-8 py-3  w-full">Buy</div>
          <div className="px-8 py-3  w-full border-b-2 border-purple-400">
            sell
          </div>
        </div>

        <div className="w-full px-4 py-4  bg-white rounded-md">
          <div className="flex items-center gap-4 xl:gap-10  pt-2">
            <div className="flex flex-col w-[80%] xl:w-full  ">
              <p className=" text-slate-500 max-sm:text-md">Location</p>
              {/* <input type="text" className=" outline-none" />
               */}
              <p className=" font-bold text-lg max-sm:hidden">
                Barcelona, Spain
              </p>
            </div>
            <img className="max-sm:hidden" src={line}></img>
            <div className="flex flex-col w-full  max-sm:hidden">
              <p className=" text-slate-500">When</p>
              {/* <input
                type="text"
                className=" outline-purple-500 bg-yellow-100"
              /> */}
              <div className="flex gap-5 ">
                <p className=" font-bold text-lg whitespace-nowrap">
                  Select Move-in Date
                </p>
                <CalendarDays />
              </div>
            </div>
            <img className="max-sm:hidden" src={line}></img>
            <button className="sm:hidden">
              {" "}
              <Search className=" text-primary" />
            </button>
            <div className="flex flex-col w-full max-sm:hidden">
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
