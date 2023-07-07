import { useState } from 'react';

export default function AddTask({onAddTask}: AddTaskProps) {
  const [text, setText] = useState('');
  return (
    <>
      <input
        placeholder="Add a task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText('');
          onAddTask(text);
        }}>
        Add
      </button>
    </>
  );
}
