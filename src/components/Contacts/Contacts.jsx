import { useDispatch, useSelector } from "react-redux";
import {deleteContact, getContacts } from '../redux/contactsSlice';
import { FiltredContacts } from './FiltredContacts/FiltredContacts';
import { Label, Input } from '../components.styled';
import PropTypes from 'prop-types';
import { List } from "./Contacts.styled";

export const Contacts = ({ onFilterSearch, filter}) => {
  const contactList = useSelector(getContacts);
  const dispatch = useDispatch();
  
  const onDelete = name => {
    if (!contactList) return;
    const updatedContacts = contactList.filter(
      contact => contact.name.toLowerCase() !== name.toLowerCase()
    );

    dispatch(deleteContact(updatedContacts));
  };

  const filtredContacts = contactList.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  const list = filtredContacts.map(({ name, id, phone }) => (
    <FiltredContacts key={id} name={name} phone={phone} onDelete={onDelete} />
  ));

  return (
    <>
      <h2>Contacts</h2>
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={onFilterSearch}
          value={filter}
        />
      </Label>
      <List>
        {list}
      </List>
    </>
  );
};

Contacts.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterSearch: PropTypes.func.isRequired,
};
