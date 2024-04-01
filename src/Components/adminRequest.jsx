import axios from "axios";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

function AdminRequest({ ChangeRequests, setChangeRequests = () => {} }) {
  const handleSetAllocation = async (rollNo, block, room, seater) => {
    try {
      // Send a POST request to update the Allocation
      const formData = {
        id: rollNo,
        Block: block,
        Room: room,
        SeaterType: seater,
        allocationStatus: true, // Set to true or false based on your logic
      };

      const response = await fetch(
        `http://localhost:4000/Students/updateAllocation/${rollNo}`,
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

        // Remove the request from the state
        setChangeRequests((requests) =>
          requests.filter((request) => request.rollNo !== rollNo)
        );
        window.location.reload();
      } else {
        // Handle errors, e.g., show an error message
        console.error("Error updating Allocation");
      }
    } catch (error) {
      console.error("Request error:", error);
    }
  };

  const handleSetMessage = async (rollNo) => {
    try {
      console.log("this snippet is running");
      // Send a POST request to update the Allocation

      const formData = {
        id: rollNo,
        Message: "Rooms has been Successfully Allocated", // Set to true or false based on your logic
      };

      const response = await fetch(
        `http://localhost:4000/Students/updateMessage/${rollNo}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      console.log(formData);
      if (response.ok) {
        // Handle success, e.g., show a success message
        console.log("Allocation updated successfully");
        setChangeRequests((requests) =>
          requests.filter((request) => request.rollNo !== rollNo)
        );
        // Remove the request from the state
      } else {
        // Handle errors, e.g., show an error message
        console.error("Error Updating Message");
      }
    } catch (error) {
      console.error("Request error:", error);
    }
  };

  const handleSetMeetMessage = async (rollNo) => {
    try {
      console.log("this snippet is running");
      // Send a POST request to update the Allocation

      const formData = {
        id: rollNo,
        Message: "Meet me At office A-109", // Set to true or false based on your logic
      };

      const response = await fetch(
        `http://localhost:4000/Students/updateMessage/${rollNo}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      console.log(formData);
      if (response.ok) {
        // Handle success, e.g., show a success message
        console.log("Allocation updated successfully");
        setChangeRequests((requests) =>
          requests.filter((request) => request.rollNo !== rollNo)
        );
        // Remove the request from the state
      } else {
        // Handle errors, e.g., show an error message
        console.error("Error Updating Message");
      }
    } catch (error) {
      console.error("Request error:", error);
    }
  };

  const handleNewRoom = async (rollNo, Block, Room) => {
    try {
      console.log("this snippet is running");

      // Set the block and room based on your logic
      const block = Block; // Change this to the desired block
      const room = Room; // Change this to the desired room

      // Send a POST request to add the student to the room's occupants
      const formData = {
        rollNo: rollNo,
      };

      axios
        .post(
          `http://localhost:4000/updateOccupant/${block}/${room}`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          // Handle success, e.g., show a success message
          console.log("Student added to the room successfully");

          // Remove the request from the state
          setChangeRequests((requests) =>
            requests.filter((request) => request.rollNo !== rollNo)
          );
        })
        .catch((error) => {
          console.error("Error adding student to the room");
          console.log(error);
        });
    } catch (error) {
      console.error("Request error:", error);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-screen-md mx-auto bg-white mt-5 p-4 gap-10 font-mono">
      <h1 className="text-4xl font-bold">Room Allocation Requests</h1>
      {ChangeRequests.map((request, index) => (
        <Request
          key={index}
          ChangeRequest={request}
          handleSetAllocation={handleSetAllocation}
          handleSetMessage={handleSetMessage}
          handleSetMeetMessage={handleSetMeetMessage}
          handleNewRoom={handleNewRoom}
        />
      ))}
    </div>
  );
}

function Request({
  ChangeRequest,
  handleSetAllocation,
  handleSetMessage,
  handleSetMeetMessage,
  handleNewRoom,
}) {
  return (
    <div className="flex flex-row justify-between items-center min-w-full h-24 bg-transparent border-[1px] pl-5 pr-5 border-gray-400 rounded-md">
      <div>
        {ChangeRequest.name} ({ChangeRequest.rollNo}) from{" "}
        {ChangeRequest.department} has requested allocation for{" "}
        {ChangeRequest.seater} in room {ChangeRequest.roomPreference} of block{" "}
        {ChangeRequest.blockPreference}. Do you want to accept it? Or reject it?
      </div>

      <div className="flex flex-row justify-end gap-5">
        <button
          className="text-4xl rounded-full shadow shadow-green-500"
          onClick={() => {
            handleSetAllocation(
              ChangeRequest.rollNo,
              ChangeRequest.blockPreference,
              ChangeRequest.roomPreference,
              ChangeRequest.seater
            );
            handleSetMessage(ChangeRequest.rollNo);
            handleNewRoom(
              ChangeRequest.rollNo,
              ChangeRequest.blockPreference,
              ChangeRequest.roomPreference
            );
          }}
        >
          <AiOutlineCheckCircle />
        </button>

        <button
          className="text-4xl rounded-full shadow shadow-red-500"
          onClick={() => {
            handleSetMeetMessage(ChangeRequest.rollNo);
          }}
        >
          <AiOutlineCloseCircle />
        </button>
      </div>
    </div>
  );
}
export default AdminRequest;
