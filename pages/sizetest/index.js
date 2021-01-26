import style from 'styled-components';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

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
  background-size: cover;
  background-blend-mode: luminosity;
`;


const Button = style.div`
  width: 270px;
  height: 50px;
  marin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dec19f;
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
      <Image src="/images/resizeBigLogo.png" width="250" height='250'/>
      <Link href="/sizetest/test">
        <Button>
          <Text>시작하기</Text>
        </Button>
      </Link>
    </Container>
  );
}

export default Start;
