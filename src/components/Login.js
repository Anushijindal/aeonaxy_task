import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [isSubmit,setISSubmit]=useState(false)
    const handleSubmit=()=>{
        setISSubmit(!isSubmit);
    }
  return (
    <div className="text-center mt-5">
      {!isSubmit && (
        <div className="border-2 border-slate-800 md:w-1/3 w-[300px] ml-auto rounded-lg bg-slate-800 text-white mr-auto py-4">
          <h1 className="font-extrabold md:text-3xl text-xl mb-3">
            Login
          </h1>
          <form className="font-bold" onSubmit={handleSubmit}>
            <label className="">Name:</label>
            <br />
            <input
              className="border-2 md:py-0.5 text-slate-800 border-gray-300 text-center rounded-md m-2"
              type="text"
              placeholder="Enter your Name"
            />
            <br />
            <label>Email:</label>
            <br />
            <input
              className="border-2 md:py-0.5 border-gray-300 text-slate-800 text-center rounded-md m-2"
              type="email"
              placeholder="Enter your Email"
            />
            <br />
            <label>Password:</label>
            <br />
            <input
              className="border-2 md:py-0.5 text-slate-800 border-gray-300 text-center rounded-md m-2"
              type="number"
              placeholder="Enter your password"
            />
            <br />
            <label>Confirm Password:</label>
            <br />
            <input
              className="border-2 md:py-0.5 text-slate-800 border-gray-300 text-center rounded-md m-2"
              type="number"
              placeholder="Enter your password"
            />
            <br />
            <input
              className="md:mx-4 mx-1 mt-9 font-normal text-xs bg-blue-500 text-white md:py-3 py-1 md:px-4 px-2 rounded-2xl"
              type="submit"
            />
            <Link to={"/"}>
              <button className="md:mx-4 mx-1 mt-9 font-normal text-xs bg-blue-500 text-white md:py-3 py-1 md:px-4 px-2 rounded-2xl">
                Home
              </button>
            </Link>
          </form>
        </div>
      )}
      {isSubmit && (
        <div>
          <h1 className="font-extrabold md:text-3xl text-xl text-slate-800">
            Your are successfully logged in
          </h1>
          <h1 className="font-extrabold md:text-3xl text-xl text-slate-800">
            Enjoy the Features of Calendly!
          </h1>
          <Link to={"/"}>
            <button className="md:mx-4 mx-1 mt-9 font-normal text-xs bg-blue-500 text-white py-2 px-4 rounded-2xl">
              Home
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Login