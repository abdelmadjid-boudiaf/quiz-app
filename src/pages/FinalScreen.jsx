import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { handleDegreeChange, handleScoreChange } from "../app/feateurs/questionSlice/questionSlice";

const FinalScreen = () => {
  const { score, degree } = useSelector((state) => state.questionSlice);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleBackToSetting = () => {
    dispatch(handleScoreChange(0))
    dispatch(handleDegreeChange(""))
    navigate('/')
  }
  // finalScreen
  return (
    <Box mt={30}>
      <Typography fontWeight="bold" mb={3} variant="h3" color={"green"}>
        Final Score: {score}
      </Typography>
      <Typography mb={3} variant="h5" color='blueViolet'>{degree}</Typography>
      <Button onClick={handleBackToSetting} variant="outline">
        Back to Settings!
      </Button>
    </Box>
  );
};

export default FinalScreen;
