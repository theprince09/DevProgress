import "../styles/AfterLoginDashboard.css";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const cardHover = {
  whileHover: { y: -6, scale: 1.03 },
  transition: { type: "spring", stiffness: 200, damping: 15 },
};

const AfterLoginDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <div className="dp-root">
      {/* ENERGY OVERLAY */}

      <div className="dp-energy-overlay"></div>

      {/* SIDEBAR */}

      <aside className="dp-sidebar">
        <div className="dp-logo">devProgress</div>

        <nav className="dp-nav">
          <a className="active">Dashboard</a>
          <a>Projects</a>
          <a>Mentors</a>
          <a>Learning</a>
          <a>Growth</a>
        </nav>

        {/* Career Progress */}

        <div className="dp-progress-box">
          <div className="dp-ring">
            <svg>
              <circle cx="45" cy="45" r="40"></circle>

              <circle cx="45" cy="45" r="40" className="progress"></circle>
            </svg>

            <span>40%</span>
          </div>

          <p>Career Progress</p>
        </div>

        {/* Mini User */}

        <div className="dp-user-mini">
          <div className="avatar"></div>

          <div>
            <h4>Prince</h4>

            <p>Aspiring Developer</p>
          </div>
        </div>

        {/* Logout */}

        <button className="dp-logout" onClick={logout}>
          Logout
        </button>
      </aside>

      {/* MAIN */}

      <main className="dp-main">
        {/* HERO */}

        <section className="dp-hero">
          <div className="dp-hero-left">
            <h1>
              PUSH <span>your limit</span>
            </h1>

            <p>Welcome back, Prince! Ready to dominate today?</p>

            <button className="dp-primary-btn">Add New Goal</button>
          </div>

          {/* Profile Card */}

          <div className="dp-hero-right">
            <div className="dp-profile-card">
              <div className="avatar large"></div>

              <h3>Prince</h3>

              <p>Aspiring Software Developer</p>

              <span>Punjab, India</span>

              <button>Edit Profile</button>
            </div>
          </div>
        </section>

        {/* STATS */}

        <section className="dp-stats">
          {[
            ["350+", "Problems Solved"],
            ["120", "Day Streak"],
            ["85", "GitHub Repos"],
            ["6", "Certifications"],
          ].map(([num, label]) => (
            <motion.div key={label} className="dp-stat" {...cardHover}>
              <h2>{num}</h2>

              <p>{label}</p>
            </motion.div>
          ))}
        </section>

        {/* PROJECTS */}

        <section className="dp-section">
          <h2>Projects</h2>

          <div className="dp-project-grid">
            {["DevProgress", "ShiftAid", "WeatherNow"].map((p) => (
              <motion.div key={p} className="dp-card" {...cardHover}>
                <h3>{p}</h3>

                <p>In Progress</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CERTIFICATES */}

        <section className="dp-section">
          <h2>Certifications</h2>

          <div className="dp-cert-grid">
            {["Java", "React", "DSA", "Cloud"].map((c) => (
              <motion.div key={c} className="dp-card" {...cardHover}>
                <h3>{c}</h3>

                <p>Verified</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS */}

        <section className="dp-section">
          <h2>Milestones</h2>

          <div className="dp-timeline">
            <div className="dp-timeline-item">🚀 Portfolio Live</div>

            <div className="dp-timeline-item">🏆 300+ LeetCode</div>

            <div className="dp-timeline-item">📜 Full Stack Completed</div>
          </div>
        </section>

        {/* AI BUTTON */}

        <div className="dp-ai-btn">Ask AI</div>
      </main>
    </div>
  );
};

export default AfterLoginDashboard;
