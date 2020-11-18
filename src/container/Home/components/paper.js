import React from 'react'
import TextField from "@material-ui/core/TextField";
import Select from './Select';
import { useSelector } from "react-redux";


const Paper = () => {
  const { open } = useSelector(({ home }) => home);

  return (
    <div>
      {open && (
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      )}
      <Select />
    </div>
  );
}

export default Paper
