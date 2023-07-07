// export default function (tasks: Task[], action: TaskAction) {
/*
 * Use Immer
 */
export default function (draft: Task[], action: TaskAction) {
  // if (action.type === 'added') {
  //   return [
  //     ...tasks,
  //     {
  //       id: action.id, 
  //       text: action.text,
  //       done: false
  //     }
  //   ]
  // } else if (action.type === 'changed') {
  //   return tasks.map(t => {
  //     if (t.id === action.id) {
  //       return action.task;
  //     } else {
  //       return t;
  //     }
  //   })
  // } else if (action.type === 'deleted') {
  //   return tasks.filter(t => t.id !== action.id)
  // } else {
  //   throw Error('Unknow action: ' + action.type);
  // }
  
  /*
   * It’s a convention to use switch statements inside reducers.
   */
  console.log(action)
  switch (action.type) {
    case 'added': {
      let reAction = action as Required<TaskAction>;
    //   return [
    //     ...draft,
    //     {
    //       id: reAction.id,
    //       text: reAction.text,
    //       done: false
    //     }
    //   ]
      draft.push({
        id: reAction.id,
        text: reAction.text,
        done: false
      })
      break;
    }
    case 'changed': {
      let task = action.task as Task;
    //   return draft.map((t) => {
    //     if (t.id === task.id) {
    //       return task;
    //     } else {
    //       return t;
    //     }
    //   });
      const idx = draft.findIndex(t => t.id === task.id);
      draft[idx] = task;
      break;
    }
    case 'deleted': {
      return draft.filter(t => t.id !== action.id)
    };
    default: {
      throw Error()
    }
  }
}
