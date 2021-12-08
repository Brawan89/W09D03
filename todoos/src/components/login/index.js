import React, { useEffect, useState } from "react";
import axios from "axios";
import Todos from "../todos";
import { log } from "./../../reducers/login";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
  const state = useSelector((state) => {
    return state;
    
  });
  const dispatch = useDispatch();

  // function login
  const login = async () => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/login`,
        {
          email,
          password,
        }
      );
      const data = {
          user: result.data.result,
          token: result.data.token,
      };
      console.log(result.data.result.role);
      dispatch(log(data))
    
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!state.signIn.token ? (
        <>
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={login}>login</button>
        </>
      ) : (
        <Todos  />
      )}
    </>
  );
};
export default Login;
