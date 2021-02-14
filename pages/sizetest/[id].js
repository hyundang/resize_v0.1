import style from 'styled-components';
import React, {useState, useCallback} from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {sizeTest_final} from '../../data/sizeTest_final_data.js';

import axios from "axios";

export function searchID(id) {
    var sizeID = 0;
    switch(id){
        case 'NTSU':
            sizeID = 0;
            break;
        case 'NTSM':
            sizeID = 1;
            break;
        case 'NTBU':
            sizeID = 2;
            break;
        case 'NTBM':
            sizeID = 3;
            break;
        case 'NCSU':
            sizeID = 4;
        case 'NCSM':
            sizeID = 5;
            break;
        case 'NCBU':
            sizeID = 6;
            break;
        case 'NCBM':
            sizeID = 7;
            break;
        case 'WTSU':
            sizeID = 8;
            break;
        case 'WTSM':
            sizeID = 9;
            break;
        case 'WTBU':
            sizeID = 10;
            break;
        case 'WTBM':
            sizeID = 11;
            break;
        case 'WCSU':
            sizeID = 12;
            break;
        case 'WCSM':
            sizeID = 13;
            break;
        case 'WCBU':
            sizeID = 14;
            break;
        case 'WCBM':
            sizeID = 15;
            break;
        default:
            break;
    }
    return sizeID;
}

export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback((e) => {
      setter(e.target.value);
  }, []);
  return [value, handler];
};

const Final = ({}) => {
  const [email, onChangeEmail] = useInput('');
  const [emailError, setEmailError] = useState(false);
  const router = useRouter();
  const {id} = router.query;
  const url = '/images/sizetest/character/'+id+'.png';
  const sizeID = parseInt(searchID(id));
  const data = sizeTest_final;
  const result = {
    gender : 0,
    height: 1,
    weight: 1,
    answers: 0,
    mySize : id,
    email: email,
  }

  const onFinish = () => {
    setEmailError(false);
    if (email.indexOf('@')== -1) setEmailError(true);
    else if (email.indexOf('.')== -1) setEmailError(true);
    else (console.log(email));
    axios.post(`https://test.re-size.co.kr/sizetest/sizetestemail/`, result)
          .catch((error) => {
            if(error.response) {
              console.log(error.response);
            }
            console.log("Problem submitting New Post", error);
          });
    console.log('finished');
  };

  return (
    <PCContainer>
      <Container>
        <LogoContainer><Image src={'/images/resize_white.png'} width="160" height="50" /></LogoContainer>
        <TitleContainer>
          <Title>{data[sizeID].title}</Title>
          <Image src= {url} width="280" height="280"/>
          <Title>{data[sizeID].subtitle}</Title>
        </TitleContainer>
        <Des>{data[sizeID].description}</Des>
        <Des2>고객님께 어울리는 코디를 추천해드릴까요?</Des2>
        <Des2>1:1 코디 스타일링 무료쿠폰 받기</Des2>
        <input type="text" style ={{border: '2px solid #dec19f', borderColor: '#dec19f', width: '70%'}} value={email} required onChange={onChangeEmail}>
        </input>
        <Submit type="submit" onClick = {onFinish} value="Submit"><Text>제출하기</Text></Submit>
        {emailError && <Status> 올바른 이메일을 입력해주세요. </Status> }
      </Container>
    </PCContainer>
  );
}

export default Final;

const PCContainer = style.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items:start;
  background-color: #f6f2eb;
`

const Container = style.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width:500px;
  height:100%;
  background-color: #f3ece3;
  font-family: 'Nanum Gothic', sans-serif;
  border:1px solid black;
  border-color: #a99174;
  border-radius: 5px;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const LogoContainer = style.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width:100%;
  background-color: #a99174;
  padding : 1vw;
`;

const TitleContainer = style.div`
  padding: 4vw 0 5vw 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = style.div`
  font-size:1rem;
  font-weight: bold;
  width:90%;
  text-align:center;
`;

const Des = style.div`
  padding: 3vw 0 5vw 0;
  font-size:0.8rem;
  width:80%;
  line-height: 1.2rem;
`;

const Des2 = style.div`
  padding: 3vw;
  font-size:0.9rem;
  font-weight:bold;
  text-align:center;
  width:90%;
`;

const Text = style.div`
  color : #fff;
  font-size: 0.9rem;
  font-weight: bold;
`;

const Submit = style.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  border:1px solid black;
  border-color: #dec19f;
  border-radius: 5px;
  box-shadow: 0vw 2vw 7vw 0 rgba(98, 69, 34, 0.15);
  padding: 1vw;
  margin: 2vw;
  background-color: #dec19f;
  cursor : pointer;
  &:hover{
    background-color: #a99174;
    border-color: #a99174;
  }
`;

const Status = style.div`
  margin: 10px 0 5px 0;
  color : #a99174;
  font-size: 0.8rem;
`;