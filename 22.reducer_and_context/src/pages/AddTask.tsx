import { useContext, useState } from 'react';
import { TasksDispatchContext } from './TasksContext';

export default function AddTask() {
// export default function AddTask({ onAddTask }: AddTaskProps) {
  const [text, setText] = useState('');
  const dispatch = useContext(TasksDispatchContext);

  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('');
        dispatch && dispatch({
          type: 'added',
          id: nextId ++,
          text: text,
        })
        // onAddTask(text);
      }}>Add</button>
    </>
  )
}

let nextId = 3;
