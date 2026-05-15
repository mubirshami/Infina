import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Terms from "./pages/terms";
import Privacy from "./pages/privacy";
import Signup from "./pages/signup";
import ForgotPassword from "./pages/forgot-password";
import Packages from "./pages/packages";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/packages" element={<Packages />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
