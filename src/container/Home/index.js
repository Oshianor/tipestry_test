import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { homeAction } from "../../store/actions"
import Navbar from "./components/Navbar"

const HomeComponent = () => {
  const dispatch = useDispatch()
  const { open } = useSelector(({ home }) => home)

  const handleClick = () => {
    dispatch(homeAction.toggleOpen(!open))
  }

  return (
    <div>
      <Navbar />
      {/* <Button onClick={handleClick} variant="contained" >
       {open ? "Hide" : "Show"}
      </Button> */}
    </div>
  )
}

export default HomeComponent
