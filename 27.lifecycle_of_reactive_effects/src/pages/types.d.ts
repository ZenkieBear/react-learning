// Props
type ChildrenProps = {
  children: ReactNode
}

type ExampleProps = {
  title: string,
  subtitle?: string
} & ChildrenProps

type ChatRoomProps = {
  roomId: string
}