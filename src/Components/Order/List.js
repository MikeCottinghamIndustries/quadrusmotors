import React, { Component } from 'react';
import * as _ from 'lodash';
import { connect } from 'react-redux';
import { FormattedNumber } from 'react-intl';
import moment from 'moment';


class List extends Component {
    render() {
        const orderItems = this.props.order.map((item, idx) => {
            return (
                <div className="row" key={idx}>
                    <div className="col-sm-12 borders">
                        <img src={item.img} alt={item.make + " " + item.model} className="pull-right" />
                        <h2>{item.make} - {item.model} - <FormattedNumber value={item.price} style="currency" currency="USD" /></h2>
                        <p>{item.description}</p>
                        <strong>Ordered</strong> {moment(item.orderTime).format('MMMM Do YYYY, h:mm a')}
                    </div>
                    <hr />
                </div>
            )
        });

        if (orderItems.length === 0) {
            return <div className="alert alert-info"><strong>No Items Ordered</strong></div>;
        }

        return (
            <div className='container-fluid'>
                {orderItems}
                <div className="row">
                    <div className="col-sm-12 borders text-right">
                        <h2>Order Total <FormattedNumber value={this.props.orderTotal} style="currency" currency="USD" /></h2>
                    </div>                    
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        order: state.order,
        orderTotal: _.reduce(state.order, (current, next) => {
            return current + next.price;
        }, 0)
    };
};

export default connect(mapStateToProps)(List);