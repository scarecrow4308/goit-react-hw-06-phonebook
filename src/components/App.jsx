import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getContacts, getFilter, addContact } from './redux/contactsSlice';
import { Container } from './App.styled';
import { Phonebook } from './Phonebook/Phonebook';
import { Contacts } from './Contacts/Contacts';

export const App = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onFilterSearch = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Container>
      <Phonebook />
      <Contacts
        onFilterSearch={onFilterSearch}
        filter={filter}
      />
    </Container>
  );
};
