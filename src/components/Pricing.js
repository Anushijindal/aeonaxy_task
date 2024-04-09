import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="text-center bg-slate-900 md:py-12 py-6 text-white">
      <h1 className="md:text-4xl text-xl md:mb-10 mb:5 font-bold">
        Easy access for easy bookings
      </h1>
      <p className="text-xs md:text-base">
        Share your Calendly link right from your browser, so you can schedule
        meetings <br /> without the back-and-forth
      </p>
      <div>
        <button className="hover:border-2 hover:border-white md:mx-4 mx-1 md:mt-10 mt-5 font-normal text-xs bg-blue-500  text-white md:py-4 py-2 md:px-8 px-3 rounded-3xl">
          Start for free
        </button>
        <Link to={"/contact"}>
          <button className="md:mx-4 mx-1 md:mt-10 mt-5 font-normal text-xs bg-slate-900 border-2 border-white text-white md:py-3 py-1.5 md:px-8 px-3 rounded-3xl">
            Talk with Sales
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Pricing;
