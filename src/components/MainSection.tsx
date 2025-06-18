import { useEffect, useState } from "react";
import "../styles/mainSection.css";

const MainSection = () => {
  const [count, setCount] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href =
            "https://app.powerbi.com/view?r=eyJrIjoiMDZhMzk2NTItNjEyMy00OWQ5LWI1MWQtYTAwYWY5ZTg4YjgzIiwidCI6IjNiOGVkMmNiLWY2ZjctNDU5Zi1iNDI0LTc1MTUzMDUzZmFjMiIsImMiOjl9";
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Determine wrapper background color
  let colorClass = "timer-blue";
  if (count <= 15) colorClass = "timer-pulse-red";

  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  const svg_center = 130; // Center of the SVG circle
  const circle_stroke_width = 10; // Stroke width of the circle
  const progress = ((30 - count) / 30) * circumference;

  return (
    <div className="main-section">
      <div className={`timer-wrapper ${colorClass}`}>
        <svg width="260" height="260">
          <circle
            cx={svg_center}
            cy={svg_center}
            r={radius}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth={circle_stroke_width}
          />
          <circle
            cx={svg_center}
            cy={svg_center}
            r={radius}
            fill="none"
            stroke="#3b82f6"
            strokeWidth={circle_stroke_width}
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            strokeLinecap="round"
            className={count <= 15 ? "timer-pulse-red" : ""}
          />
          <g>
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dy=".3em"
              fontSize="44"
              fill={count <= 15 ? "#f87474" : "#ffffff"}
              fontWeight="bold"
              className={count <= 15 ? "timer-pulse-red" : ""}
            >
              {count}
            </text>
          </g>
        </svg>
      </div>
      <p>Your text analysis will begin shortly. Please wait...</p>
    </div>
  );
};

export default MainSection;
