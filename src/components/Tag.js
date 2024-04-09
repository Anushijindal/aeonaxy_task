import React from "react";
import { Link } from "react-router-dom";

const Tag = () => {
  return (
    <div className="text-center">
      <h1 className="text-blue-500 md:text-base text-xs font-semibold mb-10">
        SOLUTIONS
      </h1>
      <div className="bg-ellipe bg-no-repeat bg-cover brightness-150">
        <h1 className="font-bold md:text-6xl text-2xl md:mb-10 mb-3">
          <span className="text-blue-700">Calendly</span> for the work you do
        </h1>
        <p className="md:text-xl text-sm">
          Across a range of uses, Calendly helps people and teams build <br />{" "}
          efficiency, professionalism, and results into the work they do
        </p>
        <Link to={"/contact"}>
          <button className="mx-4 m-6 md:mb-12 mb-5 font-normal text-xs bg-blue-700  text-white py-2 md:px-4 px-2 rounded-2xl">
            Contact Sales
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Tag;
