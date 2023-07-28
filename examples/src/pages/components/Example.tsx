export default function Example({ children, title, describe }: ExampleProps) {
  return (
    <li className="example">
      <h1 className="title">{title}</h1>
      <div className="body">
        {children}
      </div>
    </li>
  )
}