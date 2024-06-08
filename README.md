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
- [x] - [Есть рендеринг списков](https://github.com/PavKul89/Rick-and-Morthy.ASTON/blob/f5fdab9e7f2b09a4001fef794a41ae2bfddd0b7d/src/components/Posts.jsx#L63-L75)
- [x] - [Реализована форма](https://github.com/PavKul89/Rick-and-Morthy.ASTON/blob/5e97e791b76b26d2d4577118d9ff8bd3096419a9/src/components/Form/Form.jsx#L1-L46)
- [x] - [Есть применение ContextAPI](https://github.com/PavKul89/Rick-and-Morthy.ASTON/blob/5b47c26bac330ef5a88379863e6692a328822e8a/src/context/FavoritesContext.jsx#L1-L35)
- [x] - [Есть применение предохранителя](https://github.com/PavKul89/Rick-and-Morthy.ASTON/blob/784cb5af7a07d5bcaa517d32a524fe453da090cf/src/components/Posts.jsx#L76-L78)
- [x] - [Кастомные хуки](https://github.com/PavKul89/Rick-and-Morthy.ASTON/blob/395e11b5d9e738e783f159ee36e05029dd252697/src/hooks/useFetchCharacter.js#L1-L22)
- [x] - [Использование PropTypes](https://github.com/PavKul89/Rick-and-Morthy.ASTON/blob/eec8c28da3634195b3455c9f55f8e4a41f1e9f8c/src/components/Post.jsx#L61-L67)
- [x] - [Поиск не должен триггерить много запросов debounce](https://github.com/PavKul89/Rick-and-Morthy.ASTON/blob/ce0b77ff6315018c641b6390ca2ff39e54378baa/src/components/SearhBar/SearchBar.jsx#L60-L63)

- [x] - [Есть применение Lazy+Suspense](https://github.com/PavKul89/Rick-and-Morthy.ASTON/blob/16da1b278ffcf2099539dd315f067b2745318924/src/components/Posts.jsx#L7-L10) 

* REDUX
- [x] - [Используем Modern Redux with Redux Toolkit](https://github.com/PavKul89/Rick-and-Morthy.ASTON/blob/f4a84970f7051fdd7de60f3c5c00107da2f50fb7/src/redux/store.js#L1-L12)
- [x] - [Используем слайсы](https://github.com/PavKul89/Rick-and-Morthy.ASTON/blob/02a5b2f91dadfbec25fb73d7aa766dd2e6b781df/src/redux/slices/userSlice.js#L1-L28)
- [x] - [Кастомная middleware](https://github.com/PavKul89/Rick-and-Morthy.ASTON/blob/13d85690c08207a55c5c00113ee3dee2a1b03b2e/src/redux/store.js#L1-L12)
- [x]  - [Используем RTK Query](https://github.com/PavKul89/Rick-and-Morthy.ASTON/blob/fac90c6a05a9458ea37372420fe794007e2efba0/src/redux/searvices.js#L1-L22)
- [x]  - [Используем Transforming Responses](https://github.com/PavKul89/Rick-and-Morthy.ASTON/blob/5609f666f95631f0db46fce3270cfae42cdcdf9f/src/components/Posts.jsx#L1-L78)
- [x] -  [Кастомная middleware](https://github.com/PavKul89/Rick-and-Morthy.ASTON/blob/7b37415f37b4ab92edca993b574db89670c41bea/src/context/ThemeContext.jsx#L8C8-L8C61)

2 УРОВЕНЬ
- [x] - [Использование Firebase](https://github.com/PavKul89/Rick-and-Morthy.ASTON/blob/373cc9abcd059bc9981e99e29702e6585fb5f972/src/firebase.js#L1)

