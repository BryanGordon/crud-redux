import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface User {
  name: string
  email: string
  github: string
}

export type UserId = string

export interface UserWithId extends User {
  id: UserId
}

const DEFAULT_STATE = [
  {
    id: '1',
    name: 'Bryan Gordon',
    email: 'bryangordon@gmail.com',
    github: 'bryangordon'
  },
  {
    id: '2',
    name: 'Bryan Gordon',
    email: 'bryangordon@gmail.com',
    github: 'bryangordon'
  }
]

const initialState: UserWithId[] = (() => {
  const persistedState = localStorage.getItem('_redux_state')

  if (persistedState) {
    return JSON.parse(persistedState).users
  }

  return DEFAULT_STATE
})()

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID()
      return [...state, { id, ...action.payload }]
    },
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload
      return state.filter((user) => user.id !== id)
    }
  }
})

export default usersSlice.reducer
export const { addNewUser, deleteUserById } = usersSlice.actions
