import React from "react";

const ShowroomCard = (props) => {
  return (
    <div className="w-1/2">
      <img className="object-contain" src={props.img} />
      <h1>{props.title}</h1>
    </div>
  );
};

export default ShowroomCard;
