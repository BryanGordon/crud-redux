import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './users/slice'

const persistenceLocalStorageMiddleware = (store) => (next) => (action) => {
  next(action)
  localStorage.setItem('_redux_state', JSON.stringify(store.getState()))
}

export const store = configureStore({
  reducer: {
    users: usersSlice
  },
  middleware: [persistenceLocalStorageMiddleware]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
