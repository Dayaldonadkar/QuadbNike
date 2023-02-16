import React from "react";

const Showroom = () => {
  return (
    <div className="flex justify-center">
      <div className="w-8/12">
        <div className="flex justify-between">
          <h1>Our Showroom</h1>
          <p>lorem ipsum dolor sit construction</p>
        </div>

        <div className="container w-12/12 h-4/12">
          <img
            className="object-contain"
            src="https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          />
        </div>
      </div>
    </div>
  );
};

export default Showroom;
