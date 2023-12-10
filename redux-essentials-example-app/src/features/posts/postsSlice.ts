import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit'

const initialState: Posts = [
  { id: '1', title: 'Bonjour!', content: 'Bonne journée!', userId: '0' },
  { id: '2', title: 'Lavender Haze', content: 'Met me at midnights', userId: '1' }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action: PayloadAction<Post>) {
        state.push(action.payload)
      },
      prepare(title: string, content: string, userId: string) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId
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