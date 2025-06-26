import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "../screens/Home/HomeScreen";
import AboutUsScreen from "../screens/AboutUs/AboutUsScreen";
import ContactScreen from "../screens/Contact/ContactScreen";
import { aboutUsPath, contactUsPath, homePath } from "../utils/path-constants";
import Navbar from "../components/Navbar";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={homePath} element={<HomeScreen />} />
        <Route path={aboutUsPath} element={<AboutUsScreen />} />
        <Route path={contactUsPath} element={<ContactScreen />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
