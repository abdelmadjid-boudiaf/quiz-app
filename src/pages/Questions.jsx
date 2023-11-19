import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  handleDegreeChange,
  handleScoreChange,
} from "../app/feateurs/questionSlice/questionSlice";
import { decode } from "html-entities";

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const Questions = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answerOptions, setAnswerOptions] = useState([]);
  const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_question,
    score,
  } = useSelector((state) => state.questionSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let apiUrl = `api.php?amount=${amount_of_question}`;
  if (question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`);
  }
  if (question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
  }
  if (question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`);
  }
  const { response, loading, error } = useAxios({ url: apiUrl });
  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomNumber(question.incorrect_answers.length + 1),
        0,
        question.correct_answer
      );
      setAnswerOptions(answers);
    }
  }, [response, questionIndex]);
  if (loading) {
    return (
      <Box mt={30}>
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return <Box mt={30}>Something get wrong</Box>;
  }
  const handleAnswer = (e) => {
    const question = response.results[questionIndex];
    if (e.target.textContent === question.correct_answer) {
      dispatch(handleScoreChange(score + 1));
      if (score >= response.results.length / 2) {
        dispatch(handleDegreeChange("😍 Perfect, good job keep going"));
      } else {
        dispatch(handleDegreeChange("☹️ try your best next time"));
      }
    }

    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate("/score");
    }
  };
  const answersItems = answerOptions?.map((answer) => {
    return (
      <Box mt={2} key={answer}>
        <Button onClick={handleAnswer} variant="contained">
          {decode(answer)}
        </Button>
      </Box>
    );
  });

  return (
    <Box>
      <Typography variant="h4">Question {questionIndex + 1}</Typography>
      <Typography mt={5}>
        {decode(response?.results[questionIndex].question)}
      </Typography>
      {answersItems}
      <Box mt={5}>
        Score: {score}/ {response.results.length}
      </Box>
    </Box>
  );
};

export default Questions;
