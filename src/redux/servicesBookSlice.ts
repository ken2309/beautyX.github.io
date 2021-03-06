import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    servicesBook: [] as any,
    org_id: null,
    order_id: null,
    org:null
}
const services = createSlice({
    name: 'SERVICES_BOOK',
    initialState,
    reducers: {
        addService: (state, action) => {
            const iIndex = state.servicesBook.findIndex((item: any) =>
                item.ser_book_id === action.payload.ser_book_id
            );
            if (iIndex >= 0) {
                const list = state.servicesBook.filter((item: any) => item.ser_book_id !== action.payload.ser_book_id)
                state.servicesBook = list
            } else {
                const temp = { ...action.payload };
                state.servicesBook.push(temp)
            }
            if (state.servicesBook.length === 0) {
                state.org_id = null;
                state.order_id = null;
                state.org = null
            } else {
                state.org_id = action.payload.org_id;
                state.order_id = action.payload.order_id;
                state.org = action.payload.org
            }
        }
    }
})
const { reducer, actions } = services;
export const { addService } = actions;
export default reducer;