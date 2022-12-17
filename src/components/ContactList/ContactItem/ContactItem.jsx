import React from 'react';
import { Item, DeleteButton } from './ContactItem.styled';

const ContactItem = ({ contact: { name, number, id }, onClick }) => {
  return (
    <Item>
      <span>{name}</span>
      <div>
        <span>{number}</span>
        <DeleteButton onClick={() => onClick(id)}>Delete</DeleteButton>
      </div>
    </Item>
  );
};

export default ContactItem;
