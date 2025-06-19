import "../styles/header.css";
export const Header = () => {
  return (
    <div className="header">
      <img className="ansie" src="/ansie-logo.png" alt="logo" />
      <h2>
        <span className="hidden">
          Laboratoire de Recherche en Intelligence Artificielle (
        </span>
        <span className="la">La</span>
        <span className="r">R</span>
        <span className="ai">IA</span>
        <span className="hidden">)</span>
      </h2>
      <img className="logo" src="/ud-logo.png" alt="logo" />
    </div>
  );
};
export default Header;
