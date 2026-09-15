
import Login from "./components/Login.jsx";
import Registration from "./components/Registration.jsx";
import "tailwindcss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Navbar from "./components/navbar.jsx";
import ResetPw from "./components/ResetPw.jsx";
import ResetOtp from "./components/ResetOtp.jsx";
import NewPw from "./components/NewPw.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPw />} />
          <Route path="/reset-otp" element={<ResetOtp />} />
          <Route path="/new-password" element={<NewPw />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;