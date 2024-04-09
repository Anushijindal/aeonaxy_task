import React from "react";
import { Link } from "react-router-dom";

const Plan = () => {
  return (
    <div className="text-center">
      <h1 className="text-blue-500 mt-10 md:text-base font-semibold text-xs">
        SOLUTIONS
      </h1>
      <div>
        <h1 className="md:text-3xl text-lg font-bold mb-10 mt-5">
          Calendly can solve your specific pain points
        </h1>
        <div className="grid grid-cols-3 md:w-2/3 w-full ml-auto mr-auto mb-10">
          <div className="border-2 rounded-md border-gray-200 shadow-md md:m-2 m-1 md:p-6 p-2">
            <img
              className="md:w-5 w-3"
              alt="target"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqBmHLLhOMMnkNnRsTWJPycYD25vcruj-pqg&s"
            />
            <h1 className="text-left font-bold my-2">Sales</h1>
            <p className="text-left font-normal md:text-base text-xs">
              Spend more time selling, and less time on admin. shorten your
              sales cycle by letting prospects schedule while they're in peak
              buying mode.
            </p>
            <Link to={"/sales"}>
              <button className="text-blue-500 float-left md:mt-10 mt-5 font-semibold hover:text-blue-900 hover:font-extrabold hover:text-xl">
                Learn more {">"}
              </button>
            </Link>
          </div>

          <div className="border-2 rounded-md border-gray-200 shadow-md md:m-2 m-1 md:p-6 p-2">
            <img
              className="md:w-5 w-3"
              alt="recruit"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjvcdlaWKakI3X4xU8GFetF_vEXBwMvSRr9g&s"
            />
            <h1 className="text-left font-bold my-2">Recruiting</h1>
            <p className="text-left font-normal md:text-base text-xs">
              Simplify recruitment by smoothing every aspect of the interview
              scheduling process, including automated follow-ups.
            </p>
            <Link to={"/recruit"}>
              <button className="text-blue-500 float-left md:mt-10 mt-9 font-semibold hover:text-blue-900 hover:font-extrabold hover:text-xl">
                Learn mode {">"}
              </button>
            </Link>
          </div>

          <div className="border-2 rounded-md border-gray-200 shadow-md md:m-2 m-1 md:p-6 p-2">
            <img
              className="md:w-5 w-3"
              alt="educate"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbh6q46EYf2H_MWD6cW2hFEY9-9o-JO-BY4w&s"
            />
            <h1 className="text-left font-bold my-2">Education</h1>
            <p className="text-justify font-normal md:text-base text-xs">
              Control your office hours, and empower students and parents to
              schedule appointments easily.
            </p>
            <Link to={"/education"}>
              <button className="text-blue-500 float-left md:mt-14 mt-16 font-semibold hover:text-blue-900 hover:font-extrabold hover:text-xl">
                Learn mode {">"}
              </button>
            </Link>
          </div>
          <div className="border-2 rounded-md border-gray-200 shadow-md md:m-2 m-1 md:p-6 p-2">
            <img
              className="md:w-5 w-3"
              alt="recruit"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX6o6lRebRNLO3f1wznLocdVq1Q-vQtD_7EQ&s"
            />
            <h1 className="text-left md:text-base text-xs font-bold my-2">
              Revenue Operations
            </h1>
            <p className="text-justify font-normal md:text-base text-xs">
              Streamline meeting and activity data. calendly's native
              integrations with salesforce and hubspot ensure up-to-date
              reporting.
            </p>
            <Link to={"/revenue"}>
              <button className="text-blue-500 float-left md:mt-14 mt-11 font-semibold hover:text-blue-900 hover:font-extrabold hover:text-xl">
                Learn mode {">"}
              </button>
            </Link>
          </div>
          <div className="border-2 rounded-md border-gray-200 shadow-md md:m-2 m-1 md:p-6 p-2">
            <img
              className="md:w-5 w-3"
              alt="recruit"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_W4koKGCGUtvNSloXIp4uWAe_eq7sZBAl_WkOmLJI3l3BlO7mnMa80uaOwsl9xCGzJF4&usqp=CAU"
            />
            <h1 className="text-left font-bold my-2">Marketing</h1>
            <p className="text-justify font-normal md:text-base text-xs">
              Convert interested prospects into scheduled meetings and demos
              faster. skip steps that cause customer friction.
            </p>
            <Link to={"/marketing"}>
              <button className="text-blue-500 float-left md:mt-14 mt-16 font-semibold hover:text-blue-900 hover:font-extrabold hover:text-xl">
                Learn mode {">"}
              </button>
            </Link>
          </div>
          <div className="border-2 rounded-md border-gray-200 shadow-md md:m-2 m-1 md:p-6 p-2">
            <img
              className="md:w-5 w-3"
              alt="recruit"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2t5ax8-xhN2UcOvtT_MGfhjvkswajM_FBOrn9KrevL7yQOUeXve59MiHI2DCjRenj1oI&usqp=CAU"
            />
            <h1 className="text-left font-bold my-2">Customer Success</h1>
            <p className="text-justify font-normal md:text-base text-xs">
              Offer exceptional support: your clients will be delighted with
              one- click scheduling and increased responsiveness.
            </p>
            <Link to={"/customer"}>
              <button className="text-blue-500 float-left md:mt-14 mt-8 font-semibold hover:text-blue-900 hover:font-extrabold hover:text-xl">
                Learn mode {">"}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
