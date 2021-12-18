import React from 'react';
import BookCard from "./BookCard/BookCard";
import style from "./bookCard.module.css"

import SearchInputContainer from "./SearchInput/SearchInputContainer";
import SelectSearchParametersContainer from "./SelectSearchParameters/SelectSearchParametersContainer";

// UI
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import {Typography} from "@mui/material";


const SearchBar = (props) => {

    let isNotElementsEnded = props.countResult - props.startIndex > props.maxResults;
    let searchCount = 0;

    const clickButtonEvent = () => {
        if (isNotElementsEnded) {
            props.fetchUserById()
        }
    }
    return (
        <div>
            <div>
                <h1>Поиск книг</h1>
            </div>

            <SearchInputContainer/>
            <SelectSearchParametersContainer/>
            <div>
                { props.startIndex !== 0 && !props.isLoading && <Typography variant="body1">Found {props.countResult} result</Typography>}
                <div className={style.container}>
                    {props.value.map((bookInfo, index) => {
                        searchCount = 0;
                        if ((props.selectedCategory[0] === "All") || (bookInfo.volumeInfo.categories &&  bookInfo.volumeInfo.categories[0] === props.selectedCategory[0])) {
                            searchCount++;
                            return (
                                <BookCard
                                    bookId = {bookInfo.id}
                                    imageURL = {bookInfo.volumeInfo.imageLinks && bookInfo.volumeInfo.imageLinks.thumbnail}
                                    bookTitle = {bookInfo.volumeInfo.title}
                                    bookAuthor = {bookInfo.volumeInfo.authors && bookInfo.volumeInfo.authors.join(", ")}

                                    category = {bookInfo.volumeInfo.categories
                                    && bookInfo.volumeInfo.categories[0] !== ""
                                    && bookInfo.volumeInfo.categories[0]}
                                    cardId = {index}
                                />
                            )
                        }
                    })}
                </div>
                {props.isLoading && <CircularProgress/>}
                <div>
                    {(props.startIndex !== 0 && !props.isLoading && isNotElementsEnded && searchCount > 0) &&
                    <Button onClick={clickButtonEvent} variant="contained">More</Button>
                    }
                </div>
            </div>

        </div>
    );
};

export default SearchBar;