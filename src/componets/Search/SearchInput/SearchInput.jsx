import React from 'react';
import {Icon, IconButton, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {fetchUserById, resetValue} from "../../../redux/book-reducer";

const SearchInput = (props) => {

    const SearchButton = (e) => (
        <IconButton onClick={onButtonSearchOrEnterClick}>
            <SearchIcon />
        </IconButton>
    )

    const onChangSearchInputValue = (e) => {
        props.setSearchValue(e.target.value);
    }

    const onTargetEnter = (e) => {
        if (e.charCode === 13) {
            onButtonSearchOrEnterClick()
        }
    }

    const onButtonSearchOrEnterClick = () => {
        props.setEmptyValue(false)

        if (props.searchValue === '')
            props.setEmptyValue(true)

        if (props.searchValue) {
            props.resetValue();
            props.fetchUserById();
        }

    }

    return (
        <div>
            <TextField
                id="standard-name"
                label="Название книги"
                onChange={onChangSearchInputValue}
                onKeyPress={onTargetEnter}
                value={props.searchValue}
                error={props.isValueEmpty}
                InputProps={{endAdornment: <SearchButton/>}}
            />
        </div>
    );
};

export default SearchInput;