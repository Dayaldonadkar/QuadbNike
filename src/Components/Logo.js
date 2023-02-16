import React from "react";

const Logo = () => {
  return (
    <div className="flex justify-center py-20">
      <div className="w-8/12 bg-black text-white flex items-center justify-around py-14 px-32">
        <div className="space-y-5">
          <h1 className="text-4xl">Become</h1>
          <h1 className="text-4xl">a Member</h1>
          <p className="w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <button className="bg-white text-black px-4 py-2 rounded-xl">
            Join now
          </button>
        </div>

        <div>
          <img className="w-72" src="./Nikewhite.png" />
        </div>
      </div>
    </div>
  );
};

export default Logo;
