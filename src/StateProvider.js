import React, { createContext, useContext, useReducer } from "react";

// Prepares the dataLayer (so context api is used so that every component can get access to the data layer)
export const StateContext = createContext();
// in simple database create kr deta hai jisko app hr jagah use kr skte hoo
// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);