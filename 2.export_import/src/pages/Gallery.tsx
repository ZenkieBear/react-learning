// It's a default-export, one file can only have one default-export.
export default function Gallery() {
  return (
    <section>
      <h1>Fantastic Scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  )
}

// It's named-export, multiple named-export can be in one file.
export function Profile() {
  return <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />;
}