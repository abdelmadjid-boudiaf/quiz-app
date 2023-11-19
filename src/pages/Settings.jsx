import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React from "react";
import SelectFile from "../components/SelectFile";
import TextFieldCmp from "../components/TextFieldCmp";
import useAxios from "../hooks/useAxios";
import { useNavigate } from "react-router";
const Settings = () => {
    const navigate = useNavigate()
  const { response, error, loading } = useAxios({ url: "api_category.php" })
  if (loading) {
    return (
      <Box mt={30}>
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return (
      <Typography mt={30} color="red" variant="h6">
        Some went wrong
      </Typography>
    );
  }

  const handelSubmit = (event) => {
      event.preventDefault();
      navigate("questions")
  };
  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];
  const typeOptions = [
    { id: "multiple", name: "Multiple choice" },
    { id: "boolean", name: "True or False" },
  ];
  return (
    <div>
      <Typography variant="h2" fontWeight="bold">
        Quiz App
      </Typography>
      <form onSubmit={handelSubmit}>
        <SelectFile options={response.trivia_categories} label="Category" />
        <SelectFile options={difficultyOptions} label="Difficulty" />
        <SelectFile options={typeOptions} label="Type" />
        <TextFieldCmp />
        <Box width="100%" mt={3}>
          <Button variant="contained" fullWidth type="submit">
            Get Started
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Settings;
