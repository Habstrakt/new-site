import React, { useEffect, useState } from "react";
import sunIcon from "../assets/img/icons/Sun-icon.svg";
import moonIcon from "../assets/img/icons/Moon-icon.svg";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

const links = [
  { name: "Портфолио", url: "/" },
  { name: "Скиллы", url: "/skills" },
  { name: "Контакты", url: "/contacts" },
  { name: "Блог", url: "/blog" },
];

const Navigation: React.FC = () => {
  const location = useLocation();

  const [isDarkMode, setIsDarkMode] = useState(false);

  const [activePath, setActivePath] = useState(location.pathname);

  const handleClick = (path: string) => {
    setActivePath(path);
  };

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);

    setActivePath(location.pathname);
  }, [isDarkMode, location]);

  return (
    <>
      <nav className="nav">
        <div className="container">
          <div className="nav__row">
            <Link to="/" className="logo">
              <strong>Kukuruza </strong>
              portfolio
            </Link>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={classNames(
                "dark-mode-btn",
                isDarkMode ? "dark-mode-btn--active" : "",
              )}
              type="button"
            >
              <img
                className="dark-mode-btn__icon"
                src={sunIcon}
                alt="light-mode"
              />
              <img
                className="dark-mode-btn__icon"
                src={moonIcon}
                alt="dark-mode"
              />
            </button>
            <ul className="nav__list">
              {links.map((item) => (
                <li key={item.name} className="nav__list-item">
                  <Link
                    onClick={() => handleClick(item.url)}
                    className={classNames(
                      "nav__list-link",
                      activePath === item.url ? "nav__list-link--active" : "",
                    )}
                    to={item.url}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
