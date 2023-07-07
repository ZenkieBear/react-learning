// data structures
type Contact = {
  id: number,
  name: string,
  email: string
}

// props
type CounterProps = {
  isFancy?: boolean,
  person?: string
}
type ContactListProps = {
  selectedContact: Contact,
  contacts: Contact[],
  onSelect: (contact: Contact) => void
}
type ChatProps = {
  contact: Contact
}
