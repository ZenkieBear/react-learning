import { Link } from "react-router-dom"
import PostAuthor from "./PostAuthor"
import TimeAgo from "./TimeAgo"
import ReactionButton from "./ReactionButton"
import { fetchPosts, selectAllPosts } from "./postsSlice"
import { useAppDispatch, useAppSelector } from "app/hooks"
import { useEffect } from "react"
import Spinner from "components/Spinner"

export const PostsList = () => {
  const dispatch = useAppDispatch()
  const posts = useAppSelector(selectAllPosts)

  const postStatus = useAppSelector(state => state.posts.status)
  const error = useAppSelector(state => state.posts.error)

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postStatus, dispatch])

  let content

  if (postStatus === 'loading') {
    content = <Spinner text="Loading..." />
  } else if (postStatus === 'succeeded') {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date))
    content = orderedPosts.map((post: Post) => (
      <PostExcerpt key={post.id} post={post} />
    ))
  } else if (postStatus === 'failed') {
    content = <div>{error}</div>
  }

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {content}
    </section>
  )
}

const PostExcerpt = ({ post }: { post: Post }) => (
  <article className="post-excerpt" key={post.id}>
    <h3>
      <div>
        {post.title}
        <PostAuthor id={post.userId} />
      </div>
      <TimeAgo timestamp={post.date} />
    </h3>
    <p className="post-content">
      {post.content.substring(0, 100)} {' '}
    </p>
    <Link to={`/posts/${post.id}`}>View</Link>
    <ReactionButton post={post}/>
  </article>
)
