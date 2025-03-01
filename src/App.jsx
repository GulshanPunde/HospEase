import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/nav/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ContactPage from "./pages/ContactPage";
import Help from "./pages/Help";
import AboutUsPage from "./pages/AboutUsPage";
import Footer from "./components/footer/Footer";
import DepartmentDoctors from "./pages/DepartmentDoctors";
import AboutDepartment from "./components/infoCarts/AboutDepartment";
import AppointmentPage from "./pages/AppointmentPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const title = "HospEase";
  // const isLoggedIn = true; 
  const isLoggedIn = false; 
  return (
    <div className="background-image">
     <NavBar title={title} isLoggedIn={isLoggedIn}/>
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/help" element={<Help />} />
      <Route path="/contact-us" element={<ContactPage />} />
      <Route path="/about-us" element={<AboutUsPage/>} />
      <Route path="/department-doctors" element={<DepartmentDoctors/>}/>
      <Route path="/departments" element={<AboutDepartment/>} />
      <Route path="/appointments" element={<AppointmentPage/>} />
      <Route path="/settings" element={<SettingsPage/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
    </Routes>
    <Footer title={title} />
    </div>
  )
}
export default App
