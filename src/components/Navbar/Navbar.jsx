import "./Navbar.css";
import { useState, useRef, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const dropdownRef = useRef(null);

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
      {/* Logo */}

      <div className="nav-left">
        <span className="logo-icon">📊</span>
        <span className="logo-text">DevProgress</span>
      </div>

      {/* Navigation */}

      <ul className={`nav-links ${open ? "show" : ""}`}>
        <li>
          <NavLink to="/after-login">🏠 Dashboard</NavLink>
        </li>

        <li>
          <NavLink to="/growth">📈 Your Growth</NavLink>
        </li>

        <li>
          <NavLink to="/projects">🗂 Projects</NavLink>
        </li>

        <li>
          <NavLink to="/certificates">🏆 Certificates</NavLink>
        </li>
      </ul>

      {/* Right Section */}

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

            <p onClick={() => navigate("/after-login")}>📊 Dashboard</p>

            <p
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
            >
              🚪 Logout
            </p>
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
