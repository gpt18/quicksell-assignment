import React, { useContext, useReducer, createContext, useMemo } from 'react';
import { getCurrentGroupValue, getCurrentOrderValue } from '../components/Header/Action';

const initialState = {
    grouping: getCurrentGroupValue(),
    ordering: getCurrentOrderValue(),
  };


const StateContext = createContext();

export const StateProvider = ({ reducer, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(() => [state, dispatch], [state]);
  return (
    <StateContext.Provider value={contextValue}>{children}</StateContext.Provider>
  );
};

export const useStateValue = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error('useStateValue must be used within a StateProvider');
  }
  return context;
};
