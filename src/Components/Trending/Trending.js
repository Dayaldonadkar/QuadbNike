import React from "react";
import EastIcon from "@mui/icons-material/East";
import TrendingCard from "./TrendingCard";

const Trending = (props) => {
  return (
    <div className="flex justify-center">
      <div className="w-8/12">
        <div className="flex justify-between pt-20 pb-10">
          <h1 className="text-4xl">Trending Now</h1>
          <div className="flex border-b-2 border-gray-500 text-xl space-x-3 items-center">
            <h1>Discover all Products</h1>
            <EastIcon />
          </div>
        </div>

        <div className="flex justify-between space-x-10">
          <TrendingCard
            img={"./Nikejordan .jpg"}
            price={"Nike Air Max 270 React"}
          />
          <TrendingCard
            img={"./Nikejordan .jpg"}
            price={"Nike Air Max 270 React"}
          />
        </div>
      </div>
    </div>
  );
};

export default Trending;
