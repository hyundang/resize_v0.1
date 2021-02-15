import style from 'styled-components';
import React, {useState, useCallback} from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
// recoil
import { useRecoilState } from "recoil";
import { ToastMsgState, IsClipState } from "../../states/atom";
// component
import {sizeTest_final} from '../../data/sizeTest_final_data.js';

import axios from "axios";
import Layout from '../../containers/common/Layout';
// for clipboard
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ToastMsg from '../../containers/common/ToastMsg';
// asset
const clip = "/images/sizetest/clip.svg";
const baseurl = "https://www.resize.com";

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
    else {
      axios.post(`https://test.re-size.co.kr/sizetest/sizetestemail/`, result)
          .catch((error) => {
            if(error.response) {
              console.log(error.response);
            }
            console.log("Problem submitting New Post", error);
          });
      console.log('finished');
      alert('제출되었습니다');
    }
  };

  const [isClip, setIsClip] = useRecoilState(IsClipState);
  const [isToastMsgShow, setIsToastMsgShow] = useRecoilState(ToastMsgState);

  const onCopy = () => {
    ({ copied: true });
  };

  const handleClipClick = () => {
    setIsToastMsgShow(true);
    setIsClip(true);
  }

  const handleKtalckClick = () => {
    setIsToastMsgShow(true);
    setIsClip(false);
    console.log("hi");
  }

  return (
    <PCContainer>
      <Container>
        <LogoContainer><Image src={'/images/resize_white.png'} width="160" height="50" /></LogoContainer>
        <TitleContainer>
          <Title>{data[sizeID].title}</Title>
          <Image src= {url} width="280" height="280"/>
          <Title>{data[sizeID].subtitle}</Title>
        </TitleContainer>
        <Hash>{data[sizeID].hashtag}</Hash>
        <Des>{data[sizeID].description}</Des>
        <Des2>리사이즈에서 3월 론칭 예정인<Bold>"고객님만을 위한 1:1 퍼스널 패션 큐레이션 서비스"</Bold>를 무료로 이용하고 싶으시다면,고객님 이메일을 적어주세요! 적어주신 이메일로 리사이즈 1:1 퍼스널 큐레이션 서비스 이용권을 드립니다.</Des2>
        <IntroTitle>1:1 퍼스널 패션 큐레이션 서비스 이용권 받기</IntroTitle>
        <EmailContainer>
            <input type="text" style ={{border: '1px solid #dec19f', borderColor: '#dec19f', width: '80%', padding: '10px 0'}} value={email} required onChange={onChangeEmail} placeholder="무료 이용권을 받을 이메일을 입력해주세요.">
            </input>
          <Submit type="submit" onClick = {onFinish} value="Submit"><Text>제출</Text></Submit>
          {emailError && <Status> 올바른 이메일을 입력해주세요. </Status> }
        </EmailContainer>
        <BottomWrap>
          <CopyToClipboard text={baseurl+`/sizetest/${id}`} onCopy={onCopy}>
            <ShareBtnWrap onClick={handleClipClick}>
              <IconImg src={clip}/>
            </ShareBtnWrap>
          </CopyToClipboard>
          <Layout imgurl={url} onClick={handleKtalckClick}/>
        </BottomWrap>
        {isToastMsgShow && <ToastMsg text={isClip ? "복사되었습니다." : "공유되었습니다."}/>}
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 26px 0 0 0;
  @media (max-width: 500px) {
    padding: 5vw 0 2vw 0;
  }
`;

const Title = style.div`
  font-size:16px;
  @media (max-width: 500px) {
    font-size:1rem;
  }
  font-weight: bold;
  width:90%;
  text-align:center;
`;

const Hash = style.div`
  text-align:center;
  font-size:16px;
  width:80%;
  color: gray;
  line-height: 16px;
  padding: 16px 0 6px 0;
  @media (max-width: 500px) {
    font-size:0.9rem;
    line-height: 1.1rem;
    padding: 1vw 0 2vw 0;
  }
`;

const Des = style.div`
  font-size:13px;
  width:80%;
  line-height: 20px;
  padding: 10px 0 20px 0;
  @media (max-width: 500px) {
    font-size:0.8rem;
    line-height: 1.2rem;
    padding: 1vw 0 5vw 0;
  }
`;

const Des2 = style.div`
  font-size:12px;
  width:80%;
  line-height: 20px;
  padding: 10px 14px 10px 14px;
  @media (max-width: 500px) {
    font-size:0.75rem;
    line-height: 1.2rem;
    padding: 2.5vw 3vw 2.5vw 3vw;
  }
  text-align:center;
  color: white;
  background-color: #dec19f;
  border:1px solid black;
  border-color: #dec19f;
  border-radius: 5px;
`;

const Bold = style.div`
  font-weight: bold;
`;

const Text = style.div`
  color : #fff;
  font-size: 14px;
  @media (max-width: 500px) {
    font-size: 0.9rem;
  }
  font-weight: bold;
`;
const IntroTitle = style.div`
  font-size: 16px;
  font-weight: bold;
  padding: 30px 0 0 0 ;
`;

const EmailContainer = style.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  font-size: 14px;
  width: 80%;
  padding: 8px 0 0 0;
  @media (max-width: 500px) {
    padding: 1vw 0 0 0;
    font-size: 0.9rem;
  }
`;


const Submit = style.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  border:1px solid black;
  border-color: #dec19f;
  border-radius: 5px;
  box-shadow: 0vw 2vw 7vw 0 rgba(98, 69, 34, 0.15);
  padding:  10px 0 ;
  margin: 18px 10px;
  @media (max-width: 500px) {
    padding: 2vw 0;
    margin: 2vw 1vw;
  }
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
`

const BottomWrap = style.div`
  box-sizing: border-box;
  width: 100%;
  height: 5rem;
  padding: 0rem 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ShareBtnWrap = style.div`
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: #a0a0a0;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  box-shadow: 0vw 2vw 5vw 0 rgba(0, 0, 0, 0.4);
`;

const IconImg = style.img`
  width: 2rem;
  height: 2rem;
`;