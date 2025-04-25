import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";

import Income from "./components/Income";
import Expenses from "./components/Expenses";
import Signup from "./components/signup";
import Login from "./components/login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Income" element={<Income />} />
        <Route path="/Expenses" element={<Expenses />} />
      </Routes>
    </>
  );
}

export default App;
