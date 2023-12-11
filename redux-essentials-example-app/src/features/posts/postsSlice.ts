import { PayloadAction, createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit'
import { client } from 'api/client'
import { RootState } from 'app/store'

const initialReaction = {
  thumbsUp: 0,
  hooray: 0,
  heart: 0,
  rocket: 0,
  eyes: 0,
}

const initialState: {
  posts: Posts,
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error: string | undefined
} = {
  posts: [],
  status: 'idle',
  error: undefined
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const resp = await client.get('/fakeApi/posts')
  return resp.data
})

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action: PayloadAction<Post>) {
        state.posts.push(action.payload)
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
      const target = state.posts.find((s) => s.id === id)
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
      const post = state.posts.find((post) => post.id === postId)
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
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        state.posts = state.posts.concat(action.payload)
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions

export default postsSlice.reducer

export const selectAllPosts = (state: RootState) => state.posts.posts
export const selectPostById = (state: RootState, postId: string) =>
  state.posts.posts.find(post => post.id === postId)

