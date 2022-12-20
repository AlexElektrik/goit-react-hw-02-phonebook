import React from 'react';
import PropTypes from 'prop-types';

const ContactFilter = ({ filter, onChange }) => {
  return (
    <>
      <input type="text" value={filter} onChange={onChange} />
    </>
  );
};

export default ContactFilter;

ContactFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
