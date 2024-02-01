import { createContext, useContext, useReducer } from "react";
import { SnackbarAction, SnackbarState } from "../types";
import { SnackbarService } from "../interfaces";

const snackbarReducer = (state: SnackbarState, action: SnackbarAction) => {
  switch (action.type) {
    case "OPEN_SNACKBAR":
      return {
        open: true,
        message: action.payload!.message,
        severity: action.payload!.severity,
      };
    case "CLOSE_SNACKBAR":
      return {
        open: false,
        message: "",
        severity: undefined,
      };
    default:
      return state;
  }
};

const initialState: SnackbarState = {
  open: false,
  message: "",
  severity: undefined,
};

export const SnackbarContext = createContext<{
  state: SnackbarState;
  snackService: SnackbarService;
}>({
  state: initialState,
  snackService: {
    success: () => {},
    error: () => {},
    info: () => {},
    close: () => {},
  },
});

export const SnackbarProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(snackbarReducer, initialState);

  const success = (message: string) => {
    dispatch({
      type: "OPEN_SNACKBAR",
      payload: {
        open: true,
        message,
        severity: "success",
      },
    });
  };

  const error = (message: string) => {
    dispatch({
      type: "OPEN_SNACKBAR",
      payload: {
        open: true,
        message,
        severity: "error",
      },
    });
  };

  const info = (message: string) => {
    dispatch({
      type: "OPEN_SNACKBAR",
      payload: {
        open: true,
        message,
        severity: "info",
      },
    });
  };

  const close = () => {
    dispatch({ type: "CLOSE_SNACKBAR" });
  };

  const snackService = {
    success,
    error,
    info,
    close,
  };

  return (
    <SnackbarContext.Provider value={{ state, snackService }}>
      {children}
    </SnackbarContext.Provider>
  );
};

export const useSnack = () => {
  const { snackService } = useContext(SnackbarContext);
  return snackService;
};

export const useSnackState = () => {
  const { state } = useContext(SnackbarContext);
  return state;
};
