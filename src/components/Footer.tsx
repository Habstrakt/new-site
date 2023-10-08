import React from "react";

const socialLinks = [
  {
    id: 1,
    title: "github",
    img: "/src/assets/img/icons/gitHub.svg",
    url: "https://github.com/Habstrakt",
  },
  {
    id: 2,
    title: "linkedin",
    img: "/src/assets/img/icons/linkedIn.svg",
    url: "#",
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
