import axios from "axios";
import { useState, useEffect } from "react";

const User = (Id) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:4000/Students?Id=${Id}`)
      .then((res) => {
        setUser(res.data || {});
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [Id]);

  return user;
};

export default User;
