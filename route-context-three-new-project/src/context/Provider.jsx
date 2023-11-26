import { createContext, useReducer } from "react";

const crateContext = createContext();

const initialArg = {
  showLoader: false,
  user: null,
  weatherbit: null,
};

export const ACTION_SET_LOADER = "ACTION_SET_LOADER";
export const ACTION_SET_USER = "ACTION_SET_USER";
export const ACTION_SET_WEATHERBIT = "ACTION_SET_WEATHERBIT";

function reducer(state, action) {
  switch (action.type) {
    case ACTION_SET_LOADER:
      return { ...state, showLoader: action.payload };

    case ACTION_SET_USER:
      return { ...state, user: action.payload };

    case ACTION_SET_WEATHERBIT:
      return { ...state, weatherbit: action.payload };

    default:
      return state;
  }
}

function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialArg);

  const valueToShare = {
    state,
    dispatch,
  };

  return (
    <crateContext.Provider value={valueToShare}>
      {children}
    </crateContext.Provider>
  );
}
export { Provider };
export default crateContext;
