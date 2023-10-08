import { Portfolios } from "../types.ts";

export const portfolios: Portfolios[] = [
  {
    id: 1,
    title: "Счетчик",
    url: "https://habstrakt.github.io/counter-react/",
    text: "Классический счетчик (counter).",
    instruments: "React, TypeScript",
  },
  {
    id: 2,
    title: "Список задач",
    url: "https://habstrakt.github.io/react-todo/",
    text: "Список задач, в котором пользователь может добавлять, удалять и редактировать записи",
    instruments: "React, TypeScript",
  },
  {
    id: 3,
    title: "Приложение для просмотра погоды",
    url: "https://habstrakt.github.io/react-weather/",
    text: "Приложение, которое показывает текущую погоду в различных городах",
    instruments: "React, TypeScript, API",
  },
  {
    id: 4,
    title: "Сайт доставки пиццы",
    url: "https://habstrakt.github.io/pizza-react/",
    text: "Сайт пиццерии. Страница продуктов, а так же корзина",
    instruments: "React, TypeScript, Redux toolkit",
  },
];
