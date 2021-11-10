import React, { useEffect, useState } from 'react';
import api from './api/baseURL'
import Contact from './Contact';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
      api.get('/contacts').then(res=>{
        setContacts(res.data)
      })
  });
  return <ul>
    {contacts.map((data)=>{
      return <Contact name={data.name} email={data.email} id={data.id} key={data.id}/>
    })}
  </ul>;
};

export default Contacts;


//http://localhost:3006/contacts?id=1