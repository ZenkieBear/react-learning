// ✅ declare component at the head of file
export default function Gallery() {
  return (
    <section>
      {/* Html tag use lower case, react components use Upper case. */}
      <h1>Fantastic Scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  )
}

export function Profile() {
  return <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />;
  // 📕if you have multiline, wrap them in ()
  // return (
  //   <img
  //     src="https://i.imgur.com/MK3eW3Am.jpg"
  //     alt="Katherine Johnson"
  //   />
  // )
}