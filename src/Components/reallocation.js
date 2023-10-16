import React, { useState } from "react";
import AlertDialogSlide from "./dialog_box";
import { SelectTextFields } from "../MUI_Coponents/text_box";
import { Reasons } from "../Constant/General";

const Reallocation_Consent = ({ Student }) => {
  const [val, setVal] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [briefReason, setBriefReason] = useState("");

  const handleAgreeValue = (value) => {
    setVal(value);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-[750px] h-[850px] bg-white mt-5 font-mono">
      <div className="flex flex-col">
        <h1 className="mt-10 ml-10 font-mono font-extrabold text-5xl">
          Reallocation-Consent
        </h1>
        <div className="ml-10 mt-5 h-36 w-3/4 rounded-xl bg-gray-200">
          <h6 className="p-5">
            ROOM ALLOCATION :
            {Student.Allocation ? <p> DONE </p> : <p>NOT DONE</p>}
            <div className="pt-7">
              <AlertDialogSlide
                DialogTitle="Terms and Condition"
                onAgree={handleAgreeValue}
              >
                {(agreeVal) => {
                  if (agreeVal) {
                    setVal("1"); // Assuming you want to set it as a string
                  }
                  return null;
                }}
              </AlertDialogSlide>
            </div>
          </h6>
        </div>
        {val && (
          <form onSubmit={handleSubmit}>
            <div className="mt-5 ml-10 h-[550px] rounded-xl w-[1150px] bg-gray-200 flex flex-row">
              <div className="w-1/2 mt-5 ml-5 border-r-2 border-gray-300 mb-5 flex flex-col">
                <div className="flex flex-col items-center">
                  General Room Change
                </div>
                <div className="mb-24">
                  <SelectTextFields
                    label="Room Change Reason"
                    options={Reasons}
                    width="50ch"
                    onOptionChange={handleOptionChange}
                  />
                  {selectedOption === "Other Reasons" && (
                    <div className="flex flex-col bg-gray-300 p-4 mt-10 mr-10 ml-2  rounded-lg">
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
                        className="w-2/3 h-2/3 bg-gray-300 rounded-md border border-gray-400  mb-2 ml-3"
                        placeholder="Enter Your Reason Here!"
                        value={briefReason}
                        onChange={(e) => setBriefReason(e.target.value)}
                      ></textarea>
                    </div>
                  )}
                </div>
                <div>
                  <button
                    className="bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded mb-5 ml-52"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
              <div className="w-1/2 mt-5 ml-10">
                <div className="flex flex-col items-center">
                  Days Scholar Room Switching
                </div>
                {/* Add content for Days Scholar Room Switching here */}
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Reallocation_Consent;
