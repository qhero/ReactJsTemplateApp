export const activitiesState = state => state.activities.list

export const isActivitiesListLoading = state => {
    const fragment = activitiesState(state);
    return fragment.loading;
}

export const getActivitiesList = state => {
    const fragment = activitiesState(state);
    return fragment.data;
}