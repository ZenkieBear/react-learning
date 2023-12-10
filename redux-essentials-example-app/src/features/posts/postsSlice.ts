import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: Posts = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload)
    },
    postUpdated(state, action: PayloadAction<Post>) {
      const {id, title, content} = action.payload
      const target = state.find(s => s.id === id)
      if (target) {
        target.title = title
        target.content = content
      }
    }
  }
})

export const { postAdded, postUpdated } = postsSlice.actions

export default postsSlice.reducer