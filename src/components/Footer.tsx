import "../styles/footer.css";
export const Footer = () => {
  return (
    <div className="footer">
      <span className="copyright">© {new Date().getFullYear()}</span>
      <span>
        <span className="la">
          M<span>.</span>
        </span>
        <span className="r">
          A<span>.</span>
        </span>
        <span className="ai">S</span>
      </span>
    </div>
  );
};
export default Footer;
