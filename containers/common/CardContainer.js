import style, {keyframes} from 'styled-components';
import React, {useState, useCallback, useEffect} from 'react';
// recoil
import {useRecoilState} from 'recoil';
import {QuestionNumberState, AnswerState} from '../../states/atom';
// test data
import {TestData} from '../../data/sizeTest_data';


const CardContainer = ({isShow}) => {  
  //기본 question, 정답 저장
  const [questionNumber, setQuestionNumber] = useRecoilState(QuestionNumberState);
  const [answers, setAnswers] = useRecoilState(AnswerState);

  const questions = TestData;
  
  const onClickButton1 = () => {
    setQuestionNumber(questionNumber+1);
    setAnswers(answers.concat([0]))
  };

  const onClickButton2 = () => {
    setQuestionNumber(questionNumber+1);
    setAnswers(answers.concat([1]));
  };
  

  return (
    <Container path={questions[questionNumber].photo}>
        <Card>
        <QuestionContainer>
            <QuestionN>Q{questionNumber+1}</QuestionN>
            <QuestionOne>{questions[questionNumber].question1}</QuestionOne>
            <QuestionTwo>{questions[questionNumber].question2}</QuestionTwo>
        </QuestionContainer>
        <QSContainer>
            {/* {isShow&& */}
            <AnswerContainer>
            <Answer onClick = {onClickButton1} isShow={isShow}><Text>{questions[questionNumber].answers[0]}</Text></Answer>
            <Answer onClick = {onClickButton2} isShow={isShow}><Text>{questions[questionNumber].answers[1]}</Text></Answer>
            </AnswerContainer>
            
            <Status>Question {questionNumber+1} / Question {questions.length}</Status>
        </QSContainer>
        </Card>
    </Container>
  )
}

export default CardContainer;


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
  background: url(/images/sizetest/background/${props=>props.path}) right top no-repeat;
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

const fadein = keyframes`
  0% {
    opacity: 0;
  }
  50%{
    opacity: 0;
  }
  70%{
    opacity: 1;
  }
  100%{
    opacity: 1;
  }
`;

const QuestionN = style.div`  
  position: absolute;
  top: 16%;
  color : black;
  margin: 3vw 2vw 4vw 2vw;
  width: 80%;
  font-size: 1.4rem;
  font-weight: bold;
  font-family: 'Nanum Gothic', sans-serif;
  text-shadow: 1px 1px 1px gray;
  animation: ${fadein} 1s;
`;


const QuestionOne = style.div`
  position: absolute;
  top: 22%;
  color : white;
  margin: 3vw 2vw 4vw 2vw;
  width: 80%;
  font-size: 1.3rem;
  font-weight: bold;
  font-family: 'Nanum Gothic', sans-serif;
  text-shadow: 0.8vw 0.8vw 1vw gray;
  animation: ${fadein} 2s;
`;

const QuestionTwo = style.div`
  position: absolute;
  top: 28%;
  color : white;
  margin: 3vw 2vw 4vw 2vw;
  width: 80%;
  font-size: 1.3rem;
  font-weight: bold;
  font-family: 'Nanum Gothic', sans-serif;
  text-shadow: 0.8vw 0.8vw 1vw gray;
  animation: ${fadein} 3s;
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
  cursor : pointer;
  &:hover{
    background-color: gray;
    border-color: gray;
  }
  opacity: ${props=>props.isShow ? '0.8' : '0'};
  transition-duration: 0.5s;
  pointer-events: ${props=>props.isShow ? 'auto' : 'none'};
`;

const Text = style.div`
  cursor: pointer;
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
  position: absolute;
  bottom: 10%;
`;