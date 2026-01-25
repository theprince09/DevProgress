import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar/Navbar";
import AIWidget from "./components/Ai-component/AIWidget";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import AfterLoginDashboard from "./pages/AfterLoginDashboard";
import Growth from "./pages/Growth";
function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/growth" element={<Growth />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/after-login" element={<AfterLoginDashboard />} />
        </Routes>
      </AnimatePresence>
      <AIWidget />
    </>
  );
}

export default App;
