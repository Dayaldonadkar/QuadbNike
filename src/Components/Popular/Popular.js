import React from "react";
import EastIcon from "@mui/icons-material/East";
import ShoesCard from "./ShoesCard";

const Popular = () => {
  return (
    <div className="flex justify-center">
      <div className="w-8/12">
        <div className="flex justify-between py-10">
          <h1 className="text-4xl">Popular Collections</h1>
          <div className="flex border-b-2 border-gray-500 text-xl space-x-3 items-center">
            <h1>Discover all Products</h1>
            <EastIcon />
          </div>
        </div>

        <div className="flex justify-between">
          <ShoesCard img={"./NikeP1.png"} />
          <ShoesCard img={"./NikeP1.png"} />
        </div>
      </div>
    </div>
  );
};

export default Popular;
