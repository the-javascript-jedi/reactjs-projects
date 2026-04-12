import { createSlice } from "@reduxjs/toolkit";
import FeedbackData from "../../data/FeedbackData.json";

const initialState = {
  feedback: FeedbackData.feedback.map((item) => ({
    ...item,
    edit: false,
  })),
};

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    addFeedback: (state, action) => {
      state.feedback = [action.payload, ...state.feedback];
    },

    deleteFeedback: (state, action) => {
      state.feedback = state.feedback.filter(
        (item) => item.id !== action.payload,
      );
    },

    updateFeedback: (state, action) => {
      state.feedback = state.feedback.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              text: action.payload.text,
              rating: action.payload.rating,
              edit: false, // optional: reset edit flag
            }
          : item,
      );
    },
  },
});

export const { addFeedback, deleteFeedback, updateFeedback } =
  feedbackSlice.actions;

export default feedbackSlice.reducer;
