import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { Header, Bottom } from "./common";
import { InputBoxBig } from "../common";
// hooks
import useInput from "../../hooks/useInput";
// router
import { useRouter } from "next/router";


export default () => {
    const input = useInput("");
    const [selectData, setSelectData] = useState([]);
    
    const router = useRouter();
    
    useEffect(()=>{
        window.scroll(0,0);
    },[])
    
    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
            <Header text={"코디 큐레이션 재요청하기"}/>
            <Wrap>
                <div style={{height:'2rem'}}/>
                <Title>코디 큐레이션을 재요청하는 이유가 무엇인가요</Title>
                <div style={{height:'3.6rem'}}/>
                <Title>구체적으로 불만족한 부분을 설명해주세요.</Title>
                <div style={{height:'2rem'}}/>
                <InputBoxBig
                    text={"사진에서 봤던 것과 디자인이 달랐어요. 사이즈도 살짝 컸어요. 조금 더 딱 맞는 핏의 옷을 찾고 싶습니다. 색감도 생각보다 쨍했어요."}
                    input={input}
                />
                <div style={{height:'3.6rem'}}/>
                <Title>추가적으로 요청하고 싶은 부분을 설명해주세요.</Title>
                <div style={{height:'2rem'}}/>
                <InputBoxBig 
                    text={"워싱이 안 들어가고 커팅 디테일이 없는 진청 색상의 스키니진으로 부탁드릴게요."}
                    input={input}
                />
                <div style={{height:'7rem'}}/>
            </Wrap>
            <Bottom 
                text={"코디 큐레이션 재요청하기"}
                onClick={()=>router.push('/website_dev/result')}
            />
        </div>
    )
}

const Wrap = styled.div`
    margin-top: 11.6rem;
    margin-bottom: 8.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.div`
    width: 32rem;
    height: 2rem;
    font-size: 1.55rem;
    font-weight: bold;
    text-align: left;
    line-height: 1.7rem;
    letter-spacing: -0.4px;
    color: ${({theme})=>theme.colors.black};
`;