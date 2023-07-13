import CatFriends, { CatFriendsPlus } from "./CatFriends";
import Form, { MyForm } from "./Form";
import TodoList from "./TodoList";

export default function App() {
  return (
    <>
      <Form />
      <CatFriends />
      <CatFriendsPlus />
      <MyForm />
      <TodoList />
    </>
  )
}