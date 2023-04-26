import React, { useState } from 'react';
import './Data.css';

function Data() {
  const [name, setName] = useState('');
  const [heading, setHeading] = useState('*****');

  const handleSubmit = (event) => {
    event.preventDefault();
    setHeading(name);
    setName('');
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Type your Name here..."
          type="text"
          value={name}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <h1>Hi! My name is: {heading}</h1>
    </div>
  );
}

export default Data;
