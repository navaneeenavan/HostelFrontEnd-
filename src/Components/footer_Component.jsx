import React from "react";
import User from "../Constant/User";

function footer_Component({ Student }) {
  const Roll_no = Student.id;
  const Department = Student.Department;
  const block = Student.Block;
  const room = Student.Room;
  const yearofStudy = Student.Year;
  const Seater_type = Student.SeaterType;
  const DueStatus = Student.Due;
  const mes = Student.Message;

  return (
    <div className="w-[470px] min-h-screen bg-white rounded-tr-[30px] rounded-br-[30px]  mt-5  border-l-2 border-gray-400 font-mono">
      <div className="flex flex-col">
        <div className="w-[370px] - h-[400px] bg-zinc-200 rounded-[30px] mt-2 ml-12 shadow-xl">
          <div className="flex flex-col ">
            <div className="font-extrabold font-mono ml-32 mt-3 ">
              -Student INFO-
            </div>
            <div className=" mt-3 border-b-2  border-white"></div>

            <div className="flex flex-row ml-10 mt-5">
              <h1 className="font-mono font-bold">Roll No : </h1>
              <h1 className=" ml-3 font-light font-mono">{Roll_no} </h1>
            </div>
          </div>
          <div className="flex flex-col  m-5">
            <div className="flex flex-row ml-5">
              <h1 className="font-mono font-bold">DEPARTMENT: </h1>
              <h1 className=" ml-3 font-mono font-light">{Department}</h1>
            </div>
          </div>
          <div className="flex flex-col  m-5">
            <div className="flex flex-row ml-5">
              <h1 className="font-mono font-bold">BLOCK No : </h1>
              <h1 className=" ml-3 font-light font-mono">{block} </h1>
            </div>
          </div>
          <div className="flex flex-col  m-5">
            <div className="flex flex-row ml-5">
              <h1 className="font-mono font-bold">ROOM No : </h1>
              <h1 className=" ml-3 font-light font-mono">{room} </h1>
            </div>
          </div>
          <div className="flex flex-col  m-5">
            <div className="flex flex-row ml-5">
              <h1 className="font-mono font-bold">YEAR OF STUDY : </h1>
              <h1 className=" ml-3 font-light font-mono">{yearofStudy} </h1>
            </div>
          </div>
          <div className="flex flex-col  m-5">
            <div className="flex flex-row ml-5">
              <h1 className="font-mono font-bold">SEATER TYPE : </h1>
              <h1 className=" ml-3 font-light font-mono">{Seater_type} </h1>
            </div>
          </div>
          <div className="flex flex-col  m-5">
            <div className="flex flex-row ml-5">
              <h1 className="font-mono font-bold">DUE PENDING : </h1>
              {DueStatus ? (
                <h1 className=" ml-3 font-light font-mono"> Yes</h1>
              ) : (
                <h1 className=" ml-3 font-light font-mono"> No</h1>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[370px] - h-[250px] bg-zinc-200 rounded-[30px] mt-8 ml-12 shadow-xl">
          <div className="flex flex-col">
            <div className="font-extrabold font-mono ml-24 mt-4 ">
              Request's DashBoard
            </div>
          </div>
          <div className=" mt-3 border-b-2 border-white"></div>
          <div className="mt-5 ml-5 font-semibold">Message from Warden: </div>
          <div className="mt-2 ml-5 font-semibold"> {mes}</div>
        </div>
      </div>
    </div>
  );
}

export default footer_Component;
