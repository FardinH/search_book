import React, {Component} from 'react';
import {connect} from "react-redux";
import {setEmptyValue, setSearchValue} from "../../../redux/search-reducer";
import SearchInput from "./SearchInput";
import {fetchUserById, resetValue} from "../../../redux/book-reducer";

class SearchInputContainer extends Component {
    render() {
        return (
            <SearchInput {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => ({
    searchValue: state.search.searchValue,
    isValueEmpty: state.search.isValueEmpty,
})
export default connect(mapStateToProps, {setSearchValue, setEmptyValue, fetchUserById, resetValue})(SearchInputContainer);