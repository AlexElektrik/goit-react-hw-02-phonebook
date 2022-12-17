import { Formik, Form, Field } from 'formik';

import {
  CreateContactForm,
  Label,
  NameLable,
  SubmitButton,
} from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = ({ onSubmit, contacts }) => {
  const saveNewContact = event => {
    event.preventDefault();
    const { name, number } = event.target.elements;
    if (
      !contacts.find(
        contact =>
          contact.name.toLocaleLowerCase() ===
          event.target.name.value.toLocaleLowerCase()
      )
    ) {
      onSubmit(name.value, number.value);
    } else {
      alert(`${event.target.name.value} is already in contacts`);
    }
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={saveNewContact}>
        <CreateContactForm autoComplete="off" onSubmit={saveNewContact}>
          <Label htmlFor="name">
            <NameLable> Name</NameLable>
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label htmlFor="number">
            <NameLable>Number</NameLable>
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <SubmitButton> Add contact</SubmitButton>
        </CreateContactForm>
      </Formik>
    </>
  );
};

export default ContactForm;
