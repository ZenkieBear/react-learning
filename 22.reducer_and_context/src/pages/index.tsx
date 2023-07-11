import { useReducer } from 'react';
import AddTask from './AddTask';
import TaskList, { useDispatch } from './TaskList';
import TaskProvider, { TasksContext, TasksDispatchContext } from './TasksContext';

export default function TaskApp() {
  // const [tasks, dispatch] = useReducer(
  //   tasksReducer,
  //   initialTasks
  // );

  // function handleAddTask(text: string) {
  //   dispatch({
  //     type: 'added',
  //     id: nextId++,
  //     text: text,
  //   });
  // }

  // function handleChangeTask(task: Task) {
  //   dispatch({
  //     type: 'changed',
  //     task: task
  //   });
  // }

  // function handleDeleteTask(taskId: number) {
  //   dispatch({
  //     type: 'deleted',
  //     id: taskId
  //   });
  // }

  return (
    // Step 2: Put state and dispatch into context
    // <TasksContext.Provider value={tasks}>
    //   <TasksDispatchContext.Provider value={dispatch}>
    <TaskProvider>
      <h1>Day off in Kyoto</h1>
      {/* <AddTask
        onAddTask={handleAddTask}
      />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      /> */}
      {/* Now you don’t need to pass the list of tasks or the event handlers down the tree: */}
      <AddTask />
      <TaskList />
    {/* </TasksDispatchContext.Provider> */}
    {/* </TasksContext.Provider> */}
    </TaskProvider>
  );
}

// Moved to TasksContext.ts
// const tasksReducer: TasksReducer = function (tasks, action) {
//   switch (action.type) {
//     case 'added': {
//         return [...tasks, {
//           id: action.id,
//           text: action.text,
//         done: false
//       }];
//     }
//     case 'changed': {
//       return tasks.map(t => {
//         const reAction = action as Required<ReducerAction>;
//         if (t.id === reAction.task.id) {
//           return action.task;
//         } else {
//           return t;
//         }
//       });
//     }
//     case 'deleted': {
//       return tasks.filter(t => t.id !== action.id);
//     }
//     default: {
//       throw Error('Unknown action: ' + action.type);
//     }
//   }
// }
// const initialTasks: Task[] = [
//   { id: 0, text: 'Philosopher’s Path', done: true },
//   { id: 1, text: 'Visit the temple', done: false },
//   { id: 2, text: 'Drink matcha', done: false }
// ];
