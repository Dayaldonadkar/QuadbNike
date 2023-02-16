import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";

const Footer = () => {
  return (
    <div className="flex justify-center pb-10">
      <div className="flex w-8/12 justify-between border-b-2 pb-10">
        <div className="space-y-8">
          <div>
            <img src="./Nikelogo.png" />
          </div>

          <div className="space-x-4">
            <FacebookIcon
              fontSize="large"
              className="border-2 px-2 rounded-full"
            />
            <TwitterIcon
              fontSize="large"
              className="border-2 px-2 rounded-full"
            />
            <InstagramIcon
              fontSize="large"
              className="border-2 px-2 rounded-full"
            />
            <GitHubIcon
              fontSize="large"
              className="border-2 px-2 rounded-full"
            />
          </div>

          <div className="space-y-5">
            <h1 className="text-xl">Sign up for a personalized offers</h1>
            <div className="flex">
              <input
                className="bg-gray-400 py-1 px-8 rounded-full placeholder:text-black text-small"
                placeholder="Enter your email"
              />
              <TelegramIcon
                fontSize="large"
                className="bg-slate-600 px-1 rounded-full relative right-7 items-center"
              />
            </div>
          </div>
        </div>

        <div className="flex space-x-24">
          <div className="space-y-8">
            <h1>Links</h1>
            <div className="text-gray-500 space-y-8">
              <p>Home</p>
              <p>Projects</p>
              <p>Blog</p>
              <p>Category</p>
            </div>
          </div>

          <div className="space-y-8">
            <h1>Features</h1>
            <div className="text-gray-500 space-y-8">
              <p>About us</p>
              <p>Instructions</p>
              <p>Catalog</p>
              <p>Contact us</p>
            </div>
          </div>

          <div className="space-y-8">
            <h1>Company</h1>
            <div className="text-gray-500 space-y-8">
              <p>Terms</p>
              <p>Security</p>
              <p>Catalog</p>
            </div>
          </div>

          <div className="space-y-8">
            <h1>Legal & Terms</h1>
            <div className="text-gray-500 space-y-8">
              <p>Privacy</p>
              <p>Terms</p>
              <p>Security</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
