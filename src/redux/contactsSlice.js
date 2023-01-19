import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const handlePending = state => {
    state.isLoading = true;
}

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchContacts.rejected]: handleRejected,
        [addContact.pending]: handlePending,
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },
        [addContact.rejected]: handleRejected,
        [deleteContact.pending]: handlePending,
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(contact => contact.id === action.payload);
            state.items.splice(index, 1);
        },
        [deleteContact.rejected]: handleRejected,
    },
    reducers: {
        // addContact: {
        //     reducer(state, action) {
        //         state.push(action.payload)
        //     },
        //     prepare(text) {
        //         return {
        //             payload: {
        //                 id: nanoid(),
        //                 name: text.name,
        //                 number: text.number,
        //             }
        //         }
        //     }
        // },
        deleteContact: {
            reducer(state, action) {
                const index = state.findIndex(contact => contact.id === action.payload);
                state.splice(index, 1);
            },
        }
    }
})

export const contactsReducer = contactsSlice.reducer;

