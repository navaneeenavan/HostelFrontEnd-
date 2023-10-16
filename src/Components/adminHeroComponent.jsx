import React, { useEffect, useState } from "react";
import { BlockA, BlockB, BlockC, BlockD } from "../Constant/Blocks";

function AdminHeroComponent({ Student }) {
  const blockA = BlockA();
  const blockB = BlockB();
  const blockC = BlockC();
  const blockD = BlockD();

  const [currentBlock, setCurrentBlock] = useState(blockA);

  function handleClick(block) {
    setCurrentBlock(block); // Update the currentBlock when a button is clicked
  }

  return (
    <div className="w-full max-w-screen-md mx-auto bg-white mt-5 p-4">
      <h1 className="text-3xl font-mono font-extrabold mb-6">
        Hello Mr.Senbagaraj
      </h1>
      <div className="flex flex-row gap-5 mt-5">
        <button
          className={`border-[1px] border-pink-300 rounded-md w-24 ${
            currentBlock === blockA ? "bg-pink-300" : ""
          }`}
          onClick={() => handleClick(blockA)}
        >
          A
        </button>
        <button
          className={`border-[1px] border-pink-300 rounded-md w-24 ${
            currentBlock === blockB ? "bg-pink-300" : ""
          }`}
          onClick={() => handleClick(blockB)}
        >
          B
        </button>
        <button
          className={`border-[1px] border-pink-300 rounded-md w-24 ${
            currentBlock === blockC ? "bg-pink-300" : ""
          }`}
          onClick={() => handleClick(blockC)}
        >
          C
        </button>
        <button
          className={`border-[1px] border-pink-300 rounded-md w-24 ${
            currentBlock === blockD ? "bg-pink-300" : ""
          }`}
          onClick={() => handleClick(blockD)}
        >
          D
        </button>
      </div>
      <div className="max-h-screen overflow-x-auto mt-10">
        {Array.isArray(currentBlock) &&
          currentBlock.map((floor, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-lg font-semibold mb-2">
                Floor {floor.floor}
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {floor.rooms.map((room) => (
                  <Room
                    key={room.id}
                    id={room.id}
                    type={room.type}
                    occupants={room.occupants}
                    occupancy={room.occupancy}
                  />
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

function Room({ id, type, occupants, occupancy }) {
  const [Status, setStatus] = useState(false);

  useEffect(() => {
    const len = occupants.length;
    setStatus(len === type);
  }, [occupants, type]);

  return (
    <div
      className={`${
        // Occupancy
        !Status === true
          ? "border-green-400 shadow shadow-teal-400"
          : "border-red-300 shadow shadow-red-400"
      } flex flex-col  rounded-md border-[1px] w-72  h-32`}
    >
      <div className="flex flex-col ml-5 justify-center font-medium mt-3">
        <div className="">{id}</div>
        <div className="">Type: {type} Seater</div>

        <div className="flex flex-row">
          Occupants: {occupants.map((occupant) => occupant.rollNo).join(", ")}{" "}
        </div>
      </div>
    </div>
  );
}

export default AdminHeroComponent;
