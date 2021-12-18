import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './book-reducer'
import searchReducer from './search-reducer'
import selectReducer from './selectCategory-reducer'
import {logger} from "redux-logger/src";



export const store = configureStore({
    reducer: {
        counter: counterReducer,
        search: searchReducer,
        select: selectReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})