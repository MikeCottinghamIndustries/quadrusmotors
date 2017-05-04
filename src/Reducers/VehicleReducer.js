import { handleActions } from 'redux-actions';
import { GET_VEHICLES } from '../Actions/Vehicles';

export const vehicleReducer = handleActions({
    [GET_VEHICLES]: {
        next(state, action) {
            return action.payload;
        },
        throw(state) {
            return state;
        }
    }
}, []);