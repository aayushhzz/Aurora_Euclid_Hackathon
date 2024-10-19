import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Market from "./pages/Market";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-800 shadow min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market" element={<Market />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
