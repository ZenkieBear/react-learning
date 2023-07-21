import { useEffect, useId, useMemo, useState } from "react";
import App from "./App";
import ChatIndicator from "./ChatIndicator";
import { initialItems, initialProducts, initialTodos, initialUsers } from "./data";
import Example from "./Example";
import Game from "./Game";
import List from "./List";
import { Parent } from "./Passing";
import ProductPage from "./ProductPage";
import ProfilePage from "./ProfilePage";
import Search from "./SearchResults";
import Toggle from "./Toggle";

export default function Home() {
  return (
    <div>
      <Example title="Updating state based on props or state">
        <Form />
      </Example>
      <Example title="Caching expensive caculations">
        <TodoList todos={initialTodos}
          filter={(todo: Todo) => todo.id < 2}/>
      </Example>
      <Example title="Resetting all state when a prop changes">
        <ProfilePage />
      </Example>
      <Example title="Adjusting some state when a prop changes">
        <List items={initialItems}/>
      </Example>
      <Example title="Sharing logic between event handlers">
        <ProductPage
          product={initialProducts[0]}
          addToCart={prod => console.log(prod)
        }/>
      </Example>
      <Example title="Sending a POST request">
        <Form1 />
      </Example>
      <Example title="Chains of computations">
        <Game />
      </Example>
      <Example title="Initializing the application">
        <App />
      </Example>
      <Example title="Notifying parent components about state changes">
        <Toggle onChange={next => {}}/>
      </Example>
      <Example title="Passing data to the parent">
        <Parent />
      </Example>
      <Example title="Subscribing to an external store">
        <ChatIndicator />
      </Example>
      <Example title="Fetching data">
        <Search />
      </Example>
    </div>
  )
}

function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // 🔴 Avoid: redundant state and unnecessary Effect
  // const [pullName, setFullName] = useState('');
  // useEffect(() => {
  //   setFullName(firstName + ' ' + lastName);
  // }, [firstName, lastName]);

  // ✅ Good: calculated during rendering
  const fullName = firstName + ' ' + lastName;

  return (
    <>
      {/* ... */}
    </>
  )
}

function TodoList({ todos, filter }: TodoListProps) {
  const [newTodo, setNewTodo] = useState('');

  // 🔴 Avoid: redundant state and unnecessary Effect
  // const [visibleTodos, setVisibleTodos] = useState<Todo[]|null>(null);
  // useEffect(() => {
  //   setVisibleTodos(getFiltereredTodos(todos, filter))
  // }, [todos, filter])

  // ✅ This is fine if getFilteredTodos() is not slow.
  // const visibleTodos = getFiltereredTodos(todos, filter);

  // ✅ Does not re-run unless todos or filter change
  // const visibleTodos = useMemo(() => {
  //   return getFiltereredTodos(todos, filter)
  // }, [todos, filter])
  // Write in one line
  const visibleTodos = useMemo(() => getFiltereredTodos(todos, filter), [todos, filter])

  return (
    <>
      <ul>
        {visibleTodos?.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  )
}

const getFiltereredTodos = (todos: Todo[], filter: Filter<Todo>): Todo[] => {
  return todos.filter(todo => filter(todo));
}

function Form1() {
  const [firstName, setFirstName] = useState('')
  const [lastNae, setLastName] = useState('');

  // ✅ Good: This logic should run because the component was displayed
  useEffect(() => {
    post('/analytics/event', { eventName: 'visit_form' });
  }, [])

  // 🔴 Avoid: Event-specific logic inside an Effect
  // const [jsonToSubmit, setJsonToSubmit] = useState(null);
  // useEffect(() => {
  //   if (jsonToSubmit !== null) {
  //     post('/api/register', jsonToSubmit);
  //   }
  // }, [jsonToSubmit])

  return (
    <>
      {/*  */}
    </>
  )
}

async function post(url: string, data: object) {
  return new Promise<void>((res, rej) => {
    setTimeout(() => {
      res();
    }, 2000);
  })
}
