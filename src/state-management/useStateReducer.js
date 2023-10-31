import React, { useContext, useReducer, createContext, useMemo } from 'react';
import { getCurrentGroupValue, getCurrentOrderValue } from '../utils/OfflineData';

//initial state value for global vlaue
const initialState = {
    grouping: getCurrentGroupValue(),
    ordering: getCurrentOrderValue(),
};

//create new conext
const StateContext = createContext();

//application wrapper : provider
export const StateProvider = ({ reducer, children }) => {
    //hooks to manage state and dispatch actions
    const [state, dispatch] = useReducer(reducer, initialState);
    //memorize the context value
    const contextValue = useMemo(() => [state, dispatch], [state]);
    return (
        <StateContext.Provider value={contextValue}>{children}</StateContext.Provider>
    );
};

//custom hook
export const useStateValue = () => {
    const context = useContext(StateContext);

    //error genrate if hook used outside the provider
    if (!context) {
        throw new Error('useStateValue must be used within a StateProvider');
    }
    return context;
};
