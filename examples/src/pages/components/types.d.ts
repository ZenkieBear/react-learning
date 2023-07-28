// Props
type ExampleProps = {
  title: string,
  describe?: string
} & ChildrenProps;
type DotProps = {
  position: Position,
  opacity: number
}

// Data types
type Position = {
  x: number,
  y: number
}
