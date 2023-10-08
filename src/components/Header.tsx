import React from "react";

const Header: React.FC = () => {
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">
            <strong>
              Привет, меня зовут <em>Павел</em>
            </strong>
            <p>фронтенд-разработчик</p>
          </h1>
          <div className="header__text">
            <p>стремлюсь к поддержанию актуальных знаний.</p>
          </div>
          <a
            href="https://hh.ru/resume/397aeec0ff078f41cb0039ed1f3938314f6933"
            target="_blank"
            className="btn"
          >
            Просмотреть резюме
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
