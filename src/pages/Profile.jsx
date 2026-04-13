import "../styles/profile.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { getProfile, updateProfile, logout as doLogout } from "../utils/auth";
=======
>>>>>>> 2ad728cdf6c885c03d2912149663f3f15f2560d1

const cardHover = {
  whileHover: { y: -4, scale: 1.01 },
  transition: { type: "spring", stiffness: 200, damping: 15 },
};

const Profile = () => {
  const navigate = useNavigate();
<<<<<<< HEAD
  const [editOpen, setEditOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState("");

  const [profile, setProfile] = useState({
    name: "",
    role: "Aspiring Software Developer",
    location: "",
    bio: "",
    avatar: "",
    github: "",
    leetcode: "",
    skills: [],
    goals: [],
    learning: [],
  });

  const [editData, setEditData] = useState({ ...profile });
  const [newSkill, setNewSkill] = useState("");
  const [newGoal, setNewGoal] = useState("");
  const [newLearning, setNewLearning] = useState("");

  const [githubStats, setGithubStats] = useState(null);
  const [leetcodeStats, setLeetcodeStats] = useState(null);
  const [certsCount, setCertsCount] = useState(0);

  const modalRef = useRef();

  useEffect(() => {
    loadProfile();
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) setEditOpen(false);
=======

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
>>>>>>> 2ad728cdf6c885c03d2912149663f3f15f2560d1
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

<<<<<<< HEAD
  useEffect(() => {
    const escHandler = (e) => { if (e.key === "Escape") setEditOpen(false); };
=======
  // ESC close
  useEffect(() => {
    const escHandler = (e) => {
      if (e.key === "Escape") setEditOpen(false);
    };
>>>>>>> 2ad728cdf6c885c03d2912149663f3f15f2560d1
    document.addEventListener("keydown", escHandler);
    return () => document.removeEventListener("keydown", escHandler);
  }, []);

<<<<<<< HEAD
  const loadProfile = async () => {
    try {
      const data = await getProfile();
      setProfile(data);
      setEditData(data);

      // Load github stats
      if (data.github) {
        fetch(`http://localhost:5000/api/github/${data.github}`)
          .then(r => r.json()).then(setGithubStats);
      }

      // Load leetcode stats
      if (data.leetcode) {
        fetch(`http://localhost:5000/api/leetcode/${data.leetcode}`)
          .then(r => r.json()).then(setLeetcodeStats);
      }

      // Load certs count
      const email = localStorage.getItem("email");
      if (email) {
        fetch(`http://localhost:5000/api/certificate/${email}`)
          .then(r => r.json()).then(d => setCertsCount(d.length));
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const updated = await updateProfile(editData);
      setProfile(updated);

      // Sync localStorage
      localStorage.setItem("profileName", updated.name);
      localStorage.setItem("github", updated.github);
      localStorage.setItem("leetcode", updated.leetcode);

      setEditOpen(false);
      showToast("✅ Profile saved!");
    } catch (err) {
      showToast("❌ Error saving profile");
    } finally {
      setSaving(false);
    }
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  };

  const handleAvatarUpload = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  // Size check — 2MB se zyada nahi
  if (file.size > 2 * 1024 * 1024) {
    showToast("❌ Image 2MB se choti honi chahiye!");
    return;
  }

  const reader = new FileReader();
  reader.onloadend = () => {
    setEditData({ ...editData, avatar: reader.result });
  };
  reader.readAsDataURL(file);
};
  const logout = () => {
    doLogout();
    navigate("/login");
  };

  if (loading) return (
    <div style={{ color: "#fff", padding: "100px", textAlign: "center" }}>
      Loading profile...
    </div>
  );

=======
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

>>>>>>> 2ad728cdf6c885c03d2912149663f3f15f2560d1
  return (
    <motion.div
      className="profile-root"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
<<<<<<< HEAD
      {toast && <div className="profile-toast">{toast}</div>}

=======
>>>>>>> 2ad728cdf6c885c03d2912149663f3f15f2560d1
      {/* HEADER */}
      <motion.div className="profile-header-card" {...cardHover}>
        <div className="profile-header-left">
          <div className="profile-avatar-wrapper">
<<<<<<< HEAD
            {profile.avatar ? (
              <img src={profile.avatar} className="profile-avatar-img" />
            ) : (
              <div className="profile-avatar-placeholder"></div>
            )}
          </div>

          <div className="profile-header-text">
            <h1>{profile.name || "Developer"}</h1>
            <p>{profile.role}</p>
            {profile.location && <span>📍 {profile.location}</span>}
            {profile.bio && <p className="profile-bio">{profile.bio}</p>}
            {profile.github && (
              <a href={`https://github.com/${profile.github}`} target="_blank" className="profile-link">
                🐙 {profile.github}
              </a>
            )}
          </div>
        </div>

        <button className="profile-edit-btn" onClick={() => { setEditData(profile); setEditOpen(true); }}>
=======
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
>>>>>>> 2ad728cdf6c885c03d2912149663f3f15f2560d1
          Edit Profile
        </button>
      </motion.div>

<<<<<<< HEAD
      {/* STATS */}
      <div className="profile-stats-row">
        <motion.div className="stat-tile" {...cardHover}>
          <h2>{leetcodeStats?.totalSolved || "—"}</h2>
          <p>Problems Solved</p>
        </motion.div>
        <motion.div className="stat-tile" {...cardHover}>
          <h2>{leetcodeStats?.streak || "—"}</h2>
          <p>Day Streak</p>
        </motion.div>
        <motion.div className="stat-tile" {...cardHover}>
          <h2>{githubStats?.public_repos || "—"}</h2>
          <p>Repos</p>
        </motion.div>
        <motion.div className="stat-tile" {...cardHover}>
          <h2>{certsCount}</h2>
          <p>Certifications</p>
        </motion.div>
      </div>

=======
>>>>>>> 2ad728cdf6c885c03d2912149663f3f15f2560d1
      {/* MAIN GRID */}
      <div className="profile-main-grid">
        <div className="profile-column">
          <motion.div className="profile-card" {...cardHover}>
            <h3>My Goals</h3>
            <ul>
<<<<<<< HEAD
              {profile.goals?.length > 0
                ? profile.goals.map((g, i) => <li key={i}>{g}</li>)
                : <li style={{ color: "#888" }}>No goals added yet</li>}
=======
              <li>Become a Full Stack Developer by 2026</li>
              <li>Work at a top tech company</li>
              <li>Build innovative solutions</li>
>>>>>>> 2ad728cdf6c885c03d2912149663f3f15f2560d1
            </ul>
          </motion.div>

          <motion.div className="profile-card" {...cardHover}>
            <h3>Currently Learning</h3>
            <ul>
<<<<<<< HEAD
              {profile.learning?.length > 0
                ? profile.learning.map((l, i) => <li key={i}>{l}</li>)
                : <li style={{ color: "#888" }}>Nothing added yet</li>}
=======
              <li>React Advanced</li>
              <li>System Design</li>
              <li>DSA Level 2</li>
>>>>>>> 2ad728cdf6c885c03d2912149663f3f15f2560d1
            </ul>
          </motion.div>
        </div>

        <div className="profile-column">
          <motion.div className="profile-card" {...cardHover}>
            <h3>Skills & Tech Stack</h3>
            <div className="skills-row">
<<<<<<< HEAD
              {profile.skills?.length > 0
                ? profile.skills.map((s, i) => (
                    <span key={i} className="skill-pill">{s}</span>
                  ))
                : <span style={{ color: "#888" }}>No skills added yet</span>}
=======
              <span className="skill-pill">Java</span>
              <span className="skill-pill">JavaScript</span>
              <span className="skill-pill">React</span>
              <span className="skill-pill">Node.js</span>
              <span className="skill-pill">MongoDB</span>
              <span className="skill-pill">Docker</span>
>>>>>>> 2ad728cdf6c885c03d2912149663f3f15f2560d1
            </div>
          </motion.div>

          <motion.div className="profile-card" {...cardHover}>
<<<<<<< HEAD
            <h3>GitHub Stats</h3>
            {githubStats ? (
              <div className="skills-row">
                <span className="skill-pill">⭐ {githubStats.public_repos} Repos</span>
                <span className="skill-pill">👥 {githubStats.followers} Followers</span>
                <span className="skill-pill">🌐 {githubStats.following} Following</span>
              </div>
            ) : (
              <p style={{ color: "#888" }}>Add GitHub username in Edit Profile</p>
            )}
=======
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
>>>>>>> 2ad728cdf6c885c03d2912149663f3f15f2560d1
          </motion.div>
        </div>
      </div>

<<<<<<< HEAD
      {/* FOOTER */}
      <motion.div className="profile-footer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <button className="footer-btn logout" onClick={logout}>Logout</button>
      </motion.div>

      {/* EDIT MODAL */}
      <AnimatePresence>
        {editOpen && (
          <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
=======
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
>>>>>>> 2ad728cdf6c885c03d2912149663f3f15f2560d1
            <motion.div
              className="edit-modal"
              ref={modalRef}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <h2>Edit Profile</h2>

<<<<<<< HEAD
              <label>Avatar</label>
              <input type="file" accept="image/*" onChange={handleAvatarUpload} />
              {editData.avatar && <img src={editData.avatar} style={{ width: 60, height: 60, borderRadius: "50%", marginBottom: 10 }} />}

              <input placeholder="Full Name" value={editData.name || ""} onChange={(e) => setEditData({ ...editData, name: e.target.value })} />
              <input placeholder="Role" value={editData.role || ""} onChange={(e) => setEditData({ ...editData, role: e.target.value })} />
              <input placeholder="Location" value={editData.location || ""} onChange={(e) => setEditData({ ...editData, location: e.target.value })} />
              <textarea placeholder="Bio" value={editData.bio || ""} onChange={(e) => setEditData({ ...editData, bio: e.target.value })} />
              <input placeholder="GitHub Username" value={editData.github || ""} onChange={(e) => setEditData({ ...editData, github: e.target.value })} />
              <input placeholder="LeetCode Username" value={editData.leetcode || ""} onChange={(e) => setEditData({ ...editData, leetcode: e.target.value })} />

              {/* Skills */}
              <label>Skills</label>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 8 }}>
                {editData.skills?.map((s, i) => (
                  <span key={i} className="skill-pill" style={{ cursor: "pointer" }} onClick={() => setEditData({ ...editData, skills: editData.skills.filter((_, j) => j !== i) })}>
                    {s} ✕
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <input placeholder="Add skill" value={newSkill} onChange={(e) => setNewSkill(e.target.value)} />
                <button onClick={() => { if (newSkill) { setEditData({ ...editData, skills: [...(editData.skills || []), newSkill] }); setNewSkill(""); } }}>Add</button>
              </div>

              {/* Goals */}
              <label>Goals</label>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 8 }}>
                {editData.goals?.map((g, i) => (
                  <span key={i} className="skill-pill" style={{ cursor: "pointer" }} onClick={() => setEditData({ ...editData, goals: editData.goals.filter((_, j) => j !== i) })}>
                    {g} ✕
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <input placeholder="Add goal" value={newGoal} onChange={(e) => setNewGoal(e.target.value)} />
                <button onClick={() => { if (newGoal) { setEditData({ ...editData, goals: [...(editData.goals || []), newGoal] }); setNewGoal(""); } }}>Add</button>
              </div>

              {/* Learning */}
              <label>Currently Learning</label>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 8 }}>
                {editData.learning?.map((l, i) => (
                  <span key={i} className="skill-pill" style={{ cursor: "pointer" }} onClick={() => setEditData({ ...editData, learning: editData.learning.filter((_, j) => j !== i) })}>
                    {l} ✕
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <input placeholder="Add topic" value={newLearning} onChange={(e) => setNewLearning(e.target.value)} />
                <button onClick={() => { if (newLearning) { setEditData({ ...editData, learning: [...(editData.learning || []), newLearning] }); setNewLearning(""); } }}>Add</button>
              </div>

              <div className="modal-actions">
                <button onClick={handleSave} disabled={saving}>
                  {saving ? "Saving..." : "Save"}
                </button>
                <button className="cancel" onClick={() => setEditOpen(false)}>Cancel</button>
=======
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
>>>>>>> 2ad728cdf6c885c03d2912149663f3f15f2560d1
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

<<<<<<< HEAD
export default Profile;
=======
export default Profile;
>>>>>>> 2ad728cdf6c885c03d2912149663f3f15f2560d1
