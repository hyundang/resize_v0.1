import style from 'styled-components';
import React, {useState, useCallback} from 'react';
import {TestData} from '../../data/sizeTest_data';
import FinalContainer from '../../containers/sizeTest/finalContainer';

const Container = style.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(/images/sizetest/background/1_bg_blur.jpg) right top no-repeat;;
  background-size: cover;
`;

const Card = style.div`
  display: flex;
  width: 90%;
  height: 80%;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 3vw;
`;

const QSContainer = style.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const QuestionContainer = style.div`
  margin: 3vw 2vw 4vw 2vw;
  width: 90%;
  text-align:start;
`;

const QuestionN = style.div`
  color : black;
  margin: 3vw 2vw 4vw 2vw;
  width: 80%;
  font-size: 1.4rem;
  font-weight: bold;
  font-family: 'Nanum Gothic', sans-serif;
  text-shadow: 1px 1px 1px gray;
`;

const Question = style.div`
  color : white;
  margin: 3vw 2vw 4vw 2vw;
  width: 80%;
  font-size: 1.3rem;
  font-weight: bold;
  font-family: 'Nanum Gothic', sans-serif;
  text-shadow: 0.8vw 0.8vw 1vw gray;
`;

const AnswerContainer = style.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 1vw;
  margin: 2vw;
`;

const Answer = style.div`
  display: flex;
  width:100%;
  justify-content:center;
  align-items: center;
  border:1px solid black;
  border-color: white;
  border-radius: 15px;
  box-shadow: 0vw 2vw 7vw 0 rgba(98, 69, 34, 0.15);
  padding: 3vw;
  margin: 4vw 2vw;
  background-color: white;
  opacity: 0.8;
  cursor : pointer;
  &:hover{
    background-color: gray;
    border-color: gray;
  }
`;

const Text = style.div`
  justify-content:center;
  align-items: center;
  color : black;
  font-size: 0.8rem;
  font-family: 'Nanum Gothic', sans-serif;
`;

const Status = style.div`
  margin: 10px 0 5px 0;
  color : white;
  font-size: 0.8rem;
`;

export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback((e) => {
      setter(e.target.value);
  }, []);
  return [value, handler];
};

const Test = ({}) => {  
  //기본 question, 정답 저장
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = TestData;
  
  const onClickButton1 = () => {
    setQuestionNumber(questionNumber+1);
    setAnswers((prevResult) => {
      return [...prevResult, 0];
    });
  };

  const onClickButton2 = () => {
    setQuestionNumber(questionNumber+1);
    setAnswers((prevResult) => {
      return [...prevResult, 1];
    });
  };

  return (
    questions.length > 0 ? (
      questions.length == (questionNumber) ? (
        <Container><FinalContainer answers={answers}/></Container>
      ) : (
        <Container>
          <Card>
            <QuestionContainer>
              <QuestionN>Q{questionNumber+1}</QuestionN>
              <Question>{questions[questionNumber].question1}</Question>
              <Question>{questions[questionNumber].question2}</Question>
            </QuestionContainer>
            <QSContainer>
              <AnswerContainer>
                <Answer onClick = {onClickButton1}><Text>{questions[questionNumber].answers[0]}</Text></Answer>
                <Answer onClick = {onClickButton2}><Text>{questions[questionNumber].answers[1]}</Text></Answer>
              </AnswerContainer>
              <Status>Question {questionNumber+1} / Question {questions.length}</Status>
            </QSContainer>
          </Card>
        </Container>
      )
    ) : (
      <Container>Loading</Container>
    )
  )
}

export default Test;
