import './App.css';
import Login from "./components/login";
import Register from "./components/register";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
    </Routes>
  </>
  );
}

export default App;
