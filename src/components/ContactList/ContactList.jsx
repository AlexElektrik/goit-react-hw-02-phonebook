import React from 'react';
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
