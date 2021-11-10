import React from 'react';
const Contact = (props) => {
  return (
    <li key={props.id}>
      <h1>{props.name}</h1>
      <p>{props.email}</p>
    </li>
  );
};

export default Contact;
