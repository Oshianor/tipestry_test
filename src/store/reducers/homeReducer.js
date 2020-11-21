import { SET_OPEN, SET_TOPICS } from "../types"

const initialState = {
  open: false,
  topics: [],
  page: 1,
  total: 0
}

const home = (state = initialState, action) => {
  switch (action.type) {
    case SET_OPEN:
      return {
        ...state,
        open: action.payload,
      }
    case SET_TOPICS:
      return {
        ...state,
        ...action.payload,
        // topics: action.payload.topics,
        // page: action.payload.page,
        // total: action.payload.total,
      }
    default:
      return state
  }
}

export default home
