import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    searchValue: "",
    isValueEmpty: false,
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
        },
        setEmptyValue: (state, action) => {
            state.isValueEmpty = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setSearchValue, setEmptyValue } = searchSlice.actions

export default searchSlice.reducer