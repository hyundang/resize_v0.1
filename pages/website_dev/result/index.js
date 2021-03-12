import React from "react";
import styled from "styled-components";
// component
import { KakaoChannel } from "../../../components";

const Start = () => {
    return(
    <>
        <Header>코디 큐레이션</Header>
        <Wrap>
            <Img src={"/images/website/last/presentbox.png"}/>
            <div style={{height:'3.8rem'}}/>
            <div style={{
                fontSize:'1.6rem',letterSpacing:'-0.04rem',
                textAlign:'center',fontWeight:'bold',color:'#191919'
            }}>코디 큐레이션 요청이 접수 되었습니다!</div>
            <div style={{height:'3.1rem'}}/>
            <div style={{
                fontSize:'1.35rem',textAlign:'center',
                fontWeight:'normal',color:'#191919'
            }}>당신에게 꼭 어울리는 코디를 완성해서</div>
            <div style={{
                fontSize:'1.35rem',textAlign:'center',
                fontWeight:'normal',color:'#191919'
            }}>접수일 기준 일주일 이내에</div>
            <div style={{
                fontSize:'1.35rem',textAlign:'center',
                fontWeight:'normal',color:'#191919'
            }}>카카오톡으로 보내드릴게요.</div>
            <div style={{height:'3.1rem'}}/>
            <div style={{
                fontSize:'1.35rem',textAlign:'center',
                fontWeight:'normal',color:'#191919'
            }}>리사이즈 큐레이션을 이용해주셔서 감사합니다!</div>
            <div style={{height:'6.8rem'}}/>
            <KakaoChannel/>
        </Wrap>
    </>
    )
}

export default Start;

const Header = styled.div`
    position: fixed;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    box-shadow: 0 0 0.6rem 0 rgba(0, 0, 0, 0.16);
    font-size: 1.8rem;
    font-weight: bold;
    letter-spacing: -0.45px;
    text-align: left;
    color: ${({theme})=>theme.colors.black};
`;

const Wrap = styled.div`
    margin-top: 11.6rem;
    margin-bottom: 8.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Img = styled.img`
    width: 26rem;
    height: 26rem;
    border-radius: 1.7rem;
    box-shadow: 0.5rem 0.5rem 1.5rem 0 rgba(0, 0, 0, 0.16);
`;
