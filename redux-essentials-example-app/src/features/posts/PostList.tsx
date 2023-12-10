import { useSelector } from "react-redux"
import { RootState } from "app/store"
import { Link } from "react-router-dom"
import PostAuthor from "./PostAuthor"

export const PostsList = () => {
  const posts = useSelector((state: RootState) => state.posts)

  const renderedPosts = posts.map((post: Post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>
        {post.title}
        <PostAuthor id={post.userId} />
      </h3>
      <p className="post-content">
        {post.content.substring(0, 100)} {' '}
        <Link to={`/posts/${post.id}`}>View</Link>
      </p>
    </article>
  ))

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}