import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContactToState(state, action) {
      state.push(action.payload);
    },
    deleteContactFromState(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
    // setFilter(state, action) {
    //   return (state.filter = action.payload);
    // },
  },
});

export const { addContactToState, deleteContactFromState } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;