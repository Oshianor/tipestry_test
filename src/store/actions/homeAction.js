import { SET_OPEN } from "../types";

const toggleOpen = (payload) => ({
  type: SET_OPEN,
  payload: payload,
});

export default {
  toggleOpen
}