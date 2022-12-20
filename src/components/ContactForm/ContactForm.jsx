import { Formik, Field } from 'formik';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  CreateContactForm,
  Label,
  NameLable,
  SubmitButton,
} from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  saveNewContact = event => {
    const { name, number } = event.target.elements;
    if (
      !this.props.contacts.find(
        contact =>
          contact.name.toLocaleLowerCase() ===
          event.target.name.value.toLocaleLowerCase()
      )
    ) {
      this.props.onSubmit(name.value, number.value);
      this.resetState();
    } else {
      alert(`${event.target.name.value} is already in contacts`);
    }
  };

  resetState = () => {
    this.setState({ name: '', number: '' });
  };

  handelChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <Formik initialValues={this.state} onSubmit={this.saveNewContact}>
          <CreateContactForm autoComplete="off" onSubmit={this.saveNewContact}>
            <Label htmlFor="name">
              <NameLable> Name</NameLable>
              <Field
                value={this.state.name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.handelChange}
              />
            </Label>
            <Label htmlFor="number">
              <NameLable>Number</NameLable>
              <Field
                value={this.state.number}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.handelChange}
              />
            </Label>
            <SubmitButton> Add contact</SubmitButton>
          </CreateContactForm>
        </Formik>
      </>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};
