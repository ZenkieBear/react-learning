import { useSelector } from "react-redux"
import { RootState } from "app/store"
import { Link } from "react-router-dom"
import PostAuthor from "./PostAuthor"
import TimeAgo from "./TimeAgo"

export const PostsList = () => {
  const posts = useSelector((state: RootState) => state.posts)

  // todo sort by date
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  const renderedPosts = orderedPosts.map((post: Post) => (
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
    </article>
  ))

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}