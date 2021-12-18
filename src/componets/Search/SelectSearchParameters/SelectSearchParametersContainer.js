import React, {Component} from 'react';
import SelectSearchParameters from "./SelectSearchParameters";
import {connect} from "react-redux";
import {setSelectedCategory, setSelectingSorting} from "../../../redux/selectCategory-reducer";
import {fetchUserById, resetValue} from "../../../redux/book-reducer";

class SelectSearchParametersContainer extends Component {
    render() {
        return (
            <div>
                <SelectSearchParameters {...this.props}/>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    selectCategories: state.select.selectCategories,
    selectedCategory: state.select.selectedCategory,

    selectSorting: state.select.selectSorting,
    selectingSorting: state.select.selectingSorting,

    startIndex: state.counter.startIndex,
})
export default connect(mapStateToProps, {setSelectedCategory, setSelectingSorting, fetchUserById, resetValue})(SelectSearchParametersContainer);