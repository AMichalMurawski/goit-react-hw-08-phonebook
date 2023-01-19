import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        margin: '0 auto',
        display: 'flex',
        width: '60%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h2
        style={{
          fontWeight: 700,
          paddingTop: 40,
          paddingBottom: 40,
        }}
      >
        Phonebook
      </h2>
      <ContactForm />
      <h2
        style={{
          fontWeight: 700,
          paddingTop: 40,
          paddingBottom: 40,
        }}
      >
        Contacts{' '}
      </h2>
      <Filter />
      <ContactList />
    </div>
  );
};
