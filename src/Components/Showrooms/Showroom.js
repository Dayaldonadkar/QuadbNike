import React from "react";

const Showroom = () => {
  return (
    <div className="flex justify-center">
      <div className="w-8/12 pt-14">
        <div className="flex justify-between pb-10">
          <h1 className="text-4xl">Our Showroom</h1>
          <p>lorem ipsum dolor sit construction</p>
        </div>

        <div className="md:flex md:flex-row h-96 md:space-x-20 flex-col">
          <div className="">
            <img className="h-96" src="./showroom1.jpg" />
            <h1 className="absolute bottom-1 text-white left-3 text-lg">
              Nike Air Showroom
            </h1>
          </div>
          <div className="">
            <img className="h-96" src="./showroom2.jpg" />
            <h1 className="absolute bottom-1 text-white left-3 text-lg">
              New Jersey Showroom
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showroom;
