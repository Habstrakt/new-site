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
              <a href="mailto:habstrkt@ya.ru">habstrkt@ya.ru</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">HeadHunter</h2>
            <p>
              <a href="https://x.com/pasha_kukuruza">Ссылка</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">LiknedIn</h2>
            <p>
              <a href="https://x.com/pasha_kukuruza">Ссылка</a>
            </p>
          </li>

          <li className="content-list__item">
            <h2 className="title-2">X</h2>
            <p>
              <a href="https://x.com/pasha_kukuruza">@pasha_kukuruza</a>
            </p>
          </li>
        </ul>
        {/*<div className="map-city">*/}
        {/*    <iframe*/}
        {/*        src="https://yandex.ru/map-widget/v1/?um=constructor%3A5b727033a4baccc6bb0a6304fb4a151cde797b73c85ff4e2f504e693accced56&amp;source=constructor"*/}
        {/*        width="500" height="400" frameborder="0"*/}
        {/*        class="rounded-map"></iframe>*/}
        {/*</div>*/}
      </div>
    </main>
  );
};
export default Contacts;
