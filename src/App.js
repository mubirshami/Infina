import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Terms from "./components/terms";
import Privacy from "./components/privacy";
import Signup from "./components/signup";
import ForgotPassword from "./components/forgot-password";
import Packages from "./components/packages";

function App() {
  return (
    <div className="App">
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
