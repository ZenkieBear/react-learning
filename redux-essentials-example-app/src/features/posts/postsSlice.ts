import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit'

const initialReaction = {
  thumbsUp: 0,
  hooray: 0,
  heart: 0,
  rocket: 0,
  eyes: 0,
}

const initialState: Posts = [
  {
    id: '1',
    title: 'Bonjour!',
    content: 'Bonne journée!',
    userId: '0',
    date: '2023-12-10T02:13:00.000Z',
  },
  {
    id: '2',
    title: 'Lavender Haze',
    content: 'Met me at midnights',
    userId: '1',
    date: '2022-10-21T10:13:00.000Z',
  },
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
            date: new Date().toISOString(),
            title,
            content,
            userId,
            reactions: {
              thumbsUp: 0,
              hooray: 0,
              heart: 0,
              rocket: 0,
              eyes: 0,
            },
          },
        }
      },
    },
    postUpdated(state, action: PayloadAction<Omit<Post, 'reactions'|'date'>>) {
      const { id, title, content } = action.payload
      const target = state.find((s) => s.id === id)
      if (target) {
        target.title = title
        target.content = content
      }
    },
    reactionAdded(
      state,
      action: PayloadAction<{
        postId: string
        reaction: string
      }>
    ) {
      const { postId, reaction } = action.payload
      const post = state.find((post) => post.id === postId)
      if (post) {
        if (!post.reactions) {
          post.reactions = {
            ...initialReaction
          }
        }
        post.reactions[reaction]++
      }
    },
  },
})

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions

export default postsSlice.reducer
