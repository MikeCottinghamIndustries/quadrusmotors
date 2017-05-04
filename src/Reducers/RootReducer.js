import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { vehicleReducer } from './VehicleReducer';
import { orderReducer } from './OrderReducer';

export const rootReducer = combineReducers({
    vehicle: vehicleReducer,
    order: orderReducer,
    routing: routerReducer
});