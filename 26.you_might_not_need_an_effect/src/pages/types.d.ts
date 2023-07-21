// Props
type ChildrenProps = {
  children: ReactNode
}

type ExampleProps = {
  title: string,
  subtitle?: string
} & ChildrenProps;

type TodoListProps = {
  todos: Todo[],
  filter: Filter
}

type ProfilePageProps = {
  userId: number
}
type SelectUserProps = {
  users: User[],
  onChange: (id: number) => void,
  comment?: string
}

type ListProps = {
  items: Item[]
}

type ProductPageProps = {
  product: Product,
  addToCart: (product: Product) => void
}

type ToggleProps = {
  onChange: (isOn: boolean) => void
}

type ChildProps = {
  onFetched?: (data) => void,
  data?
}

type SearchResultsProps = {
  query: string
}

// Data types
type Todo = {
  id: number,
  title: string,
}
type Filter<T> = (data: T) => boolean;
type User = {
  id: number,
  name: string,
  age: number
}

type Item = {
  id: number,
  text: string
}

type Product = {
  id: number,
  name: string,
  price: number,
  isInCart: boolean
}

type Card = {
  gold?
}

type Result = {
  id: number,
  title: string
}
