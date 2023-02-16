import React from "react";

const Allcard = (props) => {
  return (
    <div>
      <div className="flex">
        <div className="bg-[#F8F8FA] space-y-11 px-8 py-6 rounded-lg">
          <div>
            <h1 className="flex justify-end">Add to Cart</h1>
          </div>

          <div className="flex justify-center">
            <img className="w-96 h-40" src={props.img} />
          </div>

          <div className="flex justify-between">
            <h1>Nike Air Max 270 react</h1>
            <p>$280.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allcard;
