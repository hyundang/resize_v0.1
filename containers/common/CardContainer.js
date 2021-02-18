import style, {keyframes} from 'styled-components';
import React, {useState, useCallback, useEffect} from 'react';
// recoil
import {useRecoilState} from 'recoil';
import {QuestionNumberState, AnswerState} from '../../states/atom';
// test data
import {TestData} from '../../data/sizeTest_data';
import Router from 'next/router';


const CardContainer = ({isShow}) => {  
  //기본 question, 정답 저장
  const [questionNumber, setQuestionNumber] = useRecoilState(QuestionNumberState);
  const [answers, setAnswers] = useRecoilState(AnswerState);

  const questions = TestData;
  
  function getMySize() {
    var size = '';
    if ((answers[4] + answers[6] + answers[9])>1) size += 'W';
    else size += 'N';
    if ((answers[0] + answers[2] + answers[10])>1) size += 'T';
    else size += 'C';
    if (answers[1] == 1) size += 'S';
    else size += 'B';
    if ((answers[3] + answers[5] + answers[8])>1) size += 'M';
    else size += 'U';
  
    return size;
  }

  const onClickButton1 = () => {
    setQuestionNumber(questionNumber+1);
    setAnswers(answers.concat([0]));
    if (questions.length-1 == (questionNumber)) {
      const size = getMySize();
      Router.push('/sizetest/'+size);
    }
  };

  const onClickButton2 = () => {
    setQuestionNumber(questionNumber+1);
    setAnswers(answers.concat([1]));
    if (questions.length-1 == (questionNumber)) {
      const size = getMySize();
      Router.push('/sizetest/'+size);
    }
  };
  

  return (
    <PCContainer>
      <Container path={questions[questionNumber].photo}>
          <Card>
          <QuestionContainer>
              <QuestionN>Q{questionNumber+1}.</QuestionN>
              <QuestionOne>{questions[questionNumber].question1}</QuestionOne>
              <QuestionTwo>{questions[questionNumber].question2}</QuestionTwo>
          </QuestionContainer>
          <QSContainer>
              {/* {isShow&& */}
              <AnswerContainer>
              <Answer onClick = {onClickButton1} isShow={isShow}><Text>{questions[questionNumber].answers[0]}</Text></Answer>
              <Answer onClick = {onClickButton2} isShow={isShow}><Text>{questions[questionNumber].answers[1]}</Text></Answer>
              </AnswerContainer>
              <StatusContainer isShow={isShow}><StatusBar completed = {questionNumber/questions.length *100}></StatusBar></StatusContainer>
              <Status isShow={isShow}>Question {questionNumber+1} / Question {questions.length}</Status>
          </QSContainer>
          </Card>
      </Container>
    </PCContainer>
  )
}

export default CardContainer;

const PCContainer = style.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items:start;
  background-color: #f6f2eb;
`

const Container = style.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 500px;
  height: 100%;
  background: url(/images/sizetest/background/${props=>props.path}) right top no-repeat;
  background-size: cover;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Card = style.div`
  display: flex;
  width: 90%;
  height: 90%;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 18px;
  @media (max-width: 500px) {
    padding: 3vw;
    height: 90%;
  }
`;

const QSContainer = style.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const QuestionContainer = style.div`
  margin: 10px 10px;
  @media (max-width: 500px) {
    margin: 3vw 2vw 4vw 2vw;
  }
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
  color : white;
  width: 80%;
  margin: 10px 10px 40px 10px;
  font-size: 30px;
  font-weight: 200;
  @media (max-width: 500px) {
    margin: 3vw 2vw 6vw 2vw;
    font-size: 30px;
  }
  font-family: 'Noto Serif KR', serif;
  animation: ${fadein} 1s;
`;


const QuestionOne = style.div`
  position: absolute;
  top: 22%;
  color : white;
  width: 80%;
  margin: 30px 10px 0 10px;
  font-size: 20px;
  @media (max-width: 500px) {
    margin: 10vw 2vw 4vw 2vw;
    font-size: 20px;
  }
  font-weight: 500;
  font-family: 'Noto Serif KR', serif;
  animation: ${fadein} 2s;
`;

const QuestionTwo = style.div`
  position: absolute;
  top: 28%;
  color : white;
  width: 80%;
  margin: 30px 10px;
  font-size: 20px;
  @media (max-width: 500px) {
    margin: 10vw 2vw 4vw 2vw;
    font-size: 20px;
  }
  font-weight: 500;
  font-family: 'Noto Serif KR', serif;
  animation: ${fadein} 3s;
`;

const AnswerContainer = style.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 8px;
  @media (max-width: 500px) {
    padding: 1vw;
    margin: 2vw;
  }
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
  padding: 16px;
  margin: 18px;
  @media (max-width: 500px) {
    padding: 3vw;
    margin: 4vw 2vw;
  }
  background-color: white;
  cursor : pointer;
  &:hover{
    background-color: gray;
    border-color: gray;
  }
  opacity: ${props=>props.isShow ? '0.7' : '0'};
  transition-duration: 0.5s;
  pointer-events: ${props=>props.isShow ? 'auto' : 'none'};
`;

const Text = style.div`
  cursor: pointer;
  justify-content:center;
  align-items: center;
  color : black;
  font-size: 16px;
  @media (max-width: 500px) {
    font-size: 14px;
  }
  font-family: 'Noto Serif KR', serif;
`;

const Status = style.div`
  width: 100%;
  margin: 10px 0 5px 0;
  color : white;
  font-size: 12px;
  @media (max-width: 500px) {
    font-size: 12px;
  }
  text-align: end;
  opacity: ${props=>props.isShow ? '0.8' : '0'};
  transition-duration: 0.5s;
  pointer-events: ${props=>props.isShow ? 'auto' : 'none'};
`;

const StatusContainer = style.div`
  margin: 58px 0 0 0;
  height: 10px;
  @media (max-width: 500px) {
    margin: 10vw 0 0 0 ;
    height: 2vw;
  }
  width: 100%;
  background-color: white;
  border:0.3px solid black;
  border-color: white;
  border-radius: 30px;
  box-shadow: 0vw 2vw 7vw 0.3 rgba(98, 69, 34, 0.15);
  opacity: ${props=>props.isShow ? '0.4' : '0'};
  transition-duration: 0.5s;
  pointer-events: ${props=>props.isShow ? 'auto' : 'none'};
`;

const StatusBar = style.div`
  height: 100%;
  width: ${props=>props.completed}%;
  background-color: #dec19f ;
  border-radius: 30px;
`;
