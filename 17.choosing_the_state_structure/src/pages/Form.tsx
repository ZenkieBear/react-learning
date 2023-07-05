import { ChangeEventHandler, useState } from 'react';

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // const [fullName, setFullName] = useState('');
  /*
   * You can always calculate fullName from firstName and lastName during render, so remove it from state.
   */
  const fullName = `${firstName} ${lastName}`;
  const handleFirstNameChange: ChangeEventHandler<HTMLInputElement> = function (e) {
    setFirstName(e.target.value);
    // setFullName(e.target.value + ' ' + lastName);
  }

  const handleLastNameChange: ChangeEventHandler<HTMLInputElement> = function (e) {
    setLastName(e.target.value);
    // setFullName(firstName + ' ' + e.target.value);
  }

  return (
    <>
      <h2>Let’s check you in</h2>
      <label>
        First name:{' '}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:{' '}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}
