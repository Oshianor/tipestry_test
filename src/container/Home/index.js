import { Button } from '@material-ui/core';
import React from 'react';
import Paper from './components/paper';
import { useDispatch, useSelector } from "react-redux";
import { homeAction } from "../../store/actions"

const HomeComponent = () => {
  const dispatch = useDispatch();
  const { open } = useSelector(({ home }) => home);

  const handleClick = () => {
    dispatch(homeAction.toggleOpen(!open));
  }

  return (
    <div>
      <Paper />
      <Button onClick={handleClick} variant="contained" >
       {open ? "Hide" : "Show"}
      </Button>
    </div>
  )
}

export default HomeComponent
