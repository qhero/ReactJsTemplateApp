import * as actions from './actions';

export const fetchActivities = () => async dispatch => {
    dispatch(actions.fetchActivities())
    try {
        // const { data } = await axios.get('.....');
        setTimeout(() => {
            dispatch(actions.fetchActivitiesSuccess(['activity 1', 'activity 2', 'activity 3']))
        }, 2000)
    } catch (error) {
        dispatch(actions.fetchActivitiesFailed(error))
    }
    // axios.get('.....')
    //     .then(({ data}) => {
    //         dispatch(actions.fetchActivitiesSuccess(data))
    //     })
    //     .catch(({ error }) => {
    //         dispatch(actions.fetchActivitiesFailed(error))
    //     })
}

export const createActivity = (values) => async dispatch => {
    dispatch(actions.createActivities())
    try {
        setTimeout(() => {
            dispatch(actions.createActivitiesSuccess(values))
        }, 2000)
    } catch (error) {
        dispatch(actions.createActivitiesFailed(error))
    }
}