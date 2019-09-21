import React, {createContext, useContext, useReducer} from 'react';
// import AuthHelper from "../utils/api/lib/authHelper";

export const Context = createContext(null);

const initialState = {
  apiUrl: null,
  system: null,
  authentication: null,
  user: null,
  mapboxApiAccessToken: 'pk.eyJ1IjoiaW52ZXN0b3Jpc2UiLCJhIjoiY2lrNnY3Ymo4MDA1bXZya3NyM2pycXU4aSJ9.HAlP5YvdIJp2oNVCAKKOWg'
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'setApiUrl':
      return {
        ...state,
        apiUrl: action.payload
      };
    case 'setSystem':
      return {
        ...state,
        system: action.payload
      };
    case 'setAuthentication': {
      return {
        ...state,
        authentication: action.payload
      }
    }
    case 'setUser':
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

export const AppStateProvider = ({children}) =>(
  <Context.Provider value={useReducer(reducer, initialState)}>
    {children}
  </Context.Provider>
);

export const AppState = () => useContext(Context);
