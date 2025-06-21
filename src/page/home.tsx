import { useNavigate } from "react-router-dom";
import "../styles/home.css";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <p>Procédure de traitement automatisé des réponses via IA</p>
      <img
        className="Schéma-Questionnaire-img"
        src="/Schéma_Questionnaire.png"
        alt="logo"
      />
      <button
        onClick={() => navigate("/countdown", { replace: true })}
        className="btn"
      >
        <img className="icon" src="/icon.png" />
        Démarrer l’analyse
      </button>
    </div>
  );
};
export default Home;
