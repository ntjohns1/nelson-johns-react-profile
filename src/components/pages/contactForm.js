import React, { useState } from 'react';

export default function Form() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

//   const handleInputChange = (e) => {
//     // Getting the value and name of the input which triggered the change
//     const { name, value } = e.target;

//     // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
//     return name === 'firstName' ? setFirstName(value) : setLastName(value);
//   };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <form className="form">
        <input
          value={firstName}
          name="firstName"
          type="text"
          placeholder="First Name"
        />
        <input
          value={lastName}
          name="lastName"
          type="text"
          placeholder="Last Name"
        />
        <input
          value={email}
          name="email"
          type="email"
          placeholder="email"
        />
        <textarea
          value={message}
          name="message"
          type="text"
          placeholder="message"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
