import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { client } from "api/client"

const initialState: Users = []

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  const resp = await client.get('/fakeApi/users')
  return resp.data
})

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
      builder.addCase(fetchUsers.fulfilled, (state, action) => {
        return action.payload
      })
  },
})

export default userSlice.reducer