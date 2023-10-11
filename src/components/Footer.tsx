import React from "react";
import linkedInLogo from "../assets/img/icons/linkedIn.svg";
import gitHubLogo from "../assets/img/icons/gitHub.svg";

const socialLinks = [
  {
    id: 1,
    title: "github",
    img: `${gitHubLogo}`,
    url: "https://github.com/Habstrakt",
  },
  {
    id: 2,
    title: "linkedin",
    img: `${linkedInLogo}`,
    url: "https://www.linkedin.com/in/gribanov-pavel",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            {socialLinks.map((item) => (
              <li key={item.id} className="social__item">
                <a href={item.url} target="_blank">
                  <img src={item.img} alt={item.title} />
                </a>
              </li>
            ))}
          </ul>
          <div className="copyright">
            <p>© 2024 kukuruza.dev</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
