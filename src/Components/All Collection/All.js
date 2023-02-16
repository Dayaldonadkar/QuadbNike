import React from "react";
import Allcard from "./Allcard";
import EastIcon from "@mui/icons-material/East";

const All = () => {
  return (
    <div className="flex justify-center pt-20">
      <div className="w-8/12 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl">All Collection</h1>
          <p>Lorem ipsum dolor sit amet construction</p>
        </div>

        <div className="flex space-x-5">
          <Allcard img={"./Nike.png"} />
          <Allcard img={"./Nike.png"} />
          <Allcard img={"./Nike.png"} />
        </div>

        <div className="flex space-x-5 pb-10">
          <Allcard
            img={
              "https://www.nicepng.com/png/detail/361-3611327_nike-air-max-1-ultra-flyknit-id-grey.png"
            }
          />
          <Allcard img={"./Nike.png"} />
          <Allcard img={"./Nike.png"} />
        </div>

        <div className="flex justify-center text-lg py-5 items-center border-b border-t border-gray-600">
          <div className="flex border-b border-gray-600 space-x-2">
            <h1>Discover All Products</h1>
            <p>
              <EastIcon />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default All;
