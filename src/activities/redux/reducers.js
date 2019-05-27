import { combineReducers } from 'redux';

import * as types from './types';

const initialState = {
    data: [],
    loading: false,
    errors: null
}

export const activitiesListReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_ACTIVITY:
            return {
                ...state,
                loading: true,
                errors: null
            }
        case types.FETCH_ACTIVITY_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case types.FETCH_ACTIVITY_FAILED:
            return {
                ...state,
                loading: false,
                errors: true
            }
        case types.CREATE_ACTIVITY_SUCCESS:
            return {
                ...state,
                data: [...state.data, action.payload.name]
            }
        default:
            return state
    }
}

export default combineReducers({
    list: activitiesListReducer
})