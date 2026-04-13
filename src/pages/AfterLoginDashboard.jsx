import "../styles/AfterLoginDashboard.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GitHubCalendar } from "react-github-calendar";
<<<<<<< HEAD
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { getProfile } from "../utils/auth";

const cardHover = {
  whileHover: { y: -6, scale: 1.02 },
=======
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
>>>>>>> 2ad728cdf6c885c03d2912149663f3f15f2560d1
  transition: { type: "spring", stiffness: 200, damping: 15 },
};

const AfterLoginDashboard = () => {
  const navigate = useNavigate();

<<<<<<< HEAD
  const [profile, setProfile] = useState(null);
  const [githubStats, setGithubStats] = useState(null);
  const [leetcodeStats, setLeetcodeStats] = useState(null);
  const [repos, setRepos] = useState([]);
  const [certs, setCerts] = useState([]);
  const [sortType, setSortType] = useState("new");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) { navigate("/login"); return; }
    loadAll();
  }, []);

  const loadAll = async () => {
    try {
      const prof = await getProfile();
      setProfile(prof);

      // Sync to localStorage
      if (prof.github) localStorage.setItem("github", prof.github);
      if (prof.leetcode) localStorage.setItem("leetcode", prof.leetcode);
      if (prof.name) localStorage.setItem("profileName", prof.name);

      if (prof.github) {
        fetch(`http://localhost:5000/api/github/${prof.github}`)
          .then(r => r.json()).then(setGithubStats);
        fetch(`https://api.github.com/users/${prof.github}/repos?per_page=100`)
          .then(r => r.json()).then(data => Array.isArray(data) && setRepos(data));
      }

      if (prof.leetcode) {
        fetch(`http://localhost:5000/api/leetcode/${prof.leetcode}`)
          .then(r => r.json()).then(setLeetcodeStats);
      }

      const email = localStorage.getItem("email");
      if (email) {
        fetch(`http://localhost:5000/api/certificate/${email}`)
          .then(r => r.json()).then(data => Array.isArray(data) && setCerts(data));
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const sortedRepos = [...repos].sort((a, b) =>
    sortType === "new"
      ? new Date(b.created_at) - new Date(a.created_at)
      : new Date(a.created_at) - new Date(b.created_at)
  );

  // Career progress
  const calcProgress = () => {
    let s = 0;
    if (leetcodeStats?.totalSolved > 0) s += 20;
    if (leetcodeStats?.totalSolved > 100) s += 15;
    if (githubStats?.public_repos > 0) s += 20;
    if (githubStats?.public_repos > 10) s += 10;
    if (certs.length > 0) s += 20;
    if (profile?.skills?.length > 0) s += 10;
    if (profile?.education?.length > 0) s += 5;
    return Math.min(s, 100);
  };

  if (loading) return (
    <div style={{ color: "var(--text,#fff)", padding: "120px 40px", textAlign: "center", fontSize: 16 }}>
      Loading dashboard...
    </div>
  );

  const progress = calcProgress();

  return (
    <div className="dp-main-full">
      <div className="dp-energy-overlay" />

      <main className="dp-content">
        {/* HERO */}
        <section className="dp-hero">
          <div className="dp-hero-left">
            <p className="dp-greeting">Good day 👋</p>
            <h1>Welcome back, <span>{profile?.name || "Developer"}</span>!</h1>
            <p className="dp-subtitle">Keep pushing. Every commit counts. 🚀</p>
            <div className="dp-hero-actions">
              <button className="dp-primary-btn" onClick={() => navigate("/profile")}>Edit Profile</button>
              <button className="dp-secondary-btn" onClick={() => navigate("/resume")}>📄 Build Resume</button>
            </div>
          </div>

          <div className="dp-profile-card">
            {githubStats?.avatar_url
              ? <img src={githubStats.avatar_url} className="avatar large" alt="avatar" />
              : <div className="avatar large placeholder">{profile?.name?.charAt(0) || "D"}</div>
            }
            <h3>{profile?.name || "Developer"}</h3>
            <p>{profile?.role || "Aspiring Developer"}</p>
            {profile?.github && <span>🐙 {profile.github}</span>}
            {profile?.leetcode && <span>⚡ {profile.leetcode}</span>}

            {/* Career Progress */}
            <div className="dp-mini-progress">
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontSize: 12, color: "#aaa" }}>Career Progress</span>
                <span style={{ fontSize: 12, color: "#ff2d2d", fontWeight: 700 }}>{progress}%</span>
              </div>
              <div className="dp-progress-track">
                <div className="dp-progress-fill" style={{ width: `${progress}%` }} />
              </div>
            </div>
=======
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
>>>>>>> 2ad728cdf6c885c03d2912149663f3f15f2560d1
          </div>
        </section>

        {/* STATS */}
<<<<<<< HEAD
        <section className="dp-stats">
          {[
            ["🔥", leetcodeStats?.totalSolved || "—", "Problems Solved"],
            ["⚡", leetcodeStats?.streak || "—", "Day Streak"],
            ["💻", githubStats?.public_repos || "—", "GitHub Repos"],
            ["👥", githubStats?.followers || "—", "Followers"],
            ["📜", certs.length, "Certificates"],
          ].map(([icon, num, label]) => (
            <motion.div key={label} className="dp-stat" {...cardHover}>
              <span className="dp-stat-icon">{icon}</span>
              <h2>{num}</h2>
=======

        <section className="dp-stats">
          {[
            [leetcodeStats?.totalSolved || "-", "Problems Solved"],

            [leetcodeStats?.streak || "-", "Day Streak"],

            [githubStats?.public_repos || "-", "GitHub Repos"],

            [githubStats?.followers || "-", "Followers"],
          ].map(([num, label]) => (
            <motion.div key={label} className="dp-stat" {...cardHover}>
              <h2>{num}</h2>

>>>>>>> 2ad728cdf6c885c03d2912149663f3f15f2560d1
              <p>{label}</p>
            </motion.div>
          ))}
        </section>

<<<<<<< HEAD
        {/* GITHUB HEATMAP */}
        {profile?.github && (
          <section className="dp-section">
            <h2>GitHub Contributions</h2>
            <div className="dp-card" style={{ overflowX: "auto" }}>
              <GitHubCalendar username={profile.github} />
            </div>
          </section>
        )}

        {/* REPOS */}
        {repos.length > 0 && (
          <section className="dp-section">
            <div className="dp-section-header">
              <h2>GitHub Projects</h2>
              <div className="dp-sort-btns">
                <button className={sortType === "new" ? "active" : ""} onClick={() => setSortType("new")}>Newest</button>
                <button className={sortType === "old" ? "active" : ""} onClick={() => setSortType("old")}>Oldest</button>
              </div>
            </div>
            <div className="dp-project-grid">
              {sortedRepos.slice(0, 6).map((repo) => (
                <motion.div key={repo.id} className="dp-card dp-repo-card" {...cardHover}>
                  <div className="repo-top">
                    <h3>{repo.name}</h3>
                    {repo.language && <span className="repo-lang">{repo.language}</span>}
                  </div>
                  {repo.description && <p className="repo-desc">{repo.description}</p>}
                  <div className="repo-stats">
                    <span>⭐ {repo.stargazers_count}</span>
                    <span>🍴 {repo.forks_count}</span>
                  </div>
                  <a href={repo.html_url} target="_blank" className="repo-link">View on GitHub →</a>
                </motion.div>
              ))}
            </div>
            <a href={`https://github.com/${profile?.github}?tab=repositories`} target="_blank">
              <button className="dp-outline-btn" style={{ marginTop: 16 }}>See All Repos</button>
            </a>
          </section>
        )}

        {/* CERTIFICATES — Real */}
        <section className="dp-section">
          <div className="dp-section-header">
            <h2>My Certificates</h2>
            <button className="dp-outline-btn" onClick={() => navigate("/certificates")}>View All</button>
          </div>
          {certs.length > 0 ? (
            <div className="dp-cert-grid">
              {certs.slice(0, 4).map((cert) => (
                <motion.div key={cert._id} className="dp-card dp-cert-card" {...cardHover}>
                  <div className="cert-top">
                    <span className="cert-icon">🏆</span>
                    {cert.proctored && <span className="cert-badge">✔ Verified</span>}
                  </div>
                  <h3>{cert.title}</h3>
                  <p>{cert.issuer}</p>
                  <span className="cert-date">{cert.date}</span>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="dp-card dp-empty-card">
              <p>No certificates yet. <span onClick={() => navigate("/certificates")} style={{ color: "#ff2d2d", cursor: "pointer" }}>Add your first one →</span></p>
            </div>
          )}
        </section>

        {/* QUICK LINKS */}
        <section className="dp-section">
          <h2>Quick Actions</h2>
          <div className="dp-quick-grid">
            {[
              { icon: "📄", label: "Build Resume", path: "/resume", desc: "AI-powered resume" },
              { icon: "🎯", label: "Interview Prep", path: "/interview", desc: "Practice questions" },
              { icon: "📈", label: "View Growth", path: "/growth", desc: "Your progress" },
              { icon: "👤", label: "Edit Profile", path: "/profile", desc: "Update your info" },
            ].map((item) => (
              <motion.div key={item.path} className="dp-card dp-quick-card" {...cardHover} onClick={() => navigate(item.path)}>
                <span style={{ fontSize: 28 }}>{item.icon}</span>
                <h3>{item.label}</h3>
                <p>{item.desc}</p>
=======
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
>>>>>>> 2ad728cdf6c885c03d2912149663f3f15f2560d1
              </motion.div>
            ))}
          </div>
        </section>
<<<<<<< HEAD
=======

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
>>>>>>> 2ad728cdf6c885c03d2912149663f3f15f2560d1
      </main>
    </div>
  );
};

<<<<<<< HEAD
export default AfterLoginDashboard;
=======
export default AfterLoginDashboard;
>>>>>>> 2ad728cdf6c885c03d2912149663f3f15f2560d1
