import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
<<<<<<< HEAD
import { useState, useEffect } from "react";
=======
>>>>>>> 2ad728cdf6c885c03d2912149663f3f15f2560d1

import Navbar from "./components/Navbar/Navbar";
import AIWidget from "./components/Ai-component/AIWidget";

import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import AfterLoginDashboard from "./pages/AfterLoginDashboard";
import Growth from "./pages/Growth";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
<<<<<<< HEAD
import ResumeBuilder from "./pages/ResumeBuilder";
import InterviewPrep from "./pages/InterviewPrep";
=======
>>>>>>> 2ad728cdf6c885c03d2912149663f3f15f2560d1

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const location = useLocation();
<<<<<<< HEAD
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleStorageChange = () => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) setTheme(savedTheme);
    };
    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("themeChange", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("themeChange", handleStorageChange);
    };
  }, []);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/after-login" element={<ProtectedRoute><AfterLoginDashboard /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/growth" element={<ProtectedRoute><Growth /></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute><Settings theme={theme} setTheme={setTheme} /></ProtectedRoute>} />
          <Route path="/projects" element={<ProtectedRoute><Projects /></ProtectedRoute>} />
          <Route path="/certificates" element={<ProtectedRoute><Certificates /></ProtectedRoute>} />
          <Route path="/resume" element={<ProtectedRoute><ResumeBuilder /></ProtectedRoute>} />
          <Route path="/interview" element={<ProtectedRoute><InterviewPrep /></ProtectedRoute>} />
        </Routes>
      </AnimatePresence>
=======

  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Public Pages */}

          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Dashboard */}

          <Route
            path="/after-login"
            element={
              <ProtectedRoute>
                <AfterLoginDashboard />
              </ProtectedRoute>
            }
          />

          {/* Protected Pages */}

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/growth"
            element={
              <ProtectedRoute>
                <Growth />
              </ProtectedRoute>
            }
          />

          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />

          <Route
            path="/projects"
            element={
              <ProtectedRoute>
                <Projects />
              </ProtectedRoute>
            }
          />

          <Route
            path="/certificates"
            element={
              <ProtectedRoute>
                <Certificates />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AnimatePresence>

>>>>>>> 2ad728cdf6c885c03d2912149663f3f15f2560d1
      <AIWidget />
    </>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 2ad728cdf6c885c03d2912149663f3f15f2560d1
