import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsThunk';
import css from './Contacts.module.css';

const { ContactForm } = require('components/ContactForm/ContactForm');
const { ContactList } = require('components/ContactList/ContactList');
const { Filter } = require('components/Filter/Filter');

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section className="section">
      <Helmet>
        <title>Phonebook app</title>
      </Helmet>
      <div className={css.container}>
        <ContactForm />
        <h2 className="title">Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </section>
  );
};

export default Contacts;
