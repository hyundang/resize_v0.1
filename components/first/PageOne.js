import React, { useEffect, useState } from "react";
import styled from "styled-components";
// assets
import arrow_icon from "../../public/images/website/icon/white_arrow_right.svg";


export default ({setPageNum}) => {
    const [isClicked, setIsClicked] = useState(false);
    const [isShown, setIsShown] = useState(false);
    
    useEffect(()=>{
        setTimeout(()=>{
            if(isClicked===true)
                setIsShown(true);
        }, 1000);
    }, [isClicked])

    return(
        <Wrap
            onClick={()=>setIsClicked(true)} 
            url={"/images/website/background.png"}
            isClicked={isClicked}
        >
            <div style={{height:'15rem'}}/>
            <TextOne isShown={isShown} isClicked={isClicked}>
                <div>
                    <span style={{fontWeight:'bold'}}>RE</span>
                    commend
                </div>
                <div>the perfect style</div>
                <div>
                    based on your&nbsp;
                    <span style={{fontWeight:'bold'}}>SIZE</span>
                </div>
            </TextOne>
            <div style={{height:'16rem'}}/>
            <TextTwo isShown={isShown} isClicked={isClicked}>
                <div>리사이즈에서는</div>
                <div>고객님의 체형과 취향을 기반으로,</div>
                <div>꼭 맞는 상품과 코디를 1:1로 추천해드려요.</div>
            </TextTwo>
            <SmallText>당신의 체형과 취향에 맞는 퍼스널 패션 큐레이션</SmallText>
            <TextOne isClicked={isClicked} 
                style={
                    {width:'auto',top:'90%',left:'50%',
                    transform:'translate(-50%, 0)',
                    fontSize:'1.8rem', fontWeight:'500'
            }}>
                <div>탭하여 계속하기</div>
            </TextOne>
            <Btn isShown={isShown} isClicked={isClicked} onClick={()=>setPageNum(1)}>
                스타일링룸 입장하기
                <IconImg src={arrow_icon}/>
            </Btn>
        </Wrap>
    )
}

const Wrap = styled.div`
    /* position: absolute; */
    width: 100vw;
    height: 100vh;
    background: url(${props=>props.url}) center center / cover;
    background-position: ${props=>props.isClicked? 'right' : 'left'};
    transition-duration: 1s;
`;


const TextOne = styled.div`
    width: 32rem;
    position: absolute;
    /* top: 18%; */
    left: 5%;
    color: white;
    font-size: 3.45rem;
    font-weight: 300;
    text-align: left;
    display: ${props=>props.isShown? 'none' : 'box'};
    opacity: ${props=>props.isClicked? 0 : 1 };   
    transition-property: opacity;
    transition-duration: 1s;
`;

const TextTwo = styled.div`
    width: 32rem;
    position: absolute;
    top: 23%;
    left: 5%;
    color: white;
    font-size: 1.75rem;
    font-weight: bold;
    line-height: 2.3;
    text-align: left;
    display: ${props=>props.isClicked? 'box' : 'none'};   
    opacity: ${props=>props.isShown? 1 : 0 };   
    transition-property: opacity;
    transition-duration: 1s;
`;

const SmallText = styled.div`
    position: absolute;
    /* top: 40%; */
    left: 5%;
    width: 32rem;
    color: white;
    font-size: 1.55rem;
    font-weight: normal;
    text-align: left;
`;

const Btn = styled.div`
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 25.4rem;
    height: 6rem;
    padding: 1.8rem 2rem 1.8rem 3.5rem;
    border-radius: 0.4rem;
    background-color: ${({theme})=>theme.colors.black};
    opacity: ${props=>props.isShown? 1 : 0 };   
    transition-property: opacity;
    transition-duration: 1s;
    display: ${props=>props.isClicked? 'flex' : 'none'};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-size: 1.9rem;
    font-weight: bold;
    line-height: 4.5;
    letter-spacing: -0.05rem;
    text-align: center;
`;

const IconImg = styled.img`
    width: 4rem;
    height: 4rem;
`;