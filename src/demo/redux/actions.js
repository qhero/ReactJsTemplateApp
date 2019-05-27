import * as actions from './types';

export function fetchActivity(){
    return {
        type: actions.FETCH_ACTIVITY
    };
}
export function fetchActivitySuccess(payload){
    return {
        type: actions.FETCH_ACTIVITY_SUCCESS,
        payload
    };
}
export function fetchActivityFailed(errors){
    return {
        type: actions.FETCH_ACTIVITY_FAILED,
        errors
    };
}