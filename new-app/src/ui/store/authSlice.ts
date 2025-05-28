import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    loading: false,
  },
  reducers: {},
})

export default authSlice.reducer
