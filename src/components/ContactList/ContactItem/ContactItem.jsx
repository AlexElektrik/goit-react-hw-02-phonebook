import React from 'react';
import PropTypes from 'prop-types';
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

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
  is: PropTypes.string,
};
