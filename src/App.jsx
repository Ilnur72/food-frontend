import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Setting from "./pages/Seeting/Setting";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/setting" element={<Setting />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
