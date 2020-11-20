import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { homeAction } from "../../store/actions"
import Navbar from "./components/Navbar"
import Topics from "./components/Topics"

const HomeComponent = () => {
  const dispatch = useDispatch()
  const { open } = useSelector(({ home }) => home)

  const handleClick = () => {
    dispatch(homeAction.toggleOpen(!open))
  }

  return (
    <div>
      <Navbar />
      <Topics />
    </div>
  )
}

export default HomeComponent
