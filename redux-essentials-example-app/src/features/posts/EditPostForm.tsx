import React, { ChangeEventHandler, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

import { postUpdated } from './postsSlice'
import { useAppSelector } from 'app/hooks'


export const EditPostForm = () => {
  const { postId } = useParams<{postId: string}>()

  const post = useAppSelector(state =>
    state.posts.find(post => post.id === postId)
  )

  const [title, setTitle] = useState(post?.title)
  const [content, setContent] = useState(post?.content)

  const dispatch = useDispatch()
  const history = useHistory()

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
      dispatch(postUpdated({ id: postId, title, content }))
      history.push(`/posts/${postId}`)
    }
  }

  return (
    <section>
      <h2>编辑文章</h2>
      <form>
        <label htmlFor="postTitle">文章标题：</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">内容：</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
      </form>
      <button type="button" onClick={onSavePostClicked}>
        保存文章
      </button>
    </section>
  )
}