import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { AiFillFileAdd } from "react-icons/ai";
import { AiFillFrown } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";

function AdminNavBar() {
  return (
    <div className="flex flex-rows ">
      <div className="w-[251px] min-h-screen bg-white rounded-tl-[30px] rounded-bl-[30px]  mt-5 ml-5 border-r-2 border-gray-400 ">
        <div className="flex flex-col mx-10 ">
          <h1 className="text-black font-extrabold font-mono text-xl mt-10 pl-2 ">
            Room Allocator-Admin
          </h1>
          <div className="flex flex-row mt-16 ml-2 ">
            <div className="text-2xl ">
              <AiOutlineHome />
            </div>
            <Link to="/AdminHero">
              <h1 className="ml-3 font-mono font-medium hover:font-extrabold">
                HOME
              </h1>
            </Link>
          </div>
          <div className="flex flex-row mt-16 ml-2">
            <div className="text-2xl">
              <AiFillFileAdd />
            </div>
            <Link to="/AdminRequest">
              <h1 className="ml-3 font-mono font-medium hover:font-extrabold">
                REQUESTS
              </h1>
            </Link>
          </div>
          <div className="mt-96 mx-8">
            <div className="flex flex-rows">
              <div className="text-2xl">
                <Link to="/">
                  <AiOutlineLogout />
                </Link>
              </div>
              <p className=" font-mono font-medium mx-1 hover:font-extrabold">
                LOG-OUT
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminNavBar;
