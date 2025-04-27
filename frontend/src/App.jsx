import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";

import Income from "./components/Income";
import Expenses from "./components/Expenses";
import Signup from "./components/Signup";
import Login from "./components/Login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/income" element={<Income />} />
        <Route path="/expenses" element={<Expenses />} />
      </Routes>
    </>
  );
}

export default App;
