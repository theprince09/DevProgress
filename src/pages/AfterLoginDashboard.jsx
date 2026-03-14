import "../styles/AfterLoginDashboard.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GitHubCalendar } from "react-github-calendar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Sidebar from "../components/Sidebar";

const cardHover = {
  whileHover: { y: -6, scale: 1.03 },
  transition: { type: "spring", stiffness: 200, damping: 15 },
};

const AfterLoginDashboard = () => {
  const navigate = useNavigate();

  const [githubStats, setGithubStats] = useState(null);
  const [leetcodeStats, setLeetcodeStats] = useState(null);
  const [repos, setRepos] = useState([]);
  const [sortType, setSortType] = useState("new");

  const githubUser = localStorage.getItem("github");
  const leetcodeUser = localStorage.getItem("leetcode");
  const profileName = localStorage.getItem("profileName") || "Developer";

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) navigate("/login");

    if (githubUser) {
      fetch(`http://localhost:5000/api/github/${githubUser}`)
        .then((res) => res.json())
        .then((data) => setGithubStats(data));

      fetch(`https://api.github.com/users/${githubUser}/repos`)
        .then((res) => res.json())
        .then((data) => setRepos(data));
    }

    if (leetcodeUser) {
      fetch(`http://localhost:5000/api/leetcode/${leetcodeUser}`)
        .then((res) => res.json())
        .then((data) => setLeetcodeStats(data));
    }
  }, [navigate, githubUser, leetcodeUser]);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const sortedRepos = [...repos].sort((a, b) => {
    if (sortType === "new")
      return new Date(b.created_at) - new Date(a.created_at);

    return new Date(a.created_at) - new Date(b.created_at);
  });

  const ratingData = [
    { contest: "C1", rating: 1200 },
    { contest: "C2", rating: 1300 },
    { contest: "C3", rating: 1400 },
    { contest: "C4", rating: 1550 },
  ];

  return (
    <div className="dp-root">
      <div className="dp-energy-overlay"></div>

      {/* SIDEBAR */}

      <Sidebar
        githubStats={githubStats}
        profileName={profileName}
        githubUser={githubUser}
        logout={logout}
      />

      {/* MAIN */}

      <main className="dp-main">
        {/* HERO */}

        <section className="dp-hero">
          <div className="dp-hero-left">
            <h1>
              PUSH <span>your limit</span>
            </h1>

            <p>Welcome back, {profileName}!</p>

            <button
              className="dp-primary-btn"
              onClick={() => navigate("/profile")}
            >
              Edit Profile
            </button>
          </div>

          <div className="dp-profile-card">
            {githubStats?.avatar_url ? (
              <img src={githubStats.avatar_url} className="avatar large" />
            ) : (
              <div className="avatar large"></div>
            )}

            <h3>{profileName}</h3>

            <p>Aspiring Developer</p>

            <span>GitHub: {githubUser}</span>
          </div>
        </section>

        {/* STATS */}

        <section className="dp-stats">
          {[
            [leetcodeStats?.totalSolved || "-", "Problems Solved"],

            [leetcodeStats?.streak || "-", "Day Streak"],

            [githubStats?.public_repos || "-", "GitHub Repos"],

            [githubStats?.followers || "-", "Followers"],
          ].map(([num, label]) => (
            <motion.div key={label} className="dp-stat" {...cardHover}>
              <h2>{num}</h2>

              <p>{label}</p>
            </motion.div>
          ))}
        </section>

        {/* HEATMAP SECTION */}

        <section className="dp-section">
          <h2>Activity Heatmaps</h2>

          <div
            style={{
              display: "flex",
              gap: "20px",
              overflowX: "auto",
            }}
          >
            {/* GitHub */}

            <div className="dp-card" style={{ minWidth: "450px" }}>
              <h3>GitHub Contributions</h3>

              <GitHubCalendar username={githubUser} />
            </div>

            {/* LeetCode */}

            <div className="dp-card" style={{ minWidth: "450px" }}>
              <h3>LeetCode Activity</h3>

              <p>(LeetCode submission heatmap coming soon)</p>
            </div>
          </div>
        </section>

        {/* REPO SHOWCASE */}

        <section className="dp-section">
          <h2>GitHub Projects Showcase</h2>

          <div style={{ marginBottom: "10px" }}>
            <button onClick={() => setSortType("old")}>Sort: Old</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => setSortType("new")}>Sort: New</button>
          </div>

          <div className="dp-project-grid">
            {sortedRepos.slice(0, 6).map((repo) => (
              <motion.div key={repo.id} className="dp-card" {...cardHover}>
                <h3>{repo.name}</h3>

                <p>{repo.language}</p>

                <a href={repo.html_url} target="_blank">
                  View Repo
                </a>
              </motion.div>
            ))}
          </div>

          <div style={{ marginTop: "15px" }}>
            <a
              href={`https://github.com/${githubUser}?tab=repositories`}
              target="_blank"
            >
              <button>See All Repos</button>
            </a>
          </div>
        </section>

        {/* CONTEST GRAPH */}

        <section className="dp-section">
          <h2>Contest Rating Progress</h2>

          <div style={{ height: "250px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={ratingData}>
                <XAxis dataKey="contest" />

                <YAxis />

                <Tooltip />

                <Line type="monotone" dataKey="rating" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* PROJECTS (static for now) */}

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

        {/* CERTIFICATES (static for now) */}

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

        <div className="dp-ai-btn">Ask AI</div>
      </main>
    </div>
  );
};

export default AfterLoginDashboard;
