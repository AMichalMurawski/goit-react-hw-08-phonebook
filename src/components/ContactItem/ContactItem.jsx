import React from 'react';
import css from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/contactsThunk';
import { useDispatch } from '../../../node_modules/react-redux/es/exports';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <tr>
      <td className={css.contact + ' paragraph'}>{contact.name}:</td>
      <td className={css.number + ' paragraph'}> {contact.number}</td>
      <td className={css.delete + ' paragraph'}>
        <button className={css.button} type="button" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
