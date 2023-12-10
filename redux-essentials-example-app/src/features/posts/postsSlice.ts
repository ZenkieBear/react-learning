import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit'

const initialState: Posts = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action: PayloadAction<Post>) {
        state.push(action.payload)
      },
      prepare(title: string, content: string) {
        return {
          payload: {
            id: nanoid(),
            title,
            content
          }
        }
      }
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