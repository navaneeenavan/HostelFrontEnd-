import React from "react";
import AdminNavBar from "../Components/adminNavBar.jsx"
import AdminRequestComp from "../Components/adminRequest.jsx"
import ChangeRequest from "../Constant/Reallocation.js"
function AdminRequest() {

    const [ChangeData, setChangeRequests] = ChangeRequest(); // Assuming this returns an array of change requests
    return (
      <div className="flex flex-row">
        <AdminNavBar />
        <AdminRequestComp ChangeRequests={ChangeData} setChangeRequests={setChangeRequests} /> {/* Pass ChangeData as a prop */}
      </div>
    );
  }

export default AdminRequest
