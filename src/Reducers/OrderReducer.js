import * as _ from 'lodash';
import { handleActions } from 'redux-actions';
import { ADD_TO_ORDER } from '../Actions/Vehicles';

export const orderReducer = handleActions({
    [ADD_TO_ORDER]: {
        next(state, action) {
            var {payload} = action;
            var newItem = Object.assign({}, payload, {orderTime: new Date()});

            if(state.length === 0) {
                return [newItem];
            }
            var inCart = _.find(state, {make: newItem.make, model: newItem.model});

            if(!inCart) {
                return [...state, newItem];
            }

            return state;
        },
        throw(state) {
            return state;
        }
    }
}, []);