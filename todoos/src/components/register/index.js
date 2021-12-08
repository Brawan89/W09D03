import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";


const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // function register
  const register = async () => {
    try {
      const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/register`, {
        email,
        password,
        role: "61ac945d4681b01bd751c7ee",
      });
      console.log(result);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <input
        type="email"
        name="email"
        placeholder="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
    
      <button onClick={register}>Register</button>
    </>
  );
};

export default Register;
