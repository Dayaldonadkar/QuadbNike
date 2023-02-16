import React from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-between w-9/12 text-lg items-center py-5">
        <div className="flex gap-x-10">
          <h1>Our Collections</h1>
          <h1>About Us</h1>
        </div>

        <div>
          <img className="w-24" src="./Nikelogo.png" alt="Nikelogo" />
        </div>

        <div className="flex items-center space-x-1 bg-black text-white px-6 py-2 rounded-full">
          <LocalMallIcon fontSize="small" />
          <h1>Cart</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
