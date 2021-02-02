import style from 'styled-components';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Container = style.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const LogoContainer = style.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width:100%;
  background-color: #a99174;
  padding : 1vw;
`;

const ImageContainer = style.div`
  padding: 15vw 5vw 10vw 5vw;
`;

const DesBC = style.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 5vw 0;
`;

const Button = style.div`
  width: 270px;
  height: 50px;
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
  font-size: 1.1rem;
  font-family: 'Nanum Gothic', sans-serif;
`;

const Start = ({}) => {

  return (
    <Container>
      <LogoContainer><Image src={'/images/resize_white.png'} width="160" height="50" /></LogoContainer>
      <ImageContainer>
        <Image src={'/images/sizetest/title.png'} width="500" height="500" />
      </ImageContainer>
      <DesBC>
        <Link href="/sizetest/test">
          <Button>
            <Text>G O</Text>
          </Button>
        </Link>
      </DesBC>
    </Container>
  );
}

export default Start;
