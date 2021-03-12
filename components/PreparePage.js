import React from "react";
import styled from "styled-components";
// assets
import QRcode from "../public/images/website/preparePage/QRcode.svg";

export default () => {
    return(
        <Wrap>
            <Logo url={'/images/website/preparePage/resizelogo.png'}/>
            <div style={{height:'142px'}}/>
            <TextSmall>
                나의&nbsp;
                <span style={{fontWeight:'bold'}}>체형과 취향에&nbsp;</span>
                맞는&nbsp; 
                <span style={{fontWeight:'bold'}}>상품과 코디&nbsp;</span>
                를 알고 싶다면?
            </TextSmall>
            <div style={{height:'10px'}}/>
            <TextBig>
                나에게 맞는&nbsp;
                <span style={{color:'#867561'}}>코디 큐레이션&nbsp;</span>
                받으러가기
            </TextBig>
            <div style={{height:'38px'}}/>
            <PhoneImg url={'/images/website/preparePage/iphonecuration.png'}/>
            <div style={{height:'38px'}}/>
            <div style={{
                width:'auto',
                minWidth:'480px',
                display:'flex', flexDirection:'row',
                alignItems:'flex-end', justifyContent:'space-between'
            }}>
                <QRImg src={QRcode}/>
                <div style={{width:'28px'}}/>
                <TextSmall style={{
                    fontWeight:'500',textAlign:'left'
                }}>
                    {"핸드폰으로 QR코드를 스캔해서\n모바일로 큐레이션 설문을 시작해보세요."}
                </TextSmall>
            </div>
            <div style={{height:'74px'}}/>
        </Wrap>
    )
}

const Wrap = styled.div`
    width: 100%;
    background-color: #ddc9b2;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TextBig = styled.div`
    font-size: 35px;
    @media screen and (max-width: 550px){
        font-size: 30px;
    }
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
`;

const TextSmall = styled.div`
    font-size: 19px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.2;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    white-space: pre-line;
`;

const Logo = styled.div`
    position: absolute;
    top: 3%;
    left: 4%;
    width: 278px;
    height: 46px;
    background: url(${props=>props.url}) center center / cover;
`;

const PhoneImg = styled.div`
    width: 335px;
    height: 639px;
    background: url(${props=>props.url}) center center / cover;
`;

const QRImg = styled.img`
    width: 10rem;
    height: 10rem;
    border: solid 1px black;
    /* background: url(${props=>props.url}) center center / cover; */
`;