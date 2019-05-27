import { activitiesReducers, activitiesActions } from '../redux';


describe("Activities reducers", () => {
    it('should return initialState', () => {
        expect(activitiesReducers.activitiesListReducer(undefined, {})).toEqual({
            data: [],
            loading: false,
            errors: null
        });
    });
    test('fetch activity type', () => {
        const previousState = {
            data: [],
            loading: false,
            errors: null
        }
        const actionDispatched = activitiesActions.fetchActivities()
        const expected = {
            data: [],
            loading: true,
            errors: null
        }
        expect(activitiesReducers.activitiesListReducer(previousState,actionDispatched)).toEqual(expected);
    });
    test('fetch activity success type', () => {
        const previousState = {
            data: [],
            loading: true,
            errors: null
        }
        const actionDispatched = activitiesActions.fetchActivitiesSuccess(['activity 1', 'activity 2'])
        const expected = {
            data: ['activity 1', 'activity 2'],
            loading: false,
            errors: null
        }
        expect(activitiesReducers.activitiesListReducer(previousState,actionDispatched)).toEqual(expected);
    });
    test('fetch activity failed type', () => {
        const previousState = {
            data: [],
            loading: true,
            errors: null
        }
        const actionDispatched =  activitiesActions.fetchActivitiesFailed({})
        const expected = {
            data: [],
            loading: false,
            errors: true
        }
        expect(activitiesReducers.activitiesListReducer(previousState,actionDispatched)).toEqual(expected);
    });

});