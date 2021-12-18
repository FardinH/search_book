import React from 'react';
import {connect} from "react-redux";
import SearchBar from "./SearchBar";
import {fetchUserById} from "../../redux/book-reducer";

class SearchBarContainer extends React.Component {
    render() {
        return (
            <SearchBar {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => ({
    value: state.counter.value,
    isLoading: state.counter.isLoading,
    startIndex: state.counter.startIndex,
    maxResults: state.counter.maxResults,
    countResult: state.counter.countResult,

    selectedCategory: state.select.selectedCategory,
});

export default connect(mapStateToProps, {fetchUserById})(SearchBarContainer);