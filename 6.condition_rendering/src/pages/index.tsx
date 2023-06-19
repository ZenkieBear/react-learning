function Item({ name, isPacked }) {
  // // using if statement
  // if (isPacked) {
  //   // return <li className="item">{name} ✔️</li>;
    
  //   // If you don't wanna render anything, you could return a null. But a component must returns something.
  //   return null;
  // }
  // return <li className="item">{name}</li>;

  // return (
  //   // Using ternary operator
  //   <li className="item">
  //     {/* JSX and JavaScript could be nested. */}
  //     {isPacked ? (
  //       <del>
  //         {/* {name + '✔️'} */}

  //         {/* And operator(&&) */}
  //         {name} {isPacked && '✔️'}
  //         {/* Never put a number at the left of `&&` operator, it returns a 0, so react will render a 0 */}
  //       </del>
  //     ) : (
  //       name
  //       )}
  //   </li>
  // )

  
  /*
   Selectively give JSX to variables.
   This approach is the most verbose, but also the most flexible.
   */
  let itemContent = name;
  if (isPacked) {
    itemContent = (
      <del>
        {name + '✔️'}
      </del>
    )
  }
  return <li className="item">{itemContent}</li>
}

export default function PackingList() {
  return (
    <section>
      <h1>Zenkie Bear's packing list</h1>
      <ul>
        <Item
          isPacked={true}
          name="Toothbrush"
        />
        <Item
          isPacked={true}
          name="Towel"
        />
        <Item
          isPacked={false}
          name="Shower Gel"
        />
      </ul>
    </section>
  )
}
