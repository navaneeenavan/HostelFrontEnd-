import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Seaters = [
  {
    value: "1Seater",
    label: "1",
  },
  {
    value: "2Seater",
    label: "2",
  },
  {
    value: "3Seater",
    label: "3",
  },
  {
    value: "4Seater",
    label: "4",
  },
  {
    value: "Dorm",
    label: "Dormitory",
  },
];

function AllocationForm({ Student }) {
  const [formData, setFormData] = useState({
    seater: "",
    yearOfStudy: Student.Year,
    name: Student.Name,
    rollNo: Student.id,
    department: Student.Department,
    roomPreference: "",
    blockPreference: "",
    phoneNumber: Student.Phone,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the server with the form data
      const response = await axios.post(
        "http://localhost:4000/Room_change_request",
        formData, // Make sure formData is a JSON object
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Handle the response as needed (e.g., show a success message)
      console.log(response.data);

      // Optionally, you can reset the form after submission
      setFormData({
        seater: "",
        yearOfStudy: "",
        name: "",
        rollNo: "",
        department: "",
        roomPreference: "",
        blockPreference: "",
        phoneNumber: "",
      });
    } catch (error) {
      // Handle any errors that occur during the POST request
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <div className="w-[750px] h-[850px] bg-white mt-5 ">
        <form onSubmit={handleSubmit}>
          <h1 className="mt-10 ml-10 font-mono font-extrabold text-5xl">
            ALLOCATION FORM
          </h1>
          <div className="flex flex-col ml-10 mt-10 space-y-7">
            <div className="flex flex-row ">
              <div className="relative">
                <label htmlFor="seater" className="block text-lg font-medium">
                  Seater:
                </label>
                <select
                  id="seater"
                  name="seater"
                  value={formData.seater}
                  required
                  onChange={handleChange}
                  className="mt-1 p-2 pl-4 pr-8 border rounded-lg w-24ch"
                >
                  {Seaters.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="relative ml-4">
                <label
                  htmlFor="yearOfStudy"
                  className="block text-lg font-medium"
                >
                  Year-Of-Study:
                </label>
                <select
                  id="yearOfStudy"
                  name="yearOfStudy"
                  value={formData.yearOfStudy}
                  required
                  onChange={handleChange}
                  className="mt-1 p-2 pl-4 pr-8 border rounded-lg w-24ch"
                ></select>
              </div>
            </div>

            <div className="flex flex-row ">
              <div className="relative ml-4">
                <label htmlFor="name" className="block text-lg font-medium">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  required
                  onChange={handleChange}
                  className="mt-1 p-2 pl-4 border rounded-lg w-50ch"
                />
              </div>
            </div>

            <div className="flex flex-row ">
              <div className="relative">
                <label htmlFor="rollNo" className="block text-lg font-medium">
                  Roll No:
                </label>
                <input
                  type="text"
                  id="rollNo"
                  name="rollNo"
                  value={formData.rollNo}
                  required
                  onChange={handleChange}
                  className="mt-1 p-2 pl-4 border rounded-lg w-10ch"
                />
              </div>

              <div className="relative ml-4">
                <label
                  htmlFor="department"
                  className="block text-lg font-medium"
                >
                  Department:
                </label>
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  required
                  onChange={handleChange}
                  className="mt-1 p-2 pl-4 pr-8 border rounded-lg w-38ch"
                ></select>
              </div>
            </div>

            <div className="flex flex-row ">
              <div className="relative">
                <label
                  htmlFor="roomPreference"
                  className="block text-lg font-medium"
                >
                  Room Preference:
                </label>
                <input
                  type="text"
                  id="roomPreference"
                  name="roomPreference"
                  value={formData.roomPreference}
                  required
                  onChange={handleChange}
                  className="mt-1 p-2 pl-4 border rounded-lg w-24ch"
                />
              </div>

              <div className="relative ml-4">
                <label
                  htmlFor="blockPreference"
                  className="block text-lg font-medium"
                >
                  Block Preference:
                </label>
                <input
                  type="text"
                  id="blockPreference"
                  required
                  name="blockPreference"
                  value={formData.blockPreference}
                  onChange={handleChange}
                  className="mt-1 p-2 pl-4 border rounded-lg w-24ch"
                />
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="phoneNumber"
                className="block text-lg font-medium"
              >
                Phone Number:
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                required
                onChange={handleChange}
                className="mt-1 p-2 pl-4 border rounded-lg w-50ch"
              />
            </div>

            <div className="flex min-w-screen  justify-end mt-10 mr-10">
              {/* <Link to="/Confirm"> */}
              <button
                type="submit"
                className="border-2 border-[#FF435F] opacity-95 h-10 w-32 rounded-lg font-normal spacing text-md"
                style={{ letterSpacing: "2px" }}
              >
                SUBMIT
              </button>
              {/* </Link> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AllocationForm;
