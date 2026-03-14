import "../styles/profile.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const cardHover = {
  whileHover: { y: -4, scale: 1.01 },
  transition: { type: "spring", stiffness: 200, damping: 15 },
};

const Profile = () => {
  const navigate = useNavigate();

  const [editOpen, setEditOpen] = useState(false);

  const [name, setName] = useState("Aspirant");
  const [role, setRole] = useState("Aspiring Software Developer");
  const [location, setLocation] = useState("Delhi, India");
  const [bio, setBio] = useState("Passionate about building real products.");
  const [avatar, setAvatar] = useState(null);

  const [github, setGithub] = useState("");
  const [leetcode, setLeetcode] = useState("");

  const modalRef = useRef();

  // Load saved data
  useEffect(() => {
    const gh = localStorage.getItem("github");
    const lc = localStorage.getItem("leetcode");
    const n = localStorage.getItem("profileName");

    if (gh) setGithub(gh);
    if (lc) setLeetcode(lc);
    if (n) setName(n);
  }, []);

  // Close modal outside click
  useEffect(() => {
    const handler = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setEditOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // ESC close
  useEffect(() => {
    const escHandler = (e) => {
      if (e.key === "Escape") setEditOpen(false);
    };
    document.addEventListener("keydown", escHandler);
    return () => document.removeEventListener("keydown", escHandler);
  }, []);

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setAvatar(preview);
    }
  };

  // SAVE PROFILE
  const handleSave = () => {
    localStorage.setItem("github", github);
    localStorage.setItem("leetcode", leetcode);
    localStorage.setItem("profileName", name);

    setEditOpen(false);
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <motion.div
      className="profile-root"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* HEADER */}
      <motion.div className="profile-header-card" {...cardHover}>
        <div className="profile-header-left">
          <div className="profile-avatar-wrapper">
            {avatar ? (
              <img src={avatar} className="profile-avatar-img" />
            ) : (
              <div className="profile-avatar-placeholder"></div>
            )}

            <label className="avatar-upload-btn">
              Upload
              <input type="file" hidden onChange={handleAvatarUpload} />
            </label>
          </div>

          <div className="profile-header-text">
            <h1>{name}</h1>
            <p>{role}</p>
            <span>📍 {location}</span>
            <p className="profile-bio">{bio}</p>
          </div>
        </div>

        <button className="profile-edit-btn" onClick={() => setEditOpen(true)}>
          Edit Profile
        </button>
      </motion.div>

      {/* MAIN GRID */}
      <div className="profile-main-grid">
        <div className="profile-column">
          <motion.div className="profile-card" {...cardHover}>
            <h3>My Goals</h3>
            <ul>
              <li>Become a Full Stack Developer by 2026</li>
              <li>Work at a top tech company</li>
              <li>Build innovative solutions</li>
            </ul>
          </motion.div>

          <motion.div className="profile-card" {...cardHover}>
            <h3>Currently Learning</h3>
            <ul>
              <li>React Advanced</li>
              <li>System Design</li>
              <li>DSA Level 2</li>
            </ul>
          </motion.div>
        </div>

        <div className="profile-column">
          <motion.div className="profile-card" {...cardHover}>
            <h3>Skills & Tech Stack</h3>
            <div className="skills-row">
              <span className="skill-pill">Java</span>
              <span className="skill-pill">JavaScript</span>
              <span className="skill-pill">React</span>
              <span className="skill-pill">Node.js</span>
              <span className="skill-pill">MongoDB</span>
              <span className="skill-pill">Docker</span>
            </div>
          </motion.div>

          <motion.div className="profile-card" {...cardHover}>
            <h3>Certificates</h3>
            <div className="certificate-row">
              <motion.div className="certificate-card" {...cardHover}>
                <p>Java Programming</p>
                <span>Coursera</span>
                <button>View</button>
              </motion.div>

              <motion.div className="certificate-card" {...cardHover}>
                <p>React Fundamentals</p>
                <span>Udemy</span>
                <button>View</button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ACHIEVEMENTS */}
      <motion.div className="profile-wide-card" {...cardHover}>
        <h3>Achievements & Milestones</h3>
        <div className="achievement-row">
          <span>🏆 Solved 300+ LeetCode Problems</span>
          <span>🚀 Built Portfolio Website</span>
          <span>📜 Completed Full Stack Course</span>
        </div>
      </motion.div>

      {/* STATS */}
      <div className="profile-stats-row">
        <motion.div className="stat-tile" {...cardHover}>
          <h2>350+</h2>
          <p>Problems Solved</p>
        </motion.div>

        <motion.div className="stat-tile" {...cardHover}>
          <h2>120</h2>
          <p>Day Streak</p>
        </motion.div>

        <motion.div className="stat-tile" {...cardHover}>
          <h2>85</h2>
          <p>Repos</p>
        </motion.div>

        <motion.div className="stat-tile" {...cardHover}>
          <h2>5</h2>
          <p>Certifications</p>
        </motion.div>
      </div>

      {/* FOOTER */}
      <motion.div
        className="profile-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <button className="footer-btn logout" onClick={logout}>
          Logout
        </button>
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {editOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="edit-modal"
              ref={modalRef}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <h2>Edit Profile</h2>

              <input value={name} onChange={(e) => setName(e.target.value)} />
              <input value={role} onChange={(e) => setRole(e.target.value)} />
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <textarea value={bio} onChange={(e) => setBio(e.target.value)} />

              {/* NEW INPUTS */}
              <input
                placeholder="GitHub Username"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
              />

              <input
                placeholder="LeetCode Username"
                value={leetcode}
                onChange={(e) => setLeetcode(e.target.value)}
              />

              <div className="modal-actions">
                <button onClick={handleSave}>Save</button>

                <button className="cancel" onClick={() => setEditOpen(false)}>
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Profile;
