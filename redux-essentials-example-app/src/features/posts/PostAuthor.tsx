import { useAppSelector } from 'app/hooks'

const PostAuthor = ({ id }: {
  id: string
}) => {
  const author = useAppSelector(state =>
    state.users.find(user => user.id === id)
  )
  return (
    <span className='author'>
      by {author ? author.name : 'Unknow author'}
    </span>
  )
}

export default PostAuthor