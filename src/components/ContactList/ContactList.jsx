import css from './ContactList.module.css';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <table className={css.table}>
        <tbody>
          {!!contacts &&
            contacts.map(contact => (
              <ContactItem key={contact.id} contact={contact} />
            ))}
        </tbody>
      </table>
      {isLoading && <div>Loading list...</div>}
    </>
  );
};

export default ContactList;
