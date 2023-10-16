import axios from "axios";
import {React,useState,useEffect} from "react";

const ChangeRequest = () => {


    const [cont, setCont] = useState([]);
  
    useEffect(() => {
      axios
        .get("http://localhost:4000/Room_change_request")
        .then((res) => {
          setCont(res.data);
          console.log(res);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);

    return [cont, setCont];
  };

  export default ChangeRequest;