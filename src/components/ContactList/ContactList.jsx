import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <ContactItem contact={contact} onClick={onDelete} />{' '}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;

ContactList.ptopTypes = {
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};
