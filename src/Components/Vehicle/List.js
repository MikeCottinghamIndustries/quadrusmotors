import React, { Component } from 'react';
import * as _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getVehicles, addToOrder } from '../../Actions/Vehicles';

import './List.css';
import ListItem from './ListItem';

class List extends Component {
    componentDidMount() {
        this.props.getVehicles();
    }

    render() {
        var { vehicles, order } = this.props;
        var listItems = vehicles.map((vehicle, idx) => {
            const allowAdd = _.find(order, {make: vehicle.make, model: vehicle.model});
            return <ListItem key={idx} {...vehicle} addToOrder={this.props.addToOrder} allowAdd={allowAdd}/>;
        });


        return (
            <div className=''>
                {listItems}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        vehicles: state.vehicle,
        order: state.order,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getVehicles: bindActionCreators(getVehicles, dispatch),
        addToOrder: bindActionCreators(addToOrder, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);