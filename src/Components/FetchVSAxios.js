import React from 'react';
import api from './api/baseURL';

const FetchVSAxios = () => {
  const asyncFunction = async () => {
    const res = await fetch('http://localhost:3006/contacts');
    const data = await res.json();
    console.log(data);

    const resp = await api.get('/contacts');
    console.log(resp.data);
  };

  const clickHandler = () => {
    asyncFunction();
  };

  const addClickHandler = async () => {
    const res = await fetch('http://localhost:3006/contacts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Kumar',
        email: 'kumarBagadhi@gmail.com',
      }),
    });
    const data = await res.json();
   console.log(data)

   const newAddingResp= await api.post("/contacts",{
    name: 'Axios',
    email: 'Axios@gmail.com',
   })

   console.log(newAddingResp.data)

  };
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
      <button onClick={addClickHandler}>AddContent to API</button>
    </div>
  );
};

export default FetchVSAxios;
