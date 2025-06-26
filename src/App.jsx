import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./router/AppRoutes";

function App() {
  return (
    <React.Fragment>
      <AppRoutes />
      <Footer />
    </React.Fragment>
  );
}

export default App;
