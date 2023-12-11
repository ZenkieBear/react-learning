import { ChangeEventHandler, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { postUpdated, selectPostById } from './postsSlice'
import { useAppDispatch, useAppSelector } from 'app/hooks'


export const EditPostForm = () => {
  const { postId } = useParams<{postId: string}>()

  const post = useAppSelector(state => selectPostById(state, postId))

  const [title, setTitle] = useState(post?.title)
  const [content, setContent] = useState(post?.content)
  const [userId, setUserId] = useState(post?.userId ?? '')

  const dispatch = useAppDispatch()
  const history = useHistory()

  const users = useAppSelector(state => state.users)

  if (!post) {
    return (
      <section>
        <h1>Ooooops!</h1>
        <p>The article can't be found in our application.</p>
      </section>
    )
  }

  const onTitleChanged: ChangeEventHandler<HTMLInputElement> = e => setTitle(e.target.value)
  const onContentChanged: ChangeEventHandler<HTMLTextAreaElement> = e => setContent(e.target.value)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({ id: postId, title, content, userId }))
      history.push(`/posts/${postId}`)
    }
  }

  return (
    <section>
      <h2>Edit post</h2>
      <form>
        <label htmlFor="postTitle">Post title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">Post author:</label>
        <select
          id="postAuthor"
          value={userId}
          onChange={e => setUserId(e.target.value)}
        >
          <option value="">Please select an user</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
      </form>
      <button type="button" onClick={onSavePostClicked}>
        Save post
      </button>
    </section>
  )
}