import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {contacts: [], filter: ''},
  reducers: {
    addContactToState(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContactFromState(state, action) {
      return state.contacts.filter(item => item.id !== action.payload);
    },
    setFilter(state, action) {
      return (state.filter = action.payload);
    },
  },
});

export const { addContactToState, deleteContactFromState, setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;