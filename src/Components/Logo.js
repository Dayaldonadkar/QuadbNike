import React from "react";

const Logo = () => {
  return (
    <div className="md:flex md:justify-center py-20">
      <div className="md:w-8/12 bg-black text-white flex items-center justify-around py-14 md:px-32 px-10 space-y-3 space-x-5">
        <div className="md:space-y-5 py-3">
          <h1 className="text-4xl">Become</h1>
          <h1 className="text-4xl">a Member</h1>
          <p className="md:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <button className="bg-white text-black px-4 py-2 rounded-xl">
            Join now
          </button>
        </div>

        <div>
          <img className="md:w-72 w-36" src="./Nikewhite.png" />
        </div>
      </div>
    </div>
  );
};

export default Logo;
