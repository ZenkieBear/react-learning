import { ChangeEvent, useState } from "react";
import { useImmer } from "use-immer";

// export default function MovingDot() {
function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  return (
    <div
      className="container"
      onPointerMove={e => {
        // If you straightly change the object, React won't know it changed as if can't make re-render.
        setPosition({
          x: e.clientX,
          y: e.clientY
        })
      }}>
      <div className="dot"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`
        }} />
    </div>
  )
}

// export default function Form() {
function Form() {
  const [person, setPerson] = useState({
    firstName: 'Zenkie',
    lastName: 'Bear',
    email: 'zq@zenkie.cn'
  });

  function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      firstName: e.target.value,
      lastName: person.lastName,
      email: person.email
    });
  }

  function handleLastNameChange(e: ChangeEvent<HTMLInputElement>) {
    // You can also use objecct spread syntax, so you don't need to copy every property separately.
    setPerson({
      ...person,
      lastName: e.target.value
    });
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,
      email: e.target.value
      /**
       * Note that the `...` spread syntax is "shallow" -- it only copies things one level deep. This makes it fast,
       * but it also means that if you want to update a nested property, you'll have to use it more than once.
       */
    });
  }

  return (
    <>
    <label>
        First name:
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <label>
        Email:
        <input
          value={person.email}
          onChange={handleEmailChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  )

}

// export default function Form1() {
function Form1() {
  const [person, setPerson] = useState({
    firstName: 'Zenkie',
    lastName: 'Bear',
    email: 'zq@zenkie.cn'
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    // You can use the `[` and `]` braces inside your object defination to specify a property with dynamic name.
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    });
  }

  return (
    <>
      <label>
        First name:
        <input
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          name="email"
          value={person.email}
          onChange={handleChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  )

}

/**
 * Updating a nested object
 */
// export default function Form2() {
function Form2() {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });


  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,
      name: e.target.value
    });
  }
  
  function handleTitleChange(e: ChangeEvent<HTMLInputElement>) {
    let nextArtWork = {
      ...person.artwork,
      title: e.target.value
    };
    setPerson({
      ...person,
      artwork: nextArtWork
    });
  }

  // Written as a single function call:
  function handleCityChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value
      }
    });
  }

  function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value
      }
    });
  }

  return (
    <>
      <label>
        Name:
        <input
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Title:
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <label>
        Image:
        <input
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img 
        src={person.artwork.image} 
        alt={person.artwork.title}
      />
    </>
  )
}

/**
 * Use Immer
 */
export default function Form3() {
  let [person, updatePerson] = useImmer({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });
  
  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    updatePerson(draft => {
      draft.name = e.target.value;
    })
  }

  function handleTitleChange(e: ChangeEvent<HTMLInputElement>) {
    updatePerson(draft => {
      draft.artwork.title = e.target.value;
    })
  }

  function handleCityChange(e: ChangeEvent<HTMLInputElement>) {
    updatePerson(draft => {
      draft.artwork.city = e.target.value;
    })
  }

  function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
    updatePerson(draft => {
      draft.artwork.image = e.target.value;
    })
  }
  
  return (
    <>
      <label>
        Name:
        <input
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Title:
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <label>
        Image:
        <input
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img 
        src={person.artwork.image} 
        alt={person.artwork.title}
      />
    </>
  )
}
