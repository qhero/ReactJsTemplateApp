import * as types from './types';

export function fetchActivities() {
    return { type: types.FETCH_ACTIVITY }
}
export function fetchActivitiesSuccess(payload) {
    return { type: types.FETCH_ACTIVITY_SUCCESS, payload }
}
export function fetchActivitiesFailed(errors) {
    return { type: types.FETCH_ACTIVITY_FAILED, errors }
}

export function createActivities() {
    return { type: types.CREATE_ACTIVITY }
}

export function createActivitiesSuccess(payload) {
    return { type: types.CREATE_ACTIVITY_SUCCESS, payload }
}

export function createActivitiesFailed(errors) {
    return { type: types.CREATE_ACTIVITY_FAILED, errors }
}

