import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex flex-row">
      <img
        className="md:w-[200px] w-[150px] bg-black"
        alt="site-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjbxr4NxUtqcQMHpN0i8Fj4ibNm6fEV6hiU82IU6MaRrhZY7fi2DN-2bkaWKw771yBLQ&usqp=CAU"
      />
      <div className="mx-2 overflow-x-scroll md:overflow-visible md:w-2/3 w-1/4">
        <ul className="flex flex-row md:ml-40 ml-2 mr-2 md:mr-1">
          <li className="md:mx-4 mx-1 md:mt-11 mt-9 text-xs md:text-base font-bold">
            <button>Individuals</button>
          </li>
          <li className="md:mx-4 mx-1 md:mt-11 mt-9 text-xs md:text-base font-bold">
            <button>Teams</button>
          </li>
          <li className="md:mx-4 mx-1 md:mt-11 mt-9 text-xs md:text-base font-bold">
            <button>Enterprise</button>
          </li>
          <li className="md:mx-4 mx-1 md:mt-11 mt-9 text-xs md:text-base font-bold">
            <button>Product ￬</button>
          </li>
          <li className="md:mx-4 mx-1 md:mt-11 mt-9 text-xs md:text-base font-bold">
            <button>Pricing</button>
          </li>
          <li className="md:mx-4 mx-1 md:mt-11 mt-9 text-xs md:text-base font-bold">
            <button>Resources ￬</button>
          </li>
        </ul>
      </div>
      <div className="md:ml-2 ml-2 float-right">
        <Link to={"/login"}><button className="md:mx-4 mx-1 text-xs md:text-base mt-9 font-bold">
          Log In
        </button></Link>
        <button className="md:mx-4 mx-1 mt-9 font-normal text-xs bg-blue-500 text-white md:py-3 py-1 md:px-4 px-1 rounded-2xl">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Nav;
