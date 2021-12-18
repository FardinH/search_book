import React, {Component} from 'react';

import ViewBookCard from "./ViewBookCard";
import {connect} from "react-redux";




class ViewBookCardContainer extends Component {

    render() {
        console.log(this.props.valueBook)
        return (
            <div>
                <ViewBookCard {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    valueBook: state.counter.value,
})

export default connect(mapStateToProps)(ViewBookCardContainer);
