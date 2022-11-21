import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContactToState, deleteContactFromState, setFilter } from 'redux/contactsSlice';
import FormAddContact from './FormAddContact';
import SectionWrap from './SectionWrap';
import ContactsList from './ContactsList';
import FilterByName from './FilterByName';

export default function App() {
  const contacts = useSelector(state => state.contacts)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch();

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const isExist = contacts.find(contact => contact.name === name);

    isExist
      ? alert(`${name} is already in the contacts`)
      : dispatch(addContactToState(contact))
  };

  const deleteContact = contactId => {
    dispatch(deleteContactFromState(contactId))
  };

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const sortedContacts = filteredContacts.sort((x, y) =>
    x.name.localeCompare(y.name)
  );


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
