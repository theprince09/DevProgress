import "../styles/Growth.css";
import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
);

const Growth = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "LeetCode",
        data: [2, 4, 3, 6, 5, 7, 8],
        borderColor: "#ff2d2d",
        backgroundColor: "rgba(255,45,45,0.3)",
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: "#ff2d2d",
        fill: true,
      },
      {
        label: "GitHub",
        data: [1, 2, 2, 4, 3, 5, 6],
        borderColor: "#ffffff",
        backgroundColor: "rgba(255,255,255,0.1)",
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 3,
        pointBackgroundColor: "#ffffff",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: "#fff" },
      },
    },
    scales: {
      x: {
        ticks: { color: "#aaa" },
        grid: { color: "rgba(255,255,255,0.05)" },
      },
      y: {
        ticks: { color: "#aaa" },
        grid: { color: "rgba(255,255,255,0.05)" },
      },
    },
  };

  return (
    <motion.div
      className="gr-root"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="gr-header">
        <h1>YOUR GROWTH</h1>
        <p>Every step forward matters.</p>
      </div>

      <div className="gr-main-grid">
        <div className="gr-card gr-card-large">
          <div className="gr-card-title">Overall Progress</div>
          <div className="gr-chart-wrap">
            <Line data={data} options={options} />
          </div>

          <div className="gr-inline-stats">
            <div>🔥 LeetCode: 120</div>
            <div>💻 GitHub: 85</div>
            <div>🚀 Projects: 6</div>
            <div>📜 Certs: 3</div>
          </div>
        </div>

        <div className="gr-side-column">
          {/* HEATMAP */}
          <div className="gr-card">
            <div className="gr-card-title">Contribution Heatmap</div>

            <div className="gr-heatmap-grid">
              {Array.from({ length: 42 }).map((_, i) => (
                <div key={i} className={`gr-heat-cell lvl-${i % 4}`} />
              ))}
            </div>
          </div>

          <div className="gr-card">
            <div className="gr-card-title">Skill Growth</div>

            {[
              ["DSA", "75%"],
              ["React", "82%"],
              ["Node", "65%"],
              ["AWS", "50%"],
            ].map(([skill, val]) => (
              <div className="gr-skill-row" key={skill}>
                <span>{skill}</span>
                <div className="gr-skill-bar">
                  <div style={{ width: val }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="gr-lower-grid">
        <div className="gr-card">
          <div className="gr-card-title">Milestones</div>
          <ul className="gr-timeline">
            <li>
              <span className="dot" /> Started DevProgress
            </li>
            <li>
              <span className="dot" /> 100 LeetCode Solved
            </li>
            <li>
              <span className="dot" /> First Fullstack App
            </li>
            <li>
              <span className="dot" /> First Certificate
            </li>
          </ul>
        </div>

        <div className="gr-card">
          <div className="gr-card-title">Stats</div>
          <div className="gr-stat-grid">
            <div className="gr-stat-box">210 Days</div>
            <div className="gr-stat-box">480 Problems</div>
            <div className="gr-stat-box">12 Projects</div>
            <div className="gr-stat-box">5 Certs</div>
          </div>
        </div>

        <div className="gr-card gr-quote-card">
          <div className="gr-card-title">Daily Quote</div>
          <p>“Discipline beats motivation.”</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Growth;
