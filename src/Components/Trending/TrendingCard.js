import React from "react";

const TrendingCard = (props) => {
  return (
    <div>
      <div className="relative">
        <img className="h-96" src={props.img} />
        <h1 className="absolute bottom-1 text-2xl text-blue-900 left-5">
          {props.price}
        </h1>
      </div>
    </div>
  );
};

export default TrendingCard;
