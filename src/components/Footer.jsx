import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa6";
export const Footer = () => (
  <>
    <div className="footer">
      <div className="footer__logo-box">
        <h1 className="footer__logo-box__text heading-primary">journeasy</h1>
      </div>
      <div className="footer__social-links">
        <a href="/" className="footer__social-links__link">
          <FaInstagram className="footer__social-links__link__icon" />
        </a>
        <a
          href="https://github.com/Pranav-Patani/journeasy"
          target="_blank"
          className="footer__social-links__link"
        >
          <FaGithub className="footer__social-links__link__icon" />
        </a>
        <a href="/" className="footer__social-links__link">
          <FaTwitter className="footer__social-links__link__icon" />
        </a>
      </div>
      <p className="footer__bottom-text">Copyright &copy; 2023 journeasy</p>
    </div>
  </>
);
