import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";


export const contactAdapter = createEntityAdapter();

const initialState =  contactAdapter.getInitialState();

export const contactSelectors = contactAdapter.getSelectors(state => state.contacts)

export const contactSlice = createSlice({
    name : 'contacts',
    initialState,
    reducers : {
        addContact : contactAdapter.addOne,
        addContacts : contactAdapter.addMany,
        deleteContact : contactAdapter.removeOne,
        clearContact : contactAdapter.removeAll,
    }
});
export const {addContact, addContacts,deleteContact, clearContact} = contactSlice.actions;
export default contactSlice.reducer;