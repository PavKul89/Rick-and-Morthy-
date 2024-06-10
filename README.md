### Предметная область : приложение персонажей мультфильма Rick and Morthy

- [Используемое API](https://rickandmortyapi.com/)

---
Используемое API: Rick and Morthy
* ОСНОВНОЙ ФУНКЦИОНАЛ
* Регистрация и авторизация пользователя.
* Избранные персонажи. У зарегистрированного пользователя есть возможность добавлять и удалять персонажа из избранного.
* Поиск по имени персонажа.
* История поиска персонажей.


* Реализация требований
- [x] Реализованы требования функционала.
- [x] Для хранения данных используется LocalStorage
  ### REACT
- [x] Пишем функциональные компоненты 
- [x] - [Есть рендеринг списков](https://github.com/PavKul89/Rick-and-Morthy-/blob/27b23ffd24974477618f51650d66f314f9ce7b79/src/components/Posts/Posts.jsx#L88-L97)
- [x] - [Реализована форма](https://github.com/PavKul89/Rick-and-Morthy-/blob/e69d8a748341bc2e406c8f9832c0b77d136059d4/src/components/Form/Form.jsx#L4-L46)
- [x] - [Есть применение ContextAPI](https://github.com/PavKul89/Rick-and-Morthy-/blob/f7c0cd7e6a49c3ac28251d1d2a67ab998882cf88/src/context/ThemeContext.jsx#L1-L57)
- [x] - [Есть применение предохранителя](https://github.com/PavKul89/Rick-and-Morthy-/blob/f7c0cd7e6a49c3ac28251d1d2a67ab998882cf88/src/components/Post/Post.jsx#L56-L58)
- [x] - [Кастомные хуки](https://github.com/PavKul89/Rick-and-Morthy-/blob/f7c0cd7e6a49c3ac28251d1d2a67ab998882cf88/src/hooks/useAuth.js#L1-L11)
- [x] - [Использование PropTypes](https://github.com/PavKul89/Rick-and-Morthy-/blob/f7c0cd7e6a49c3ac28251d1d2a67ab998882cf88/src/components/Posts/Posts.jsx#L124-L129)
- [x] - [Поиск не должен триггерить много запросов debounce](https://github.com/PavKul89/Rick-and-Morthy-/blob/f7c0cd7e6a49c3ac28251d1d2a67ab998882cf88/src/components/SearchBar/SearchBar.jsx#L58-L61)

- [x] - [Есть применение Lazy+Suspense](https://github.com/PavKul89/Rick-and-Morthy-/blob/f7c0cd7e6a49c3ac28251d1d2a67ab998882cf88/src/components/Posts/Posts.jsx#L8-L11) 

* REDUX
- [x] - [Используем Modern Redux with Redux Toolkit](https://github.com/PavKul89/Rick-and-Morthy-/blob/2a9671049d03ea6e53121425b7b6076eea32423e/src/redux/store.js#L1-L14)
- [x] - [Используем слайсы](https://github.com/PavKul89/Rick-and-Morthy-/blob/2a9671049d03ea6e53121425b7b6076eea32423e/src/redux/slices/userSlice.js#L1-L38)
- [x] - [Кастомная middleware](https://github.com/PavKul89/Rick-and-Morthy-/blob/2a9671049d03ea6e53121425b7b6076eea32423e/src/redux/midlware.js#L1-L8)
- [x]  - [Используем RTK Query]()
- [x]  - [Используем Transforming Responses]()
- [x] -  [Кастомная middleware]()

2 УРОВЕНЬ
- [x] - [Использование Firebase]()

