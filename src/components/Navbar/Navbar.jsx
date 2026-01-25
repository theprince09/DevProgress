import "./Navbar.css";
import { useState, useRef, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="pro-navbar">
      {/* Left */}
      <div className="nav-left">
        <span className="logo-icon">📊</span>
        <span className="logo-text">DevProgress</span>
      </div>

      {/* Center */}
      <ul className={`nav-links ${open ? "show" : ""}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            🏠 Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/growth"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            📈 Your Growth
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            🗂 Projects
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/certificates"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            🏆 Certificates
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/reminders"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            🔔 Reminders
          </NavLink>
        </li>
      </ul>

      {/* Right */}
      <div className="nav-right">
        {/* Search */}
        <div className="nav-search">
          <input type="text" placeholder="Search..." />
          <button>🔍</button>
        </div>

        {/* Notification */}
        <div className="notif-icon">
          🔔
          <span className="notif-badge">3</span>
        </div>

        {/* Profile */}
        <div className="profile-wrapper" ref={dropdownRef}>
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="profile-icon"
            onClick={() => setProfileOpen(!profileOpen)}
          />

          <div className={`profile-dropdown ${profileOpen ? "open" : ""}`}>
            <p onClick={() => navigate("/profile")}>👤 Profile</p>

            <p onClick={() => navigate("/settings")}>⚙ Settings</p>
            <p onClick={() => navigate("/login")}>🔐 Login</p>
            <p onClick={() => navigate("/after-login")}>🔐 AfterLogin</p>

            <p>🚪 Logout</p>
          </div>
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
