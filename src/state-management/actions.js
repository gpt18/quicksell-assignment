export const ActionTypes = {
    SET_GROUPING: 'SET_GROUPING',
    SET_ORDERING: 'SET_ORDERING',
  };
  
  export const setGrouping = (grouping) => ({
    type: ActionTypes.SET_GROUPING,
    payload: grouping,
  });
  
  export const setOrdering = (ordering) => ({
    type: ActionTypes.SET_ORDERING,
    payload: ordering,
  });
  