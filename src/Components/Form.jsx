import React, { useEffect, useState } from "react";
import axios from "axios";
import { Seaters } from "../Constant/General";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Others_Block, FirstYear_Block } from "../Constant/General";
import { BlockA, BlockB, BlockC, BlockD } from "../Constant/Blocks";

function Form({ Student }) {
  return (
    <div className="flex flex-col mt-20 ml-20 font-mono">
      <h1 className="text-black font-bold text-3xl">Hello {Student.Name}</h1>
      <div className="flex flex-row mt-3 gap-3">
        <h1 className="font-bold">Room Allocation Status: </h1>
        {Student.Allocation ? (
          <h1>DONE</h1>
        ) : (
          <h1>NOT DONE, YOU CAN FILL FORMS NOW</h1>
        )}
        <div className="pl-96 w-full ">
          <ToastContainer className="w-5 h-5 " />
        </div>
      </div>

      {!Student.Allocation ? (
        <div>
          <AllocationForm Student={Student} />
        </div>
      ) : (
        <div className="mt-3">
          Your Allocation is Already done. If you have to change your room, try
          requesting for reallocation from your side.
        </div>
      )}
    </div>
  );
}

function AllocationForm({ Student }) {
  const blockA = BlockA();
  const blockB = BlockB();
  const blockC = BlockC();
  const blockD = BlockD();

  const [currentBlock, setCurrentBlock] = useState([]);
  const [unoccupiedRooms, setUnoccupiedRooms] = useState([]);
  const [formData, setFormData] = useState({
    seater: null, // Initialize with the default value
    yearOfStudy: Student.Year,
    name: Student.Name,
    rollNo: Student.id,
    department: Student.Department,
    roomPreference: null,
    blockPreference: null,
    phoneNumber: Student.Phone,
    ReallocationReason: Student.ReallocationReason,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("FORMDATA", { ...formData, [name]: value });
    setFormData({ ...formData, [name]: value });
  };

  const handleBlock = (e) => {
    const selectedBlock = e.target.value;

    if (selectedBlock === "A") {
      setCurrentBlock(blockA);
    } else if (selectedBlock === "B") {
      setCurrentBlock(blockB);
    } else if (selectedBlock === "C") {
      setCurrentBlock(blockC);
    } else if (selectedBlock === "D") {
      setCurrentBlock(blockD);
    }
  };

  useEffect(() => {
    const filteredRooms = currentBlock
      .map((floor) => floor.rooms.filter((room) => room.occupancy))
      .flat();

    setUnoccupiedRooms(filteredRooms);
  }, [currentBlock]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success("Form submitted successfully!", {
      position: "top-right",
      autoClose: 3000,
    });

    const completeFormData = {
      seater: formData.seater,
      yearOfStudy: Student.Year,
      name: Student.Name,
      rollNo: Student.id,
      department: Student.Department,
      roomPreference: formData.roomPreference,
      blockPreference: formData.blockPreference,
      phoneNumber: Student.Phone,
      ReallocationReason: Student.ReallocationReason,
    };

    console.log("COMPLETE FORM DATA", completeFormData);

    axios
      .post("http://localhost:4000/Room_change_request", completeFormData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);

        setFormData({
          seater: "",
          yearOfStudy: Student.Year,
          name: Student.Name,
          rollNo: Student.id,
          department: Student.Department,
          roomPreference: "",
          blockPreference: "",
          phoneNumber: Student.Phone,
          ReallocationReason: Student.ReallocationReason,
        });
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        toast.error("Error submitting the form.", {
          position: "top-right",
          autoClose: 3000,
        });
      });
  };

  return (
    <div>
      <div className="w-[750px] h-[850px] bg-white mt-5">
        <form onSubmit={handleSubmit}>
          <h1 className="mt-10 ml-10 font-mono font-extrabold text-5xl">
            ALLOCATION FORM
          </h1>
          <div className="flex flex-col ml-10 mt-10 space-y-7">
            <div className="flex flex-row ">
              <div className="relative ml-4">
                <h1>
                  {" "}
                  <span className="font-bold">Name: </span> {formData.name}
                </h1>
              </div>

              <div className="relative ml-4">
                <h1>
                  {" "}
                  <span className="font-bold">Year-Of-Study: </span>
                  {formData.yearOfStudy}
                </h1>
              </div>
            </div>

            <div className="flex flex-row ">
              <div className="relative ml-4">
                <h1>
                  {" "}
                  <span className="font-bold">Roll No :</span> {formData.rollNo}
                </h1>
              </div>

              <div className="relative ml-4">
                <h1>
                  <span className="font-bold"> Department: </span>
                  {formData.department}
                </h1>
              </div>
            </div>
            <div className="relative ml-4">
              <h1>
                {" "}
                <span className="font-bold">Phone Number :</span>
                {formData.phoneNumber}
              </h1>
            </div>

            <div className="flex flex-row ml-3">
              <div className="relative ml-4">
                <label
                  htmlFor="blockPreference"
                  className="block text-lg font-medium"
                >
                  <span className="font-bold">Block Preference: </span>
                </label>
                <select
                  id="blockPreference"
                  required
                  name="blockPreference"
                  value={formData.blockPreference}
                  onChange={(e) => {
                    handleChange(e);
                    handleBlock(e);
                  }}
                  className="mt-1 p-2 pl-4 border rounded-lg w-24ch"
                >
                  <option selected disabled>
                    Select Block
                  </option>
                  {formData.yearOfStudy === "1"
                    ? FirstYear_Block.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))
                    : Others_Block.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                </select>
              </div>
              <div className="relative">
                <label
                  htmlFor="roomPreference"
                  className="block text-lg font-medium"
                >
                  <span className="font-bold">Room Preference:</span>
                </label>
                <select
                  id="roomPreference"
                  name="roomPreference"
                  value={formData.roomPreference}
                  required
                  onChange={handleChange}
                  className="mt-1 p-2 pl-4 pr-8 border rounded-lg w-24ch"
                >
                  <option selected disabled>
                    Select Room
                  </option>
                  {unoccupiedRooms.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.id}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="relative ml-3">
              <label htmlFor="seater" className="block text-lg font-medium">
                <span className="font-bold">Seater: </span>
              </label>

              <select
                id="seater"
                name="seater"
                value={formData.seater}
                required
                onChange={(e) => handleChange(e)}
                className="mt-1 p-2 pl-4 pr-8 border rounded-lg w-24ch"
              >
                {console.log(
                  formData.roomPreference && formData.roomPreference[1]
                )}
                <option selected disabled>
                  Select seater
                </option>
                <option>
                  {formData.roomPreference && formData.roomPreference[1]}
                </option>
              </select>
            </div>

            <div className="flex min-w-screen  justify-end mt-10 mr-10">
              <button
                type="submit"
                className="border-2 border-[#FF435F] opacity-95 h-10 w-32 rounded-lg font-normal spacing text-md"
                style={{ letterSpacing: "2px" }}
              >
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
