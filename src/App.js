import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Forms from "./Pages/Forms";
import Home from "./Pages/Home";
import ReallocationRequest from "./Pages/Reallocation_Request";
import Login from "./Components/login";
import ConfirmationPage from "./Pages/confirmationPage";
import AdminHero from "./Pages/AdminHero";
import AdminRequest from "./Pages/AdminRequest";
import axios from "axios";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("USER", user);
  }, [user]);

  useEffect(() => {
    const userIdToFetch = "21z236";

    axios
      .get("http://localhost:4000/Students")
      .then((res) => {
        const userData = res.data.find((item) => item.id === userIdToFetch);
        setUser(userData || {});
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <React.Fragment>
      {user && (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home Student={user} />} />
          <Route path="/Forms" element={<Forms Student={user} />} />
          <Route
            path="/Prof"
            element={<ReallocationRequest Student={user} />}
          />
          <Route path="/Confirm" element={<ConfirmationPage />} />
          <Route path="/AdminHero" element={<AdminHero Student={user} />} />
          <Route
            path="/AdminRequest"
            element={<AdminRequest Student={user} />}
          />
        </Routes>
      )}
    </React.Fragment>
  );
};

export default App;
