import { combineReducers } from "redux"
import home from "./homeReducer"

const appReducer = combineReducers({
  home,
  rat: home,
  dog: home,
})

export default appReducer
