import React, { useReducer } from "react";
import { Action } from "./actions";

import { AppState, initialState } from "./initialState";
import { reducer } from "./reducer";

export interface AppContextDef {
  state: AppState;
  dispatch: Function;
}

export interface DispatchStuff {
  type: Action;
  payload: any;
}

export const AppContext = React.createContext({
  state: initialState,
  dispatch: ({ type, payload }: DispatchStuff) => {},
});

export const AppContainer: React.FC = function (props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <AppContext.Provider value={{ state, dispatch }} {...props} />;
};
