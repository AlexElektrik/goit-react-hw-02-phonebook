import React, { Component } from 'react';
import ContactList from './ContactList';
// import ContactForm from './ContactForm';
import ContactFilter from './ContactFilter';
import { nanoid } from 'nanoid';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  addContact = (name, number) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
    console.log(this.state.contacts);
  };

  deleteContact = contactID => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contactID !== contact.id),
    }));
  };

  handelChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { contacts } = this.state;
    const contactFilter = this.state.contacts.filter(contact =>
      contact.name
        .toLocaleLowerCase()
        .includes(this.state.filter.toLocaleLowerCase())
    );

    return (
      <Container>
        <h2>Phonebook</h2>
        {/* <ContactForm onSubmit={this.addContact} contacts={contacts} /> */}
        <h2>Contacts</h2>
        <h3>Find contact by name</h3>
        <ContactFilter value={this.state.filter} onChange={this.handelChange} />
        <ContactList contacts={contactFilter} onDelete={this.deleteContact} />
        <GlobalStyle />
      </Container>
    );
  }
}
