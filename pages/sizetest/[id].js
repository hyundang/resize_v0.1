import style from 'styled-components';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {sizeTest_final} from '../../data/sizeTest_final_data.js';

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
      </Container>
    </>
  );
}

export default Final;
