import { Fragment } from "react";
import { people } from "./data";
import { Person } from "./types";
import { getImageUrl } from "./utils";
// First save data to an array
// const people = [
//   'Catherine Johnson: A Mathematician',
//   'Mario Molina: Chemist',
//   'Mohammed Abdul Salam: physicist',
//   'Percy Levin Julia: Chemist',
//   'Subrahmanyan Chandrasekhar: Astrophysicist'
// ]

function Profile({ person = {} as Person }) {
  return (
    <li>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}</b>
        {' ' + person.profession + ' '}
        Worldrenowned for {person.accomplishment}
      </p>
    </li>
  );
}

export default function List() {
  // // Traverse through each item in the array of people and obtain a new JSX node array `items`.
  // const items = people.map(person => <li>{person}</li>)
  // // Wrap the `items` in <ul> and return it.
  // return <ul>{items}</ul>

  // filter chemists
  const chemists = people.filter(person =>
    person.profession === 'Chemist');
  // const items = chemists.map(person =>
  const items = people.map(person =>
    // Each child in a list should have a unique "key" prop.
    // <Profile
    //   key={person.id}
    //   person={person}
    // />

    // Use <Fragment> or <div> instead of `<></>`, because `<></>` can't set props.
    <Fragment key={person.id}>
      <h1>{person.name}</h1>
      <p>{person.accomplishment}</p>
    </Fragment>
  );
  return <ul>{items}</ul>
}
