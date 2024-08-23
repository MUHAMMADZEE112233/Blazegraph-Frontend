import React from "react";
import TextField from "@mui/material/TextField";

const CustomTextInput = ({ label, value, onChange, ...props }) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      fullWidth
      variant="outlined"
      {...props}
    />
  );
};

export default CustomTextInput;
