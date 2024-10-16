import bath from "@/assets/Bath.png";
import bed from "@/assets/Bed.png";
import areaIcon from "@/assets/Square Meters.png";
import popularIcon from "@/assets/popularIcon.png";

import favorited from "@/assets/Favorited.png";
interface Props {
  image: string;
  price: string | number;
  name: string;
  address: string;
  beds: string;
  bathrooms: string;
  area: string;
  popular: boolean;
}
export const PropertyCard: React.FC<Props> = ({
  name,
  price,
  image,

  address,
  beds,
  bathrooms,
  area,
  popular,
}) => {
  return (
    <div className=" w-[90%] md:w-full border-2 rounded-xl  ">
      <img src={image} alt="home image" className=""></img>
      {popular && (
        <img
          alt="home image"
          src={popularIcon}
          className=" absolute -mt-6 -ml-2"
        ></img>
      )}
      <div className="flex flex-col px-2 py-5 lg:p-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <p className=" flex gap-2 items-center text-slate-600">
              <span className="text-primary font-bold text-2xl">${price}</span>
              /month
            </p>
            <h4 className=" text-2xl font-bold text-black">{name}</h4>
          </div>
          <button>
            <img src={favorited} alt="like icon" className="w-12 h-12"></img>
          </button>
        </div>
        <p className=" text-zinc-500 font-medium py-3 border-b-[1px] ba">
          {" "}
          {address}
        </p>
        <div className="flex pt-5 gap-4 text-slate-500 text-sm">
          <div className="flex gap-2 items-center">
            <img src={bed} alt="like icon" className="w-5 h-5"></img>
            <p>{beds} beds</p>
          </div>
          <div className="flex gap-2 items-center">
            <img src={bath} alt="like icon" className="w-5 h-5"></img>
            <p>{bathrooms} bathroom</p>
          </div>
          <div className="flex gap-2 items-center">
            <img src={areaIcon} alt="like icon" className="w-5 h-5"></img>
            <p>{area} m²</p>
          </div>
        </div>
      </div>
    </div>
  );
};
