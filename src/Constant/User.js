import axios from "axios";
import React, { useState, useEffect, createContext } from "react";

export const UserContext = createContext();

const User = ({id, children}) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    console.log("USER", user)
  }, [user])

  useEffect(() => {
    const userIdToFetch = id;

    axios
      .get("http://localhost:4000/Students")
      .then((res) => {
        const userData = res.data.find((item) => item.id === userIdToFetch);
        setUser(userData || {});
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]); // Include Id in the dependency array to re-fetch data when Id changes

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default User;
