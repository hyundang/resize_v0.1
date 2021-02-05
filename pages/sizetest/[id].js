import style from 'styled-components';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
// recoil
import { useRecoilState } from "recoil";
import { ToastMsgState, IsClipState } from "../../states/atom";
// component
import Image from 'next/image';
import {sizeTest_final} from '../../data/sizeTest_final_data.js';
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

const Final = ({}) => {
  const router = useRouter();
  const {id} = router.query;
  const url = '/images/sizetest/character/'+id+'.png';
  const sizeID = parseInt(searchID(id));
  const data = sizeTest_final;

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
    <>
      <Container>
        <LogoContainer><Image src={'/images/resize_white.png'} width="160" height="50" /></LogoContainer>
        <TitleContainer>
          <Title>{data[sizeID].title}</Title>
          <Image src= {url} width="280" height="280"/>
          <Title>{data[sizeID].subtitle}</Title>
        </TitleContainer>
        <Des>{data[sizeID].description}</Des>
        <Des2>고객님께 어울리는 코디를 추천해드릴까요?</Des2>
        <Button>
            <Text>내 체형에 맞는 무료 코디 스타일링 받아보기 </Text>
        </Button>
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
    </>
  );
}

export default Final;

const Container = style.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width:100%;
  height:100%;
  background-color: #f3ece3;
  font-family: 'Nanum Gothic', sans-serif;
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

const Button = style.div`
  width: 85%;
  height: 15vw;
  margin: 5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #dec19f;
  box-shadow: 0vw 2vw 5vw 0 rgba(98, 69, 34, 0.4);
  border-radius: 5px;
  cursor : pointer;
`;

const Text = style.div`
  color : #fff;
  font-size: 0.9rem;
  font-weight: bold;
`;

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