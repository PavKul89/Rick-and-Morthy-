import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: null,
  token: null,
  id: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email
      state.token = action.payload.token
      state.id = action.payload.id
      localStorage.setItem('user', JSON.stringify(action.payload))
    },
    removeUser(state) {
      state.email = null
      state.token = null
      state.id = null
      localStorage.removeItem('user')
    },
    loadUser(state) {
      const user = JSON.parse(localStorage.getItem('user'))
      if (user) {
        state.email = user.email
        state.token = user.token
        state.id = user.id
      }
    },
  },
})

export const { setUser, removeUser, loadUser } = userSlice.actions

export default userSlice.reducer
