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

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Public Pages */}

          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Pages */}

          <Route
            path="/after-login"
            element={
              <ProtectedRoute>
                <AfterLoginDashboard />
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
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
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
        </Routes>
      </AnimatePresence>

      <AIWidget />
    </>
  );
}

export default App;
