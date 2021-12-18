import {createAsyncThunk, createSlice, original} from '@reduxjs/toolkit'
import {bookAPI} from "../api/api";


const initialState = {
    value: [],
    countResult: null,
    isLoading: false,
    startIndex: 0,
    maxResults: 30,
}


export const fetchUserById = createAsyncThunk(
    'counter/fetchByIdStatus',
    async (_, { getState })=> {


        const startIndex = getState().counter.startIndex;
        const maxResults = getState().counter.maxResults;
        const bookName = getState().search.searchValue;
        const orderBy = getState().select.selectingSorting[0];

        const response = await bookAPI.getBookFromName(bookName, startIndex, maxResults, orderBy);
        return await response.data;
    }
)


export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        resetValue: (state) => {
            state.value = [];
            state.startIndex = 0;
        },
    },
    extraReducers:  {
        [fetchUserById.pending]: (state, action) => {
            state.isLoading = true;
        },
        [fetchUserById.fulfilled]: (state, action) => {

            state.value = [... state.value, ...action.payload.items ];

            state.countResult = action.payload.totalItems
            state.startIndex += state.maxResults
            state.isLoading = false;
        }
    },
})

// Action creators are generated for each case reducer function
export const { resetValue } = counterSlice.actions

export default counterSlice.reducer