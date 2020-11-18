import { SET_OPEN } from "../types";


const initialState = {
  open: false,
  time: new Date()
};

const home = (state = initialState, action) => {
  switch (action.type) {
    case SET_OPEN:
      return {
        ...state,
        open: action.payload,
      };
    case "CLOSED":
      return {
        ...state,
        open: action.payload,
      };
    default:
      return state;
  }
};

export default home;