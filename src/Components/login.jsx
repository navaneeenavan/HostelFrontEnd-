import React from "react";
import { Link } from "react-router-dom";
function login() {
  return (
    <div className="min-w-screen min-h-screen  bg-white  items-center">
      <div className="m-28 min-w-screen  md:flex flex-row min-w-screen min-h-screen ml-10 mr-10 mt-10 mb-10">
        <div className=" flex flex-col items-center rounded-2xl mb-20 md:w-1/2 min-h-screen bg-white rounded-l-2xl shadow-2xl shadow-slate-400">
          <div className=" md:hidden text-4xl font-bold font-mono mt-8 pb-10">
            Room Allocator
          </div>
          <div className="text-4xl font-bold font-mono mt-28">Login</div>
          <div className="w-96 mt-28 flex flex-col min-w-0 break-words  mb-6  rounded-xl shadow-2xl">
            <div className="flex p-5 lg:pl-10">
              <form id="feedbackForm" action="" method="">
                <div className="w-72 mt-5 ">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    for="userName"
                  >
                    UserName
                  </label>
                  <input
                    type="userName"
                    name="userName"
                    id="userName"
                    className="border-[1px] px-3 py-3 rounded text-sm shadow w-full
                     placeholder-black text-gray-800 outline-none focus:bg-gray-400"
                    placeholder=" "
                    required
                  />
                </div>
              </form>
            </div>
            <div className="flex-auto pl-5 lg:pl-10">
              <form id="feedbackForm" action="" method="">
                <div class="w-72  mb-3">
                  <label
                    class="block uppercase text-gray-700 text-xs font-bold mb-2"
                    for="Password"
                  >
                    PassWord
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    class="border-[1px] px-3 py-3 rounded text-sm shadow w-full
                     placeholder-black text-gray-800 outline-none focus:bg-gray-400"
                    placeholder=" "
                    required
                  />
                </div>
                <div className="text-center mt-8 mb-6">
                  <Link to="/Home">
                    <button
                      id="feedbackBtn"
                      class="border-[1px] border-gray-400 text-gray-400 text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type=""
                    >
                      Login
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <Link to="/AdminHero">
            <button
              id="feedbackBtn"
              className="border-[1px] border-gray-400 text-gray-400 text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mt-64 mr-1 mb-20"
              type=""
            >
              Admin
            </button>
          </Link>
        </div>
        <div className="hidden md:flex flex-col items-center justify-around min-h-screen w-1/2 bg-[#FF435F] rounded-r-2xl shadow-2xl shadow-slate-400 mb-20 ">
          <div className="text-5xl text-white font-bold font-mono  uppercase">
            Room Allocator
          </div>
        </div>
      </div>
    </div>
  );
}
export default login;
