import { createSlice } from "@reduxjs/toolkit"

const initialState: Users = [
  { id: '0', name: 'Zenkie Bear' },
  { id: '1', name: 'Taylor Swift' },
  { id: '2', name: 'Doja Cat' },
]

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export default userSlice.reducer