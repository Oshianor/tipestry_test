import React from 'react'
import Checkbox from "@material-ui/core/Checkbox";
import { useSelector } from "react-redux";

const Select = () => {
  const { open } = useSelector(({ home }) => home);

  return (
    <div>
      <Checkbox
        checked={open}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
    </div>
  );
};

export default Select
