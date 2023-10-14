import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Forms from "./Pages/Forms"
import Home from "./Pages/Home"
import ReallocationRequest from './Pages/Reallocation_Request';
import Login from './Components/login';
import ConfirmationPage from "./Pages/confirmationPage"
import User from "./Constant/User"



const App = () => {

  const Student = User("23z233")
  console.log(Student);

  
  return (
    
      <Routes>
        <Route path="/" element={<Login/>} />     
        <Route path="/Home" element={<Home Student={Student} />} /> 
        <Route path="/Forms" element={<Forms Student= {Student} />} />
        <Route path="/Prof" element={<ReallocationRequest Student={Student}/>} />
        <Route path="/Confirm" element ={<ConfirmationPage/>} />
      </Routes>
      
      
  );
};

export default App;

