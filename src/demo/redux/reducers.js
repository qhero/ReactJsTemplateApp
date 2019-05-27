import { combineReducers } from 'redux';
import * as types from './types';

const initialiseState = {
    list: [],
    loading: false
}

const demoActivitiesListReducer = (state = initialiseState, action) => {
    switch (action.type) {
        case types.FETCH_ACTIVITY:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}

export default combineReducers({
    list: demoActivitiesListReducer
})