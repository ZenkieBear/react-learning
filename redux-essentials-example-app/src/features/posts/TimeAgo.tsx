import { formatDistanceToNow, parseISO } from "date-fns"

const TimeAgo = ({ timestamp }: {
  timestamp: string
}) => {
  let timeAgo = ''
  if (timestamp) {
    let date = parseISO(timestamp)
    const timePeriod = formatDistanceToNow(date)
    timeAgo = `${timePeriod} ago`
  }

  return (
    <span className="time-ago" title={timestamp}>
      {' '} <i>{timeAgo}</i>
    </span>
  )
}

export default TimeAgo