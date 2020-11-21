import { SET_OPEN, SET_TOPICS } from "../types"

const toggleOpen = payload => ({
  type: SET_OPEN,
  payload: payload,
});


const setTopicsData = payload => ({
  type: SET_TOPICS,
  payload: payload,
});

export default {
  toggleOpen,
  setTopicsData,
}
