import React from "react";

const Contacts: React.FC = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Контакты</h1>
        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Локация</h2>
            <p>Владивосток, Россия</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p className="content-list__mail">
              <a href="mailto:habstrkt@ya.ru">Написать мне</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">HeadHunter</h2>
            <p>
              <a
                href="https://hh.ru/resume/397aeec0ff078f41cb0039ed1f3938314f6933"
                target="_blank"
              >
                Ссылка
              </a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">LiknedIn</h2>
            <p>
              <a href="www.linkedin.com/in/gribanov-pavel" target="_blank">
                Ссылка
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};
export default Contacts;
