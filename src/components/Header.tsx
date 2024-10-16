
import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    <div className="flex justify-center w-full py-6  bg-secondary text-jarkata drop-shadow-sm shadow-md ">
      <div className="flex justify-between items-center w-[90%]">
        <div className="flex gap-12 items-center ">
          {/* logo  */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="logo"></img>
            <h3 className=" text-xl font-normal text-primary">Estatery</h3>
          </div>
          <NavBar />
        </div>
        <div className="sm:flex gap-4 hidden ">
          <button className="py-3 px-5 border-2 rounded-md border-purple-300 ">Login</button>
          <button className=" rounded-lg bg-primary py-3 px-5 text-white">Sign up</button>
        </div>
      </div>
    </div>
  );
};
