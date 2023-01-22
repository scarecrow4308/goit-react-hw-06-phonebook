import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import contactList from '../../data/contacts.json';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: contactList,
    filter: '',
  },
  reducers: {
    addContact(state, { payload }) {
      state.contacts = [...state.contacts, payload];
    },
    deleteContact(state, { payload }) {
      state.contacts = [...payload];
    },
    setFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;

//Selectors
export const getContacts = ({ contacts }) => contacts.contacts;
export const getFilter = ({ contacts }) => contacts.filter;
