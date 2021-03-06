import style from 'styled-components';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Start = ({}) => {

  return (
    <PCContainer>
      <Container>
        <LogoContainer><Image src={'/images/resize_white.png'} width="160" height="50" /></LogoContainer>
        <ImageContainer>
          <Image src={'/images/sizetest/title.png'} width="500" height="500" />
        </ImageContainer>
        <DesBC>
          <Link href="/sizetest/test">
            <Button>
              <Text>μμνκΈ°</Text>
            </Button>
          </Link>
        </DesBC>
      </Container>
    </PCContainer>
  );
}

export default Start;

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
  position: absolute;
  width: 500px;
  height: 100%;
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

const ImageContainer = style.div`
  padding: 10px 5vw 0 5vw;
`;

const DesBC = style.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 0 0 5px 0;
  @media (max-width: 500px) {
    padding: 0 0 5px 0;
  }
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
  margin : 0 0 10px 0;
`;

const Text = style.div`
  color : #fff;
  font-size: 15px;
  font-family: 'Nanum Gothic', sans-serif;
`;
