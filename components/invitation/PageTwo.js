import React, { useEffect, useState } from "react";
import styled from 'styled-components';
// assets
import phone_icon from '../../public/images/website/invitation/call.svg';

export default () => {
    return(
        <>
        <About>
            <div style={{height:'7.9rem'}}/>
            <Text style={{height:'4rem',color:'#f4f4f4',fontSize:'2.8rem',fontWeight:'bold',letterSpacing:'-0.07rem'}}>
                Thank you!
            </Text>
            <div style={{height:'1.6rem'}}/>
            <Text style={{height:'5.8rem',color:'#f4f4f4',fontSize:'1.35rem',lineHeight:'2.14',letterSpacing:'-0.035rem'}}>
                상세 일정은 수일 내에 010.2984.2422 로 개별 연락을 드릴 예정입니다. 응답해주셔서 진심으로 감사드립니다.
            </Text>
        </About>
        <InfoWrap>
            <div style={{height:'5.6rem'}}/>
            <div style={{width:'32rem',display:'flex',flexDirection:'row'}}>
                <Icon src={phone_icon}/>
                <Text style={{marginLeft:'0.6rem',width:'auto',height:'3.2rem',color:'#191919',fontSize:'2.2rem',fontWeight:'900',lineHeight:'1.36'}}>HELP</Text>
            </div>
            <div style={{height:'0.9rem'}}/>
            <Text>010.2984.2422</Text>
        </InfoWrap>
        <Text style={{position:'absolute',bottom:'1.8rem',width:'100vw',height:'3.2rem',fontSize:'1rem',textAlign:'center'}}>
            {"exclusive VIP personal shopper\nof NEW PREMIUM SERVICE"}
        </Text>
        </>
    )
}

const Text = styled.div`
    width: 32rem;
    height: 2.7rem;

    color: ${({theme})=>theme.colors.gray};
    font-size: 1.8rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    white-space: pre-line;
`;


const About = styled.div`
    width: 100vw;
    height: 22.9rem;
    background-color: black;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InfoWrap = styled.div`
    position: relative;

    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Icon = styled.img`
    width: 2.8rem;
    height: 2.8rem;
`;