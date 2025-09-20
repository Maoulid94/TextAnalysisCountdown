import "../styles/header.css";
export const Header = () => {
  return (
    <div className="header">
      <img className="ansie" src="/icon.png" alt="logo" />
      <h2>
        <span className="hidden">Text Analysis</span>
      </h2>
      <img className="logo" src="/background.jpg" alt="logo" />
    </div>
  );
};
export default Header;
