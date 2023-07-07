import { Reducer, useReducer } from "react";
import { useImmerReducer } from "use-immer";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import taskReducer from "./TaskReducer";

export default function App() {
  // const [tasks, setTasks] = useState(initialTasks);
  // const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);

  function handleAddTask(text: string) {
    // setTasks([
    //   ...tasks,
    //   {
    //     id: nextId++,
    //     text: text,
    //     done: false,
    //   },
    // ]);
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task: Task) {
    // setTasks(
    //   tasks.map((t) => {
    //     if (t.id === task.id) {
    //       return task;
    //     } else {
    //       return t;
    //     }
    //   })
    // );
    dispatch({
      type: 'changed',
      task: task,
    });
  }

  function handleDeleteTask(taskId: number) {
    // setTasks(tasks.filter((t) => t.id !== taskId));
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }

  return (
    <>
      <h1>Blued’s plan</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

let nextId = 3;
const initialTasks: Task[] = [
  {id: 0, text: 'Visit Franz Kafka Museum', done: true},
  {id: 1, text: 'See a puppet show', done: false},
  {id: 2, text: 'Clock in Lennon Wall', done: false},
];
