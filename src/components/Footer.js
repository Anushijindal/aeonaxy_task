import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-row md:m-20 m-5 justify-between">
      <div>
        <h1 className="font-extrabold md:text-3xl text-lg text-slate-800 md:my-2 my-1">
          Easy
        </h1>
        <h1 className="font-extrabold md:text-3xl text-lg text-blue-500 md:my-2 my-1">
          ahead
        </h1>
        <p className="md:text-sm text-xs text-justify md:mt-3 mt-1 md:mb-10 mb-3">
          Web take the work out of connecting with <br /> others so you can
          accomplish more
        </p>
        <select
          className="border-2 border-gray-200 md:p-1 p-0.5 md:text-sm text-sm rounded-md w-full"
          name="language"
        >
          <option>English</option>
          <option>Hindi</option>
        </select>
        <img
          className="md:w-44 w-32 my-5"
          alt="logo"
          src="https://t3.ftcdn.net/jpg/04/17/62/92/360_F_417629283_n5QlRBchmUdfQgeDDYllQr5ekv8nysGc.jpg"
        />
        <div className="flex flex-row">
          <img
            className="md:w-3 w-1 md:mx-4 mx-1 md:my-2 my-1"
            alt="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrF4F6llxiYfynS9mnbUzMh_nUQvsg3H1V-g&s"
          />
          <img
            className="md:w-3 w-1 md:mx-4 mx-1 md:my-2 my-1"
            alt="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXJva7E1NYUo70V859tyUCYf80fMyXQYK8qQ&s"
          />
          <img
            className="md:w-3 w-1 md:mx-4 mx-1 md:my-2 my-1"
            alt="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAVQq5CFcityo2jIn97VEf2D-uhyviFrRvtA&s"
          />
          <img
            className="md:w-3 w-1 md:mx-4 mx-1 md:my-2 my-1"
            alt="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZy25qVnXim0IHxSZ9q0eQiW3E-NHXxDjuQ&s"
          />
          <img
            className="md:w-3 w-1 md:mx-4 mx-1 md:my-2 my-1"
            alt="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSao8iy7SLQkxk_fXRSKDEVw90UV7S-RXWRXg&s"
          />
        </div>
        <h1 className="text-[10px] md:text-xs text-gray-500 md:mt-10 mt-16">
          Copyright Calendly 2022
        </h1>
      </div>
      <div>
        <div className="grid grid-cols-3 text-blue-950 md:mt-4 mt-2 md:text-base text-xs">
          <div className="md:mx-16 mx-5">
            <h1 className="font-extrabold">About</h1>
            <ul>
              <li className="md:my-2 my-1">About Calendly</li>
              <li className="md:my-2 my-1">Contact Sales</li>
              <li className="md:my-2 my-1">Newsroom</li>
              <li className="md:my-2 my-1">Careers</li>
              <li className="md:my-2 my-1">Security</li>
            </ul>
          </div>
          <div className="md:mx-16 mx-5">
            <h1 className="font-extrabold">Solutions</h1>
            <ul>
              <li className="md:my-2 my-1">Customer Success</li>
              <li className="md:my-2 my-1">Sales</li>
              <li className="md:my-2 my-1">Recruiting</li>
              <li className="md:my-2 my-1">Information Technology</li>
              <li className="md:my-2 my-1">Marketing</li>
            </ul>
          </div>
          <div className="md:mx-16 mx-5">
            <h1 className="font-extrabold">Popular Features</h1>
            <ul>
              <li className="md:my-2 my-1">Embed Calendly</li>
              <li className="md:my-2 my-1">Availiability</li>
              <li className="md:my-2 my-1">Sending Notifications</li>
              <li className="md:my-2 my-1">Using Calendly Mobile</li>
            </ul>
          </div>
          <div className="md:mx-16 mx-5">
            <h1 className="font-extrabold">Support</h1>
            <ul>
              <li className="md:my-2 my-1">Help Center</li>
              <li className="md:my-2 my-1">Video Tutorials</li>
              <li className="md:my-2 my-1">Cookie Settings</li>
            </ul>
          </div>
          <div className="md:mx-16 mx-5">
            <h1 className="font-extrabold">Add-Ons</h1>
            <ul>
              <li className="md:my-2 my-1">Download for Chrome</li>
              <li className="md:my-2 my-1">Download for Firefox</li>
            </ul>
          </div>
          <div className="md:mx-16 mx-5">
            <h1 className="font-extrabold">Developers</h1>
            <ul>
              <li className="md:my-2 my-1">Developer Tools</li>
            </ul>
          </div>
        </div>
        <h1 className="text-right text-xs text-gray-500 md:mt-10 mt-2">
          Privacy / Terms and Conditions
        </h1>
      </div>
    </div>
  );
};

export default Footer;
