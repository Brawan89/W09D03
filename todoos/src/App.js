import './App.css';
import Login from "./components/login";
import Register from "./components/register";
import { Routes, Route } from "react-router-dom";
import Todos from './components/todos';


function App() {
  return (
    <>
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/todos" element={<Todos />} />

      <Route exact path="/" element={<Register />} />
    </Routes>
  </>
  );
}

export default App;
