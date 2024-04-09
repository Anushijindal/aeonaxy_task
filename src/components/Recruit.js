import React from "react";
import { Link } from "react-router-dom";

const Recruit = () => {
  return (
    <div className="text-center">
      <h1 className="text-5xl mt-5 font-extrabold text-slate-800 animate-bounce">
        Recruiting
      </h1>
      <p className="text-2xl text-slate-600 mt-10">
        Components are added according to the requirements😊
      </p>
      <Link to={"/"}>
        <button className="md:mx-4 mx-1 mt-9 font-normal text-xs bg-blue-500 text-white md:py-3 py-1 md:px-4 px-1 rounded-2xl">
          Home
        </button>
      </Link>
    </div>
  );
};

export default Recruit;
