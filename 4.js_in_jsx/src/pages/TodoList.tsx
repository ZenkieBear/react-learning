const today = new Date();
export default function TodoList() {
    return (
        // function calling is also supported
        <h1>To Do List for {formatDate(today)}</h1>
    )
}

export function formatDate(date: Date) {
    return new Intl.DateTimeFormat(
        'en-US',
        { weekday: 'long' }
    ).format(date);
}