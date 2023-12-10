import { useAppSelector } from 'app/hooks'
import { Link, useParams} from 'react-router-dom'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'

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
        <h2>This page can't be found :{'('}</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>
          {post.title} {' '}
          <PostAuthor id={post.userId}/>
        </h2>
        <TimeAgo timestamp={post.date} />
        <p className="post-content">{post.content}</p>
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
  )
}