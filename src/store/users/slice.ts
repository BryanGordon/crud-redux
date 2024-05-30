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

const initialState: UserWithId[] = [
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

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload
      return state.filter((user) => user.id !== id)
    }
  }
})

export default usersSlice.reducer
export const { deleteUserById } = usersSlice.actions
