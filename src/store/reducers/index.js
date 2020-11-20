import { combineReducers } from "redux"
import home from "./homeReducer"

const appReducer = combineReducers({
  home,
})

export default appReducer
