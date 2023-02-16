import React from "react";
import All from "./Components/All Collection/All";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Popular from "./Components/Popular/Popular";
import Showroom from "./Components/Showrooms/Showroom";
import Trending from "./Components/Trending/Trending";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Popular />
      <Trending />
      <All />
      <Showroom />
    </div>
  );
};

export default App;
