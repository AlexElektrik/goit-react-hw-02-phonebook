import React from 'react';

const ContactFilter = ({ value, onChange }) => {
  return (
    <>
      <input type="text" value={value} onChange={onChange} />
    </>
  );
};

export default ContactFilter;
