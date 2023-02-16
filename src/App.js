import React from "react";
import All from "./Components/All Collection/All";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Logo from "./Components/Logo";
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
      <Logo />
      <Footer />
    </div>
  );
};

export default App;
