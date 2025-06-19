import "../styles/footer.css";
export const Footer = () => {
  return (
    <div className="footer">
      <span className="copyright">© {new Date().getFullYear()}</span>
      <span>
        <span className="la">La</span>
        <span className="r">R</span>
        <span className="ai">AI</span>. Tous droits réservés.
      </span>
    </div>
  );
};
export default Footer;
