import { createContext, useContext, useReducer } from "react";

interface BannerState {
  text: string;
  visible: boolean;
  icon?: string;
}

interface BannerAction {
  type: string;
  payload: BannerState;
}

const bannerReducer = (
  state: BannerState,
  action: BannerAction
): BannerState => {
  switch (action.type) {
    case "SHOW":
      return {
        ...action.payload,
        visible: true,
      };
    case "HIDE":
      return {
        visible: false,
        text: "",
        icon: "",
      };
    default:
      return state;
  }
};

const initialState = { visible: false, text: "", icon: "" };

const BannerContext = createContext<{
  state: BannerState;
  show: (text: string) => void;
  hide: () => void;
}>({
  state: initialState,
  show: () => {},
  hide: () => {}
});

export const BannerProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(bannerReducer, initialState);

  const show = (text: string, icon?: string) => {
    dispatch({
      type: "SHOW",
      payload: {
        visible: true,
        text,
        icon,
      }
    });
  };

  const hide = () => {
    dispatch({
      type: "HIDE",
      payload: initialState
    });
  };

  return (
    <BannerContext.Provider value={{ state, show, hide }}>
      {children}
    </BannerContext.Provider>
  );
}

export const useBanner = () => {
  return useContext(BannerContext);
};