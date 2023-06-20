
// It's a pure function. If you pass in 3, it will always return 6.
function double(num: number) {
  return 2 * num;
}

// It's a pure function.
function Recipe({ drinkers }) {
  return (
    <ol>    
      <li>Boil {drinkers} cups of water.</li>
      <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
      <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
    </ol>
  );
}

// export default function App() {
function App() {
  return (
    <section>
      <h1>Spiced Chai Recipe</h1>
      <h2>For two</h2>
      <Recipe drinkers={2} />
      <h2>For a gathering</h2>
      <Recipe drinkers={4} />
    </section>
  );
}

let guest = 0;

/**
 * This function isn't pured, it changes some external variables.
 * It could make some unexpected results.
 */
// function Cup() {
//   guest = guest + 1;
//   return <h2>Tea cup for guest #{guest}</h2>
// }
// export default function TeaSet() {
//   return (
//     <>
//       <Cup />
//       <Cup />
//       <Cup />
//     </>
//   )
// }


/**
 * Let's pass in `guest` as a prop to repaire this component.
 */
function Cup({guest = 1 as number}) {
  return <h2>Tea cup for guest #{guest}</h2>
}
export default function TeaSet() {
  return (
    <>
      <Cup guest={1}/>
      <Cup guest={2}/>
      <Cup guest={3}/>
    </>
  )
}
