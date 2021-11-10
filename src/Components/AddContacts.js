import React, { useState } from 'react';

import api from './api/baseURL';
const AddContacts = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [id, setid] = useState('');
  const submitHandler = (event) => {
    event.preventDefault();
    api
      .post('/contacts', {
        name: name,
        email: email,
      })
      .then((res) => {
        console.log(res);
      });
  };

  const updateHandler = () => {
    api
      .put(`/contacts/${id}`, {
        name: name,
        email: email,
      })
      .then((res) => {
        console.log(res);
      });
  };
  const deleteHandler = () => {
    api.delete(`/contacts/${id}`).then((res) => {
      console.log(res);
    });
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const idChangeHandler = (event) => {
    setid(event.target.value);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input placeholder="Id" type="text" onChange={idChangeHandler} />
        <input placeholder="email" type="email" onChange={emailChangeHandler} />
        <input placeholder="name" type="text" onChange={nameChangeHandler} />
        <button type="submit">Submit</button>
      </form>
      <button type="click" onClick={updateHandler}>
        Update
      </button>
      <button type="click" onClick={deleteHandler}>
        Delete
      </button>
    </div>
  );
};

export default AddContacts;
