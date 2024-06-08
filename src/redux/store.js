import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import { rickAndMortyApi } from './searvices'

import logger from './midlware'

export const store = configureStore({
  reducer: {
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rickAndMortyApi.middleware, logger),
})
