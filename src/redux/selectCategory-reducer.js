import {createSlice} from '@reduxjs/toolkit'



const initialState = {
    selectCategories: [
        "All",
        "Art",
        "Biography",
        "Computers",
        "History",
        "Medical",
        "Poetry",
    ],
    selectedCategory: ["All", 0],

    selectSorting: [
        "relevance",
        "newest",
    ],
    selectingSorting: ["relevance", 0],
}

export const selectSlice = createSlice({
    name: 'select',
    initialState,
    reducers: {
        setSelectedCategory: (state, action) => {
            state.selectedCategory = [state.selectCategories[action.payload], action.payload];
        },

        setSelectingSorting: (state, action) => {
            state.selectingSorting = [state.selectSorting[action.payload], action.payload];
        }
    },
})

// Action creators are generated for each case reducer function
export const { setSelectedCategory, setSelectingSorting } = selectSlice.actions

export default selectSlice.reducer