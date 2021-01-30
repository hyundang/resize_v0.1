import style, { keyframes } from 'styled-components';
import React, { useState, useCallback, useEffect } from 'react';
// recoil
import { useRecoilState } from 'recoil';
import 
{ 
  QuestionNumberState, 
  AnswerState, 
  LoadingState,
  FirstBackImgState,
  SecondBackImgState,
  ThirdBackImgState
} 
from '../../states/atom';
// component
import FinalContainer from '../../containers/sizeTest/finalContainer';
import PageOne from '../../containers/sizeTest/PageOne';
import PageTwo from '../../containers/sizeTest/PageTwo';
import PageThree from '../../containers/sizeTest/PageThree';
import PageFour from '../../containers/sizeTest/PageFour';
import PageFive from '../../containers/sizeTest/PageFive';
import PageSix from '../../containers/sizeTest/PageSix';
import PageSeven from '../../containers/sizeTest/PageSeven';
import PageEight from '../../containers/sizeTest/PageEight';
import PageNine from '../../containers/sizeTest/PageNine';
import PageTen from '../../containers/sizeTest/PageTen';
import PageEleven from '../../containers/sizeTest/PageEleven';
import Loading from '../../containers/sizeTest/LoadingContainer';
import FirstScreen from '../../containers/sizeTest/FirstScreen';
import SecondScreen from '../../containers/sizeTest/SecondScreen';
import ThirdScreen from '../../containers/sizeTest/ThirdScreen';


const Test = ({}) => {  
  //기본 question, 정답 저장
  const [questionNumber, setQuestionNumber] = useRecoilState(QuestionNumberState);
  const [answers, setAnswers] = useRecoilState(AnswerState);
  // 결과 로딩 화면
  const [isLoading, setIsLoading] = useRecoilState(LoadingState);
  // 화면 전환 사이 화면
  const [isFirstShow, setIsFirstShow] = useRecoilState(FirstBackImgState);
  const [isSecondShow, setIsSecondShow] = useRecoilState(SecondBackImgState);
  const [isThirdShow, setIsThirdShow] = useRecoilState(ThirdBackImgState);  

  switch(questionNumber){
    case 0:
      return (
      isFirstShow ?
      <FirstScreen/>
      :<PageOne/>
      )
    case 1:
      return <PageTwo/>
    case 2:
      return <PageThree/>
    case 3:
      return <PageFour/>
    case 4:
      return <PageFive/>
    case 5:
      return <PageSix/>
    case 6:
      return (
      isSecondShow ?
      <SecondScreen/>
      :<PageSeven/>
      )
    case 7:
      return <PageEight/>
    case 8:
      return <PageNine/>
    case 9:
      return (
        isThirdShow ?
        <ThirdScreen/>
        :<PageTen/>
      )
    case 10:
      return <PageEleven/>
    default:
      return (
        <>
          {isLoading ? 
          <Loading/>
          :<FinalContainer answers={answers}/>
          }
        </>
      )
  }
}

export default Test;


