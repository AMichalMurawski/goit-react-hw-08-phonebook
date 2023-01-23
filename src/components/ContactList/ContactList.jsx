import css from './ContactList.module.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectVisibleContacts } from 'redux/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <ul className={css.list}>
      {isLoading && <div>Loading list...</div>}
      {!!contacts &&
        contacts.map(contact => (
          <li className={css.item} key={contact.id}>
            <ContactItem contact={contact} />
          </li>
        ))}
    </ul>
  );
};
