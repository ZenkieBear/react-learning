import { useAppDispatch } from "app/hooks"
import { reactionAdded } from "./postsSlice"

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀'
}

const ReactionButton = ({ post }: {
  post: Post
}) => {
  const dispatch = useAppDispatch()

  return (
    <div className="reaction-buttons">
      {Object.entries(reactionEmoji).map(([name, emoji]) => (
        <button
          key={name}
          type="button"
          className="muted-button reaction-button"
          onClick={() => {
            dispatch(reactionAdded({ postId: post.id, reaction: name }))
          }}
        >
          {emoji} {post.reactions?.[name] ?? 0}
        </button>
      ))}
    </div>
  )
}

export default ReactionButton