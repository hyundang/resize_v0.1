import React from "react";
import styled from 'styled-components';
// router
import { useRouter } from "next/router";
// recoil
import { useRecoilValue } from "recoil";
import { KategorieState } from "../states/website_atom";


// lastQuesNum: 질문 총 개수
// quesNum: 현재 질문 넘버
// kategorie: 스타일/체형/코디/마무리
export default ({kategorie, quesNum, lastQuesNum}) => {
    const router = useRouter();
    const maxKategorie = useRecoilValue(KategorieState);
    
    const handleClick = (e) => {
        if(e.target.id <= maxKategorie){
            console.log(e.target.id)
            switch (Number(e.target.id)) {
                case 0:
                    router.push('/website_dev/style')
                    break;
                case 1:
                    router.push('/website_dev/size')
                    break;
                case 2:
                    router.push('/website_dev/cody')
                    break;
                case 3:
                    router.push('/website_dev/last')
                    break;
                default:
                    break;
            }
        }
    }

    return(
        <Wrap>
            <TypeWrap>
                <TypeText 
                    onClick={handleClick} 
                    id={0}
                    num={0} kategorie={kategorie}
                >스타일분석</TypeText>
                <TypeText
                    onClick={handleClick}  
                    id={1}
                    num={1} kategorie={kategorie}
                >체형분석</TypeText>
                <TypeText 
                    onClick={handleClick} 
                    id={2}
                    num={2} kategorie={kategorie}
                >코디요청</TypeText>
                <TypeText
                    onClick={handleClick} 
                    id={3} 
                    num={3} kategorie={kategorie}
                >마무리</TypeText>
            </TypeWrap>
            <BarWrap>
                <Bar quesNum={quesNum} lastQuesNum={lastQuesNum}/>
            </BarWrap>
        </Wrap>
    )
}

const Wrap = styled.div`
    position: fixed;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: first baseline;
    background-color: white;
    box-shadow: 0 0 1rem 1rem rgba(255,255,255,1); 
`;

const TypeWrap = styled.div`
    width: 100%;
    height: 2.3rem;
    margin-top: 2.4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

const TypeText = styled.div`
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    font-weight: normal;
    letter-spacing: -0.35px;
    color: ${props=> (props.num === props.kategorie)? ({theme})=>theme.colors.pale_brown : '#e8d7c1'}; 
    font-weight: ${props=> (props.num === props.kategorie)? '900' : '500'};
`;

const BarWrap = styled.div`
    position: relative;
    margin-top: 2.4rem;
    width: 96vw;
    height: 0.7rem;
    border-radius: 0.5rem;
    background-color: #e6e6e6;
`;

const Bar = styled.div`
    position: relative;
    left: 0;
    z-index: 2;
    width: ${props=>(96/props.lastQuesNum)*props.quesNum}vw;
    height: 0.7rem;
    border-radius: 0.5rem;
    background-color: ${({theme}) => theme.colors.pale_brown};
`;