// data types
type Task = {
  id: number,
  text: string,
  done: boolean
}
type ReducerAction = {
  type: 'added' | 'changed' | 'deleted',
  id?: number,
  text?: string,
  task?: Task
}

// props
type AddTaskProps = {
//   onAddTask: Function
}
type TaskListProps = {
//   tasks: Task[],
//   onChangeTask: Function,
//   onDeleteTask: Function
}
type TaskProps = {
  task: Task,
//   onChange: Function,
//   onDelete: Function
}
type ChildrenProps = {
  children: ReactNode
}

// reducers
type TasksReducer = (tasks: Task[], ReducerAction) => Task[];
