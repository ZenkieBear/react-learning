import { useAppSelector } from 'app/hooks'
import { useParams} from 'react-router-dom'

interface RequestParams{
  postId: string
}
export const SinglePostPage = () => {
  const { postId } = useParams<RequestParams>()

  const post = useAppSelector(state =>
    state.posts.find(post => post.id === postId)
  )

  if (!post) {
    return (
      <section>
        <h2>页面未找到！</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
      </article>
    </section>
  )
}