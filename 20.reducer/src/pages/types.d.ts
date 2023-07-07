// data structures
type Task = {
  id: number,
  text: string,
  done: boolean
}

// props
type AddTaskProps = {
  onAddTask: (text: string) => void
}
type TaskListProps = {
    tasks: Task[],
    onChangeTask: (task: Task) => void,
    onDeleteTask: (id: number) => void
}
type TaskProps = {
    task: Task,
    onChange: (task: Task) => void,
    onDelete: (id: number) => void
}
type TaskAction = {
    type: string,
    id?: number,
    text?: string,
    done?: boolean,
    task?: Task
}
type TaskReducer = (tasks: Task[], action: TaskAction) => Task[]
