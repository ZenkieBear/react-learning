import { useState } from "react";

export default function Chat({ contact }: ChatProps) {
  const [text, setText] = useState('');

  return (
    <section className="chat">
      <textarea
        value={text}
        placeholder={`Talk to ${contact.name}`}
        onChange={e => setText(e.target.value)}
      />
      <button>Send to {contact.email}</button>
    </section>
  )
}