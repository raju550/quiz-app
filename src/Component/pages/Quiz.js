import React, { useState, useReducer, useEffect } from "react";
import { useParams } from "react-router";
import useQuestion from "../../Hooks/useQuestion";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";
import _ from "lodash";
import { flushSync } from "react-dom";

const initialState = null;
const reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked =
        action.value;

    default:
      return state;
  }
};
export default function Quiz() {
  const { id } = useParams();
  const { loading, error, questions } = useQuestion(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [qna, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);
  function handleAnswerChange(e, index) {
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.value,
    });
  }
  return (
    <>
      <h1>{qna[currentQuestion].title}</h1>
      <h4>Question can have multiple answer</h4>
      <Answers
        options={qna[currentQuestion].options}
        handleChange={handleAnswerChange}
      ></Answers>
      <ProgressBar></ProgressBar>
      <MiniPlayer></MiniPlayer>
    </>
  );
}
