import { useContext, useState } from 'react';
import { TasksContext, TasksDispatchContext } from './TasksContext';

export default function TaskList() {
// export default function TaskList({ tasks, onChangeTask, onDeleteTask }: TaskListProps) {
  // Step 3: Use context anywhere in the tree
  const tasks = useContext(TasksContext);

  return (
    <ul>
      {tasks && tasks.map(task => (
        <li key={task.id}>
          {/* <Task
            task={task}
            onChange={onChangeTask}
            onDelete={onDeleteTask}
          /> */}
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task }: TaskProps) {
// function Task({ task, onChange, onDelete }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(TasksDispatchContext);

  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={e => {
            dispatch && dispatch({
              type: 'changed',
              task: {
                ...task,
                text: e.target.value
              }
            })
            // onChange({
            //   ...task,
            //   text: e.target.value
            // });
          }} />
        <button onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
          dispatch && dispatch({
            type: 'changed',
            task: {
              ...task,
              done: e.target.checked
            }
          })
          // onChange({
          //   ...task,
          //   done: e.target.checked
          // });
        }}
      />
      {taskContent}
      <button onClick={() => {
        // onDelete(task.id)
        dispatch && dispatch({
          type: 'deleted',
          id: task.id
        })
      }}>
        Delete
      </button>
    </label>
  );
}

// You can also export functions that use the context
export function useTasks() {
  return useContext(TasksContext);
}
export function useDispatch() {
  return useContext(TasksDispatchContext);
}
