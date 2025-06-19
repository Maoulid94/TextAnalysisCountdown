import { useEffect, useState } from "react";
import "../styles/mainSection.css";

const MainSection = () => {
  const [count, setCount] = useState(45);

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
  if (count <= 10) colorClass = "timer-pulse-red";

  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const svg_center = 100; // Center of the SVG circle
  const circle_stroke_width = 10; // Stroke width of the circle
  const progress = ((45 - count) / 45) * circumference;

  return (
    <div className="main-section">
      <p className="txt">
        Ce petit exercice est le fruit de la collaboration entre l'équipe
        technique de l'ANSIE (Cybersécurité et Computer Sciences) et des
        étudiants de l'Université de Djibouti (parcours IA, data sciences et
        informatique décisionnelle) avec l’appui technique des membres du
        Laboratoire de Recherche en Intelligence Artificielle (LaRIA). Il s'agit
        d'une expérience en immersion pour les participants afin de les
        sensibiliser autour de la question des data et de l'IA à travers un cas
        pratique.
      </p>
      <div className={`timer-wrapper ${colorClass}`}>
        <svg
          width="min(200px,40vw"
          height="min(200px,40vw)"
          viewBox="0 0 200 200"
          preserveAspectRatio="xMidYMid meet"
        >
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
            stroke={count <= 10 ? "red" : "#3b82f9"}
            strokeWidth={circle_stroke_width}
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            strokeLinecap="round"
            className={count <= 10 ? "timer-pulse-red" : ""}
          />
          <g>
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dy=".3em"
              fontSize="55"
              fill="#111111"
              fontWeight="bold"
              className={count <= 10 ? "timer-pulse-red" : ""}
            >
              {count}
            </text>
          </g>
        </svg>
      </div>
      <p className="msg">
        Analyse en cours…Veuillez patienter un instant.
        <br></br>
        Merci!
      </p>
    </div>
  );
};

export default MainSection;
