import React, { ChangeEventHandler, useState } from 'react'
import { addNewPost } from './postsSlice'
import { useAppDispatch, useAppSelector } from 'app/hooks'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')
  const [addRequestStatus, setAddRequestStatus] = useState<RequestStatus>('idle')

  const dispatch = useAppDispatch()

  const users = useAppSelector(state => state.users)

  const onTitleChanged: ChangeEventHandler<HTMLInputElement> = e => setTitle(e.target.value)
  const onContentChanged: ChangeEventHandler<HTMLTextAreaElement> = e => setContent(e.target.value)

  const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle'

  const savePost = async () => {
    if (canSave) {
      try {
        setAddRequestStatus('loading')
        await dispatch(addNewPost({ title, content, userId })).unwrap()
        setTitle('')
        setContent('')
        setUserId('')
      } catch(e) {
        console.log('Failed to save the post: ', e);
      } finally {
        setAddRequestStatus('idle')
      }
    }
  }

  return (
    <section>
      <h2>Add a new post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">Author:</label>
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
        <button
          type="button"
          onClick={savePost}
          disabled={!canSave}
        >
          Save Post
        </button>
      </form>
    </section>
  )
}