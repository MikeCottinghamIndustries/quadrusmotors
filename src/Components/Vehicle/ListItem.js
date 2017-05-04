import React, { Component } from 'react';
import { FormattedNumber } from 'react-intl';

export default class ListItem extends Component {
    addToOrder() {
        this.props.addToOrder(this.props);
    }

    render() {
        const makeModel = this.props.make + " - " + this.props.model;
        const { addToOrder, allowAdd } = this.props;

        return (
            <div className="col-sm-12 col-md-6 col-lg-4 list-item">
                <img src={this.props.img} alt={makeModel} />
                <h2 className="price">
                    <FormattedNumber value={this.props.price} style="currency" currency="USD" />
                </h2>
                <button className='btn btn-primary' onClick={this.addToOrder.bind(this)} disabled={allowAdd}>Add to Order</button>
                <h3>{makeModel}</h3>
                <p>{this.props.description}</p>
            </div>
        )
    }
}