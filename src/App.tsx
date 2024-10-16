import "./App.css";
import { benefits, properties } from "./constants";
import rentIcon from "./assets/rentIcon.png";
import sellIcon from "./assets/sell.png";
import rentIcon1 from "./assets/rent.png";
import favorited from "./assets/Favorited.png";
import buyIcon from "./assets/buy.png";
import homeIcon from "./assets/homeIcon.png";

import popularIcon from "./assets/popularIcon.png";
import { SearchBar } from "./components/SearchBar";
import textIcon from "./assets/textIcon.png";
import homeIcon2 from "./assets/homeIcon2.png";
import videoIcon from "./assets/videoIcon.png";
import line from "./assets/Line.png";
import heroBg from "./assets/heroBgImage.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Search } from "lucide-react";
import { PropertyCard } from "./components/PropertyCard";
function App() {
  return (
    <main className="flex flex-col">
      {/* hero section */}
      <div className="py-16 xl:py-20 bg-gradient-to-b  w-full  from-[--secondary-color] to-white min-h-[700px] lg:min-h-[900px]">
        <div className="flex w-full h-full overflow-hidden  absolute z-10 justify-end -mt-20 xl:-mt-32   xl:ml-0 2xl:ml-0  ">
          <div className="2xl:bg-hero w-full  h-full    bg-no-repeat bg-right-top"></div>
          <img
            className="max-md:hidden -mr-64 w-[736px] h-[636px] xl:h-full xl:w-[636px] 2xl:hidden "
            src={heroBg}
          ></img>
        </div>

        <div className=" absolute ml-5 md:ml-20 xl:ml-24 2xl:ml-44 z-50 ">
          <div className="md:w-2/3 lg:w-1/2 flex flex-col gap-2 xl:gap-5 ">
            <h1 className=" text-5xl xl:text-6xl font-bold z-20">
              Buy,rent,or sell your property easily
            </h1>
            <p className=" max-lg:w-[90%] font-medium text-md  ">
              A great platform to buy, sell, or even rent your properties
              without any commisions.
            </p>
            <SearchBar />
          </div>
          <div className="flex gap-5 xl:gap-20 py-8 xl:py-16">
            <div className="flex flex-col gap-3 lg:gap-6">
              <img src={rentIcon} alt="icon" className="w-16 h-16"></img>
              <div className="flex flex-col">
                <h4 className="text-primary text-2xl font-bold">
                  50K+ renters
                </h4>
                <p className="">believe in our service</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 lg:gap-6">
              <img src={homeIcon} alt="icon" className="w-16 h-16"></img>
              <div className="flex flex-col">
                <h4 className="text-primary text-2xl font-bold">
                  10K+ properties
                </h4>
                <p className="">and house ready for occupancy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* benefits */}
      <div className="w-full pt-20 xl:max-container">
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-20 w-full items-center">
          <div className="w-[90%] xl:w-2/5 h-[500px] relative bg-[#F7F7FD] rounded-md border-purple-300">
            <div className="bg-home z-10 absolute w-full h-full bg-no-repeat bg-right-bottom"></div>
            <div className="flex flex-col z-50 absolute gap-2 sm:gap-5 px-5 py-10 sm:p-10">
              <h1 className="text-3xl font-bold text-[#100A55]">
                The new way to find your new home
              </h1>
              <p className="">The new way to find your new home</p>
              <button className="bg-[#100A55] text-secondary px-4 py-2 rounded-md w-44">
                Browse Properties
              </button>
            </div>
          </div>
          <div className=" flex w-full justify-center items-center">
            <div className="grid  grid-cols-1  sm:grid-cols-2 gap-10 w-[90%] md:w-full ">
              {benefits.map((benefit) => (
                <div
                  className="flex lg:flex-col  gap-5  xl:w-[80%]"
                  key={benefit.title}
                >
                  <img
                    className="w-16 h-16 "
                    src={benefit.icon}
                    alt="icon"
                  ></img>
                  <div className="flex flex-col  gap-2">
                    <h5 className=" text-2xl xl:text-3xl font-bold">
                      {benefit.title}
                    </h5>
                    <p className="text-md">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* properites showcase */}

      <div className="w-full pt-36 xl:pb-10 px-2 ">
        <div className="xl:max-container">
          <div className="flex flex-col items-center gap-5 max-sm:text-center ">
            <h4 className=" text-3xl md:text-5xl font-bold">
              Based on your location
            </h4>
            <p className="text-slate-500">
              Some of our picked properties near you location.
            </p>
          </div>
          <div className="pt-10">
            <div>
              <div className="flex flex-col-reverse gap-6 md:flex-row justify-between items-center">
                <div className="flex bg-purple-50 border-purple-300 border-2 rounded-lg py-2 px-2 sm:px-4  items-center ">
                  <div className="flex items-center w-24 sm:w-28 gap-2 h-12 justify-center rounded-md  bg-white  border-2 border-zinc-300">
                    <img src={rentIcon1} className=" w-5 h-5" alt="icon" />
                    <p className=" text-lg font-bold text-primary">Rent</p>
                  </div>
                  <div className="flex w-24 sm:w-28 gap-2 h-12 items-center justify-center">
                    <img src={sellIcon} className="w-5 h-5" alt="icon" />
                    <p>Buy</p>
                  </div>
                  <div className="flex gap-2 w-20 sm:w-28 h-12 items-center justify-center">
                    <img src={buyIcon} className="w-5 h-5" alt="icon" />
                    <p>Sell</p>
                  </div>
                </div>
                <div className=" flex items-center  w-full  md:w-64 lg:min-w-80  px-4 bg-purple-50 border-purple-300 border-2 rounded-lg">
                  <Search className=" text-primary" />
                  <input
                    className=" bg-inherit p-4 w-full"
                    type="text"
                    placeholder="Search..."
                  ></input>
                </div>
              </div>
              <div className="pt-10  ">
                <div className="md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 2xl:gap-10 relative hidden ">
                  {properties.map((property) => (
                    <PropertyCard key={property.name} {...property} />
                  ))}
                </div>

                <Carousel className="block  md:hidden overflow-x-scroll">
                  <CarouselContent className=" first:pl-4">
                    {properties.map((property) => (
                      <CarouselItem className="-mr-7 " key={property.name}>
                        <PropertyCard {...property} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>

                <div className="flex py-10  w-full justify-center">
                  <button className=" bg-[#100A55] text-white py-4 px-3 rounded-lg">
                    Browse more Properties
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* info */}
      <div className=" py-20 bg-[#100A55] ">
        <div className=" max-container">
          <div className=" flex flex-col md:flex-row justify-between  max-sm:text-center  gap-5 xl:gap-40  ">
            <h4 className="text-4xl xl:w-1/3 font-bold text-white">
              We make it easy for
              <span className=" text-primary"> tenants</span> and{" "}
              <span className="text-primary">landloads</span>
            </h4>
            <p className=" text-secondary xl:w-1/3">
              Whether it’s selling your current home, getting financing, or
              buying a new home, we make it easy and efficient. The best part?
              you’ll save a bunch of money and time with our services.
            </p>
          </div>
          <div className=" flex flex-col lg:flex-row gap-8 py-16">
            <div className=" flex bg-violet-950 rounded-md gap-8 py-8 px-4 lg:py-8 ">
              <img className=" w-16 h-16" src={videoIcon} alt="icon"></img>
              <div className="flex flex-col gap-5 w-full">
                <h4 className="text-white text-2xl">Virtual home tour</h4>
                <p className=" text-secondary">
                  You can communicate directly with landlords and we provide you
                  with virtual tour before you buy or rent the property.
                </p>
              </div>
            </div>
            <div className=" flex bg-white rounded-md  gap-8 py-8 px-4 lg:py-8  ">
              <img className=" w-16 h-16" src={homeIcon2} alt="icon"></img>
              <div className="flex flex-col gap-5">
                <h4 className="text-black text-2xl">Find the best deal</h4>
                <p className=" text-slate-500">
                  Browse thousands of properties, save your favorites and set up
                  search alerts so you don’t miss the best home deal!
                </p>
              </div>
            </div>
            <div className=" flex bg-violet-950 rounded-md gap-8 py-8 px-4 lg:py-8 ">
              <img className=" w-16 h-16" src={textIcon} alt="icon"></img>
              <div className="flex flex-col gap-5">
                <h4 className=" text-white text-2xl">Get ready to apply</h4>
                <p className=" text-secondary">
                  Find your dream house? You just need to do a little to no
                  effort and you can start move in to your new dream home!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" xl:pt-10 border-slate-700 border-t-[1px]">
          <div className=" w-full lg:max-container px-4 xl:px-28">
            <div className="flex  flex-col md:flex-row justify-between items-center gap-10 w-full">
              <div className="flex flex-col items-center gap-2 w-full">
                <h5 className="text-3xl xl:text-5xl text-white font-bold">
                  7.4%
                </h5>
                <p className="text-slate-300 xl:text-lg">
                  Property Return Rate
                </p>
              </div>
              <img className="h-[1px] w-36 md:rotate-90" src={line}></img>
              <div className="flex flex-col items-center  gap-2 w-full">
                <h5 className="text-3xl xl:text-5xl text-white font-bold">
                  3,856
                </h5>
                <p className="text-slate-300  xl:text-lg">
                  Property in Sell & Rent
                </p>
              </div>
              <img className="h-[1px]  w-36 md:rotate-90 " src={line}></img>
              <div className="flex flex-col items-center gap-2 w-full">
                <h5 className="text-3xl xl:text-5xl text-white font-bold">
                  2,540
                </h5>
                <p className="text-slate-300 xl:text-lg">
                  Daily Completed Transactions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-20 bg-secondary">
        <div className=" flex flex-col gap-5 justify-center items-center max-container">
          <p className=" text-primary font-medium md:text-lg">
            No Spam Promise
          </p>
          <h4 className=" font-bold text-3xl  xl:text-5xl text-black">
            Are you a Landlord?
          </h4>
          <p className=" text-slate-500 text-center md:text-lg">
            Discover ways to increase your home's value and get listed. No Spam.
          </p>
          <div className="flex flex-col items-center sm:flex-row gap-4 w-full justify-center">
            <input
              type="text"
              className=" p-4 bg-white rounded-lg sm:w-2/3 md:w-1/3 w-full "
              placeholder="Enter your email address"
            />
            <button className=" text-white bg-primary px-8 rounded-lg w-32 py-4">
              Submit
            </button>
          </div>
          <p className=" text-slate-600  text-center">
            Join
            <span className="text-primary font-medium"> 10,000+</span> other
            landlords in our estatery community.
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
