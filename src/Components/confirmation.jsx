import React, { useState } from "react";

function Confirmation() {
  const [SelectedRoom, setSelectedRoom] = useState(0);
  const [rooms, setRooms] = useState([
    {
      id: 1,
      Status: false, // which means that the has not been allocted
    },
    {
      id: 2,
      Status: true,
    },
    {
      id: 3,
      Status: false,
    },
    {
      id: 4,
      Status: true,
    },
    {
      id: 5,
      Status: false,
    },
    {
      id: 6,
      Status: true,
    },
  ]);
  const Prefered_Block = "A";
  const YearOfStudy = "1";

  const handleRoomClick = (roomId) => {
    // Create a new array with updated Status
    
    const updatedRooms = rooms.map((room) => {
      if (room.id === roomId && room.Status === false) {
        return {
          ...room,
          Status: true,
        };
      }
      return room;
    });
    setRooms(updatedRooms);
    setSelectedRoom(roomId);
    // Update the state with the new array

    console.log(SelectedRoom);
  };

  return (
    <div className="w-screen h-[850px] bg-white mt-5">
      <div className="flex flex-col mt-10 ml-10 space-y-5">
        <h1 className="font-mono font-extrabold text-5xl text-black">
          CONFIRMATION PAGE
        </h1>
        <div>
          <h1 className="font-mono">Preferred Room : {Prefered_Block}</h1>
          <h1 className="font-mono">Year of Study : {YearOfStudy}</h1>
        </div>
        <div className="flex flex-row">
          {rooms.map((room) => (
            <Room
              key={room.id}
              room={room}
              onClick={handleRoomClick}
              SelectedRoom={SelectedRoom}
            />
          ))}
        </div>
        <div className = "font-mono">
             Currently Selected Room : {SelectedRoom}
        </div>
      </div>
    </div>
  );
}

function Room({ room, onClick, SelectedRoom }) {
  const handleButtonClick = () => {
    onClick(room.id);
  };

  return (
    <button
      className={`bg-transparent border-2 rounded-lg mr-10 mb-10 w-20 h-10 text-black ${
        SelectedRoom === room.id && room.Status ? "bg-green-400" : ""
      } ${room.Status ? "bg-red-500" : ""}`}
      onClick={handleButtonClick}
    >
      {room.Status ? <span>{room.id}</span> : room.id}
    </button>
  );
}

export default Confirmation