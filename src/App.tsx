import "./App.css";
import { benefits, properties } from "./constants";
import rentIcon from "./assets/rentIcon.png";
import sellIcon from "./assets/sell.png";
import rentIcon1 from "./assets/rent.png";
import favorited from "./assets/Favorited.png";
import buyIcon from "./assets/buy.png";
import homeIcon from "./assets/homeIcon.png";
import bath from "./assets/Bath.png";
import bed from "./assets/Bed.png";
import area from "./assets/Square Meters.png";
import popularIcon from "./assets/popularIcon.png";
import { SearchBar } from "./components/SearchBar";
import textIcon from "./assets/textIcon.png";
import homeIcon2 from "./assets/homeIcon2.png";
import videoIcon from "./assets/videoIcon.png";
import line from "./assets/Line.png";
import { Search } from "lucide-react";
function App() {
  return (
    <main>
      {/* hero section */}
      <div className="py-20 bg-gradient-to-b  w-full  from-[--secondary-color] to-white xl:min-h-[900px]">
        <div className="flex w-full h-full  absolute z-10 justify-end -mt-32  ">
          <div className="bg-hero w-full  h-full    bg-no-repeat bg-right-top"></div>
          {/* <img className="xl:w-[836px] " src={heroBg}></img> */}
        </div>
        {/* <div className="flex w-full absolute items-end">
          <img className="xl:w-[1112px] " src={heroBg}></img>
        </div> */}
        <div className=" absolute ml-44 z-50 ">
          <div className="xl:w-1/2 flex flex-col gap-5 ">
            <h1 className="xl:text-6xl font-bold z-20">
              Buy,rent,or sell your property easily
            </h1>
            <p className="font-medium text-lg ">
              A great platform to buy, sell, or even rent your properties
              without any commisions.
            </p>
            <SearchBar />
          </div>
          <div className="flex gap-20 py-16">
            <div className="flex flex-col gap-6">
              <img src={rentIcon} alt="icon" className="w-16 h-16"></img>
              <div className="flex flex-col">
                <h4 className="text-primary text-2xl font-bold">
                  50K+ renters
                </h4>
                <p className="">believe in our service</p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
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
      <div className=" xl:max-container ">
        <div className="flex gap-20 w-full xl:py-20 ">
          <div className=" xl:w-2/5 h-[500px] relative bg-[#F7F7FD] rounded-md border-purple-300 ">
            <div className=" bg-home absolute w-full  h-full bg-no-repeat bg-right-bottom"></div>

            <div className="flex flex-col gap-5 p-10">
              <h1 className=" text-3xl font-bold text-[#100A55] ">
                The new way to find your new home
              </h1>
              <p className="">The new way to find your new home</p>
              <button className="bg-[#100A55] text-secondary px-4 py-2 rounded-md w-44">
                Browse Properties
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2  gap-10 ">
            {benefits.map((benefit) => (
              <div className="flex flex-col gap-5 w-[80%]" key={benefit.title}>
                <img className="w-16 h-16 " src={benefit.icon} alt="icon"></img>
                <h5 className=" text-3xl font-bold">{benefit.title}</h5>
                <p className="text-md">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* properites showcase */}

      <div className="xl:max-container">
        <div className="">
          <div className="flex flex-col items-center gap-5 ">
            <h4 className="text-5xl font-bold">Based on your location</h4>
            <p className="text-slate-500">
              Some of our picked properties near you location.
            </p>
          </div>
          <div className="py-10">
            <div>
              <div className="flex justify-between items-center">
                <div className="flex bg-purple-50 border-purple-300 border-2 rounded-lg py-2 px-4  items-center">
                  <div className="flex items-center w-28 gap-2 h-12 justify-center rounded-md bg-white  border-2 border-zinc-300">
                    <img src={rentIcon1} className=" w-5 h-5" alt="icon" />
                    <p className=" text-lg font-bold text-primary">Rent</p>
                  </div>
                  <div className="flex w-28 gap-2 h-12 items-center justify-center">
                    <img src={sellIcon} className="w-5 h-5" alt="icon" />
                    <p>Buy</p>
                  </div>
                  <div className="flex gap-2 w-28 h-12 items-center justify-center">
                    <img src={buyIcon} className="w-5 h-5" alt="icon" />
                    <p>Sell</p>
                  </div>
                </div>
                <div className=" flex items-center min-w-80  px-4 bg-purple-50 border-purple-300 border-2 rounded-lg">
                  <Search className=" text-primary" />
                  <input
                    className=" bg-inherit p-4"
                    type="text"
                    placeholder="Search..."
                  ></input>
                </div>
              </div>
              <div className="py-10  ">
                <div className="grid grid-cols-4 gap-10 relative">
                  {properties.map((property) => (
                    <div className=" border-2 rounded-xl  " key={property.name}>
                      <img
                        src={property.image}
                        alt="home image"
                        className=""
                      ></img>
                      {property.popular && (
                        <img
                          alt="home image"
                          src={popularIcon}
                          className=" absolute -mt-6 -ml-2"
                        ></img>
                      )}
                      <div className="flex flex-col p-5">
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col gap-2">
                            <p className=" flex gap-2 items-center text-slate-600">
                              <span className="text-primary font-bold text-2xl">
                                ${property.price}
                              </span>
                              /month
                            </p>
                            <h4 className=" text-2xl font-bold text-black">
                              {property.name}
                            </h4>
                          </div>
                          <button>
                            <img
                              src={favorited}
                              alt="like icon"
                              className="w-12 h-12"
                            ></img>
                          </button>
                        </div>
                        <p className=" text-zinc-500 font-medium py-3 border-b-[1px] ba">
                          {" "}
                          {property.address}
                        </p>
                        <div className="flex pt-5 gap-4 text-slate-500 text-sm">
                          <div className="flex gap-2 items-center">
                            <img
                              src={bed}
                              alt="like icon"
                              className="w-5 h-5"
                            ></img>
                            <p>{property.beds} beds</p>
                          </div>
                          <div className="flex gap-2 items-center">
                            <img
                              src={bath}
                              alt="like icon"
                              className="w-5 h-5"
                            ></img>
                            <p>{property.bathrooms} bathroom</p>
                          </div>
                          <div className="flex gap-2 items-center">
                            <img
                              src={area}
                              alt="like icon"
                              className="w-5 h-5"
                            ></img>
                            <p>{property.area} m²</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex py-20 w-full justify-center">
                  <button className=" bg-[#100A55] text-white xl:py-4 xl:px-3 rounded-lg">
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
          <div className=" flex justify-between gap-40  ">
            <h4 className="text-4xl w-1/3 font-bold text-white">
              We make it easy for
              <span className=" text-primary"> tenants</span> and{" "}
              <span className="text-primary">landloads</span>
            </h4>
            <p className=" text-secondary w-1/3">
              Whether it’s selling your current home, getting financing, or
              buying a new home, we make it easy and efficient. The best part?
              you’ll save a bunch of money and time with our services.
            </p>
          </div>
          <div className=" flex gap-8 py-16">
            <div className=" flex bg-violet-950 rounded-md gap-8 p-8">
              <img className=" w-16 h-16" src={videoIcon} alt="icon"></img>
              <div className="flex flex-col gap-5">
                <h4 className="text-white text-2xl">Virtual home tour</h4>
                <p className=" text-secondary">
                  You can communicate directly with landlords and we provide you
                  with virtual tour before you buy or rent the property.
                </p>
              </div>
            </div>
            <div className=" flex bg-white rounded-md  gap-8 p-8 ">
              <img className=" w-16 h-16" src={homeIcon2} alt="icon"></img>
              <div className="flex flex-col gap-5">
                <h4 className="text-black text-2xl">Find the best deal</h4>
                <p className=" text-slate-500">
                  Browse thousands of properties, save your favorites and set up
                  search alerts so you don’t miss the best home deal!
                </p>
              </div>
            </div>
            <div className=" flex bg-violet-950 rounded-md gap-8 p-8 ">
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
        <div className=" border-slate-700 border-t-[1px]">
          <div className="pt-12 max-container px-28">
            <div className="flex justify-between w-full">
              <div className="flex flex-col items-center gap-2">
                <h5 className="text-3xl text-white font-bold">7.4%</h5>
                <p className="text-slate-300">Property Return Rate</p>
              </div>
              <img src={line}></img>
              <div className="flex flex-col items-center">
                <h5 className="text-3xl text-white font-bold">3,856</h5>
                <p className="text-slate-300">Property in Sell & Rent</p>
              </div>
              <img src={line}></img>
              <div className="flex flex-col items-center">
                <h5 className="text-3xl text-white font-bold">2,540</h5>
                <p className="text-slate-300">Daily Completed Transactions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
