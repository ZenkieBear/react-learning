import { createContext, Dispatch, useReducer } from "react";

// Step 1: Create the context
export const TasksContext = createContext<Task[]|null>(null);
export const TasksDispatchContext = createContext<Dispatch<ReducerAction>|null>(null);

export default function TaskProvider({ children }: ChildrenProps) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}


const tasksReducer: TasksReducer = function (tasks, action) {
  switch (action.type) {
    case 'added': {
        return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
    }];
    }
    case 'changed': {
    return tasks.map(t => {
        const reAction = action as Required<ReducerAction>;
        if (t.id === reAction.task.id) {
        return action.task;
        } else {
        return t;
        }
    });
    }
    case 'deleted': {
    return tasks.filter(t => t.id !== action.id);
    }
    default: {
    throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialTasks: Task[] = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
];
