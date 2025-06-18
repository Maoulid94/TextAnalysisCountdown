import "../styles/Footer.css";
export const Footer = () => {
  return (
    <div className="footer">
      © {new Date().getFullYear()} M.A.S. All rights reserved.
    </div>
  );
};
export default Footer;
