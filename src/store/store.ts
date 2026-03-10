import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './carrinho'
import { api } from '../services/api'
import favoritosReducer from './favoritos'
export type RootReducer = ReturnType<typeof store.getState>

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
