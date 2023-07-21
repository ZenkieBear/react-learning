import { useEffect, useState } from "react"
import { initialUsers } from "./data";

export default function ProfilePage() {
  const [userId, setUserId] = useState(0);
  return (
    <div>
      User:
      <SelectUser
        users={initialUsers}
        onChange={id => setUserId(id)}
      />
      <Profile
          userId={userId}
          key={userId}
      />
    </div>
  )
}

function Profile({ userId }: ProfilePageProps) {
  // ✅ This and any other state below will reset on key change automatically
  const [comment, setComment] = useState('');

  // 🔴 Avoid: Resetting state on prop change in an Effect
//   useEffect(() => {
//     setComment('')    
//   }, [userId]);

  return (
    <>
      <input
        value={comment}
        onChange={e => setComment(e.target.value)}
      />
    </>
  )
}

export function SelectUser({ users, onChange }: SelectUserProps) {
  const [selectedId, setSelectedId] = useState(1);
  return (
    <select onChange={e => {
      const id = Number(e.target.value);
      setSelectedId(id);
      onChange(id)
    }}>
      {users.map(user => (
        <option
          key={user.id}
          value={user.id}
        >
          {user.name}
        </option>
      ))}
    </select>
  )
}