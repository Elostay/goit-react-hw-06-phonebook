import React from 'react';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Title, SubTitle, Container } from './ContactForm/ContactForm.styled';

import { persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Container>
        <Title>Phonebook</Title>
        <ContactForm />
        <SubTitle>Contacts</SubTitle>
        <Filter />
        <ContactList />
      </Container>
    </PersistGate>
  );
};

export default App;
