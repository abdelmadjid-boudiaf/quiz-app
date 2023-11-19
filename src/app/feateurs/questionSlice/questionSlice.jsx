import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  question_category: "",
  question_type: "",
  question_difficulty: "",
  amount_of_question: 30,
  score: 0,
  degree: "",
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    handleCategoryChange: (state, action) => {
      return {
        ...state,
        question_category: action.payload,
      };
    },
    handleDifficultyChange: (state, action) => {
      return {
        ...state,
        question_difficulty: action.payload,
      };
    },
    handleTypeChange: (state, action) => {
      return {
        ...state,
        question_type: action.payload,
      };
    },
    handleAmountChange: (state, action) => {
      return {
        ...state,
        amount_of_question: parseInt(action.payload),
      };
    },
    handleScoreChange: (state, action) => {
      return {
        ...state,
        score: parseInt(action.payload),
      };
    },
    handleDegreeChange: (state, action) => {
      return {
        ...state,
        degree: action.payload,
      }
    }
  },
});

export const {
  handleAmountChange,
  handleCategoryChange,
  handleDifficultyChange,
  handleScoreChange,
  handleTypeChange,
  handleDegreeChange,
} = questionSlice.actions;
export default questionSlice.reducer;
