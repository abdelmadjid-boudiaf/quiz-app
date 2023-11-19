import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  handleCategoryChange,
  handleDifficultyChange,
  handleTypeChange,
} from "../app/feateurs/questionSlice/questionSlice";

const SelectFile = (props) => {
  const { label, options } = props;
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
    switch (label) {
      case "Category":
            dispatch(handleCategoryChange(event.target.value));
        break;
      case "Difficulty":
        dispatch(handleDifficultyChange(event.target.value));
        break;
      case "Type":
        dispatch(handleTypeChange(event.target.value));
            break;
        default:
            return;
    }
  };
  const items = options.map(({ id, name }) => (
    <MenuItem value={id} key={id}>
      {name}
    </MenuItem>
  ));
  return (
    <Box width="100%" mt={3}>
      <FormControl fullWidth size="small">
        <InputLabel>{label}</InputLabel>
        <Select value={value} label={label} onChange={handleChange}>
          {items}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectFile;
