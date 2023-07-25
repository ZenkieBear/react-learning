export default function Example({ title, children, subtitle}: ExampleProps) {
  return (
    <div className="example">
      <h1 className="title">{title}</h1>
      <h2 className="subtitle">{subtitle}</h2>
      {children}
    </div>
  );
}