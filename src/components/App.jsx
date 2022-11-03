import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import FormAddContact from './FormAddContact';
import SectionWrap from './SectionWrap';
import ContactsList from './ContactsList';
import FilterByName from './FilterByName';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsList = localStorage.getItem('contactsList');
    const parsedContactsList = JSON.parse(contactsList);
    setContacts(parsedContactsList);
  }, []);

  useEffect(() => {
    if (contacts.length === 0) {
      return;
    }
    localStorage.setItem('contactsList', JSON.stringify(contacts));
  }, [contacts]);

  // componentDidMount() {
  //   const contactsList = localStorage.getItem('contactsList');
  //   const parsedContactsList = JSON.parse(contactsList);

  //   if (parsedContactsList) {
  //     this.setState({ contacts: parsedContactsList });
  //   }
  // }

  // componentDidUpdate(prevState) {
  //   const nextContactsList = this.state.contacts;
  //   const prevContactsList = prevState.contacts;

  //   if (nextContactsList !== prevContactsList) {
  //     console.log(
  //       'Обновилось поле contactsList, записываю ContactsList в хранилище'
  //     );
  //     localStorage.setItem('contactsList', JSON.stringify(nextContactsList));
  //   }
  // }

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const isExist = contacts.find(contact => contact.name === name);

    isExist
      ? alert(`${name} is already in the contacts`)
      : setContacts([contact, ...contacts]);
  };

  const deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const getSortedContacts = contacts => {
    return contacts.sort((x, y) => x.name.localeCompare(y.name));
  };

  const filteredContacts = getFilteredContacts(contacts);
  const sortedContacts = getSortedContacts(filteredContacts);
  return (
    <>
      <SectionWrap title="Phonebook">
        <FormAddContact onAddFormSubmit={addContact} />
      </SectionWrap>
      <SectionWrap title="Contacts">
        <FilterByName value={filter} onChange={changeFilter} />
        <ContactsList contacts={sortedContacts} deleteContact={deleteContact} />
      </SectionWrap>
    </>
  );
}

export default App;
