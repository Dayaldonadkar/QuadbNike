import React from "react";

const ShowroomCard = (props) => {
  return (
    <div className="flex h-96 space-x-20">
      <img src={props.img} />
      <h1>{props.title}</h1>
    </div>
  );
};

export default ShowroomCard;
