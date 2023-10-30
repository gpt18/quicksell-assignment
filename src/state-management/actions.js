//defined action types
export const ActionTypes = {
    SET_GROUPING: 'SET_GROUPING',
    SET_ORDERING: 'SET_ORDERING',
};

//setter action for grouping state
export const setGrouping = (grouping) => ({
    type: ActionTypes.SET_GROUPING,
    payload: grouping,
});

//setter action for ordering state
export const setOrdering = (ordering) => ({
    type: ActionTypes.SET_ORDERING,
    payload: ordering,
});
