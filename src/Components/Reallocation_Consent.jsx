import React, { useState } from "react";
import AlertDialogSlide from "./dialog_box";
import { Reasons } from "../Constant/General";

const Reallocation_Consent = ({ Student }) => {
  const [val, setVal] = useState(false);
  const [selectedReason, setSelectedReason] = useState("");
  const [briefReason, setBriefReason] = useState("");

  const handleSetVal = (value) => {
    setVal(true);
  };

  const handleReasonChange = (reason) => {
    setSelectedReason(reason);
    setBriefReason(reason);
  };

  const handleExtraReason = (e) => {
    e.preventDefault();
    setBriefReason(e.target.value);
  };

  // Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be sent in the request body
    const formData = {
      id: Student.id,
      ReallocationReason: briefReason,
    };

    console.log(formData);
    try {
      // Send a POST request to update the ReallocationReason
      const response = await fetch(
        `http://localhost:4000/Students/updateReallocationReason/${Student.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        // Handle success, e.g., show a success message
        console.log("ReallocationReason updated successfully");
      } else {
        // Handle errors, e.g., show an error message
        console.error("Error updating ReallocationReason");
      }
    } catch (error) {
      console.error("Request error:", error);
    }

    // DO NOT TOUCH THE ABOVE ---------------------

    try {
      // Send a POST request to update the Allocation
      const formData = {
        id: Student.id,
        Block:"NONE",
        Room: "NONE",
        SeaterType:"NONE",
        allocationStatus: false, // Set to true or false based on your logic
      };

      const response = await fetch(
        `http://localhost:4000/Students/updateAllocation/${Student.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // Handle success, e.g., show a success message
        console.log("Allocation updated successfully");
        window.location.reload();
        // Remove the request from the state
      } else {
        // Handle errors, e.g., show an error message
        console.error("Error updating Allocation");
      }
    } catch (error) {
      console.error("Request error:", error);
    }
  };






  return (
    <div className="w-[750px] h-[850px] bg-white mt-5 font-mono">
      <div className="flex flex-col">
        <h1 className="mt-10 ml-10 font-mono font-extrabold text-5xl">
          Reallocation-Consent
        </h1>
        <div className="ml-10 mt-5 h-36 w-3/4 rounded-xl bg-gray-200">
          <div className="flex flex-row p-5">
            <h6>ROOM ALLOCATION:</h6>
            <h1 className="ml-4">
              {Student.Allocation ? <p> DONE </p> : <p>NOT DONE</p>}
            </h1>
          </div>
          <div className="pt-5 pl-72 mb-3">
            {Student.Allocation ? (
              <AlertDialogSlide
                DialogTitle="Terms and Condition"
                onAgree={handleSetVal}
              />
            ) : (
              <div className="font-bold mt-3 ">
                {" "}
                Reallocation cannot be done{" "}
              </div>
            )}
          </div>
        </div>

        {val && (
          <form onSubmit={handleSubmit}>
            <div className="mt-5 ml-10 h-[550px] rounded-xl w-[1150px] bg-gray-200 flex flex-row">
              <div className="w-1/2 mt-5 ml-5 border-r-2 border-gray-300 mb-5 flex flex-col">
                <div className="flex flex-col items-center">
                  General Room Change
                </div>
                <div className="mb-24">
                  <select
                    value={selectedReason}
                    onChange={(e) => handleReasonChange(e.target.value)}
                    className="bg-gray-300 mt-10"
                  >
                    <option value="" disabled>
                      Select a reason
                    </option>
                    {Reasons.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>

                  {selectedReason === "Other Reasons" && (
                    <div className="flex flex-col bg-gray-300 p-4 mt-10 mr-10 ml-2 rounded-lg">
                      <label
                        htmlFor="briefReason"
                        className="block text-gray-500 font-bold mb-2"
                      >
                        Brief Reason
                      </label>
                      <textarea
                        id="briefReason"
                        name="briefReason"
                        rows="4"
                        className="w-2/3 h-2/3 bg-gray-300 rounded-md border border-gray-400 mb-2 ml-3"
                        placeholder="Enter Your Reason Here!"
                        value={briefReason}
                        onChange={handleExtraReason}
                      ></textarea>
                    </div>
                  )}
                </div>
                <div className="ml-56 mb-10">
                  <button
                    className="bg-gray-300 hover-bg-gray-400 text-white font-bold py-2 px-4 rounded mb-5 ml-52"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Reallocation_Consent;
