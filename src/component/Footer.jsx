import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div>
          Designed and Developed by <b style={{color: 'var(--mainColor)'}}>Promise Aina</b>
        </div>
        <div>Copyright © 2024 Dev_Promise. All right reserved.</div>
        <div className="footer-links">
          <div className="icon-content">
            <a
              href="https://www.x.com/Dev_Pr0mise"
              target="_blank" rel="noopener noreferrer"
              aria-label="twitter"
              data-social="twitter"
            >
              <div className="filled"></div>
              <FaXTwitter className="tweet" />
            </a>
            <div className="tooltip">X</div>
          </div>

          <div className="icon-content">
            <a
              href="https://www.linkedin.com/in/devpromise"
              target="_blank" rel="noopener noreferrer"
              aria-label="LinkedIn"
              data-social="linkedin"
            >
              <div className="filled"></div>
              <FaLinkedinIn className="linked" />
            </a>
            <div className="tooltip">Linkedin</div>
          </div>

          <div className="icon-content">
            <a
              href="https://github.com/Prom-ise"
              target="_blank" rel="noopener noreferrer"
              aria-label="github"
              data-social="github"
            >
              <div className="filled"></div>
              <FaGithub className="github" />
            </a>
            <div className="tooltip">Github</div>
          </div>

          <div className="icon-content">
          <a
              href="https://www.instagram.com/promise.emmanuel.35110418?igsh=dXo4bWFjaHpvbjh5"
              target="_blank"
              rel="noopener noreferrer"
             aria-label="instagram" data-social="instagram">
              <div className="filled"></div>
              <FaInstagram className="instagram" />
            </a>
            <div className="tooltip">Instagram</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
