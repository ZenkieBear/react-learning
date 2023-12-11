import { Link } from "react-router-dom"
import PostAuthor from "./PostAuthor"
import TimeAgo from "./TimeAgo"
import ReactionButton from "./ReactionButton"
import { selectAllPosts } from "./postsSlice"
import { useAppSelector } from "app/hooks"

export const PostsList = () => {
  const posts = useAppSelector(selectAllPosts)

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
      <ReactionButton post={post}/>
    </article>
  ))

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}