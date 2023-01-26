import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsThunk';
import { selectContacts } from 'redux/contacts/selectors';

const { ContactForm } = require('components/ContactForm/ContactForm');
const { ContactList } = require('components/ContactList/ContactList');
const { Filter } = require('components/Filter/Filter');

const Contacts = () => {
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
      <Helmet>
        <title>Phonebook app</title>
      </Helmet>
      <ContactForm />
      <h2
        style={{
          fontWeight: 700,
          paddingTop: 40,
          paddingBottom: 40,
        }}
      >
        Contacts
      </h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default Contacts;
