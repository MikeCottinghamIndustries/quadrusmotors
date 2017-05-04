import React, { Component } from 'react';
import { connect } from 'react-redux';

class Summary extends Component {
    render() {
        const orderLength = this.props.order.length;
        return (
            <div>
                Order {orderLength > 0 ? <span className="badge badge-important">{orderLength}</span> : null}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        order: state.order
    }
}

export default connect(mapStateToProps)(Summary);