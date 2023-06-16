import TodoList from "./TodoList";

export default function Avatar() {
    const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
    const description = "Gregorio Y. Zara";

    return (
      <div>
        <img
            className="avatar"
            // Use (double) quotation mark passing string value to JSX.
            // src="https://i.imgur.com/7vQD0fPs.jpg"
            // alt='Gregorio Y. Zara'

            // Use {} instead of quotation mark, and passing a value dynamically.
            src={avatar}
            alt={description}
        />
        <TodoList />
        <ul
        /**
         * Using double brace: Css and Object in JSX.
         */
        //   style={{
        //     backgroundColor: 'black',
        //     color: 'pink'
        //   }}
        // This will look better
          style={
            {
                // Use camelCase
                backgroundColor: 'black',
                color: 'pink'
            }
          }>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    );
  }
  
/**
 * Where you can use {} in JSX?
 * Only these 2 situations:
 * 1. As the innerText of a JSX tag.
 * 2. As the attribute expression after `=`: src={avatar} will read variable `avatar`. Mention, src="{avatar}"
 * will only passing a string "{avatar}"
 */