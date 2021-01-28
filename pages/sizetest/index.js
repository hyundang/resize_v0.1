import style from 'styled-components';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Container = style.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
`;
const TitleContainer = style.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Title = style.div`
  width: 80%
  justify-content: start;
  align-items: start;
  margin:1vw;
  color : black;
  font-size: 1.5rem;
  font-family: 'Nanum Gothic', sans-serif;
`;
const DesBC = style.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;
const DesContainer = style.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Des = style.div`
  color : black;
  padding: 1vw;
  font-size: 0.9rem;
  font-family: 'Nanum Gothic', sans-serif;
`;

const Button = style.div`
  width: 270px;
  height: 50px;
  margin-top: 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  box-shadow: 0vw 2vw 5vw 0 rgba(98, 69, 34, 0.4);
  border-radius: 5px;
  cursor : pointer;
`;

const Text = style.div`
  color : #fff;
  font-size: 1rem;
  font-family: 'Nanum Gothic', sans-serif;
`;

const Start = ({}) => {

  return (
    <Container>
      <TitleContainer>
        <Title>체형 유형 테스트</Title>
        <Des>나와 비슷한 체형을 가진 동물이 존재한다구?</Des>
        <Des>나도 몰랐던 체형유형과 이에 맞는 코디 추천까지!</Des>
      </TitleContainer>
      <DesBC>
        <Link href="/sizetest/test">
          <Button>
            <Text>시작하기</Text>
          </Button>
        </Link>
      </DesBC>
    </Container>
  );
}

export default Start;
