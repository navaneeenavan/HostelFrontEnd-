import axios from "axios";
import { useState, useEffect } from "react";

const BlockA = () => {
  const [cont, setCont] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/blockA")
      .then((res) => {
        setCont(res.data);
        console.log(res);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return cont;
};

export { BlockA };


const BlockB = () => {
    const [cont, setCont] = useState([]);
  
    useEffect(() => {
      axios
        .get("http://localhost:4000/blockB")
        .then((res) => {
          setCont(res.data);
          console.log(res);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);
  
    return cont;
  };
  
  export {BlockB};
  
  const BlockC = () => {
    const [cont, setCont] = useState([]);
  
    useEffect(() => {
      axios
        .get("http://localhost:4000/blockC")
        .then((res) => {
          setCont(res.data);
          console.log(res);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);
  
    return cont;
  };
  
  export {BlockC};
  
  const BlockD = () => {
    const [cont, setCont] = useState([]);
  
    useEffect(() => {
      axios
        .get("http://localhost:4000/blockD")
        .then((res) => {
          setCont(res.data);
          console.log(res);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);
  
    return cont;
  };
  
  export {BlockD};
  



