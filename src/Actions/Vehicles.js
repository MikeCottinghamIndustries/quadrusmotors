import { createAction } from 'redux-actions';
import * as VehicleAPI from '../API/Vehicles';

export const GET_VEHICLES = 'GET_VEHICLES';
export const ADD_TO_ORDER = 'ADD_TO_ORDER';

export const getVehicles = createAction(GET_VEHICLES, VehicleAPI.getVehicles);
export const addToOrder = createAction(ADD_TO_ORDER);