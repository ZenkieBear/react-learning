import { useRef, useState } from "react";
import { flushSync } from "react-dom";

export default function TodoList() {
  const listRef = useRef<HTMLUListElement>(null);
  const [text, setText] = useState('');
  const [todos, setTodos] = useState(initialTodos);

  function handleAdd() {
    const newTodo = {id: nextId++, text: text};
    setText('');
    // This will instruct React to update the DOM synchronously right after the code wrapped in flushSync executes. 
    flushSync(() => {
        setTodos([...todos, newTodo]);
    });
    listRef.current?.lastElementChild?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    })
  }

  return (
    <div>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={handleAdd}>
        Add
      </button>
      <ul ref={listRef}>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  )
}

let nextId = 0;
let initialTodos: Todo[] = [];
for (let i = 0; i < 20; i++) {
  initialTodos.push({
    id: nextId++,
    text: 'Todo #' + (i + 1)
  });
}
