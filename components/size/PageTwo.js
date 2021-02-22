import React, { useEffect } from "react";
import styled from "styled-components";
// components
import { Header, Bottom } from "../../components";
import { Question, RatioStep } from "../../components/common";



export default ({quesNum, lastQuesNum, setPageNum, user_datas}) => {
    useEffect(()=>{
        window.scrollTo(0,0);
    }, [])
    
    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
            <Header kategorie={0} quesNum={quesNum} lastQuesNum={lastQuesNum}/>
            <Wrap>
                <Question
                    quesNum={quesNum}
                    quesText={"체형을 함께 분석해볼까요?"}
                />
                <SmallText>
                    {"객관적인 기준을 적용하지 않아도 됩니다.\n본인이 생각하는 자신의 체형에 대해 알려주세요!"}
                </SmallText>
                {user_datas.map((item, idx)=>{
                    return <Btn
                                key={idx}
                                data={item}
                            />
                })}
            </Wrap>
            <Bottom setPageNum={setPageNum} pageNum={quesNum}/>
        </div>
    )
}

const Wrap = styled.div`
    margin-top: 11.6rem;
    margin-bottom: 8.6rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const SmallText = styled.div`
    margin-top: 1rem;
    margin-bottom: 4.7rem;
    font-size: 1.15rem;
    font-weight: normal;
    text-align: left;
    color: #707070;
    white-space: pre-line;
`;

const Btn = ({data}) => {
    return(
        <div style={{marginBottom:'3.6rem'}}>
            <Text>{data.question}</Text>
            <RatioStep
                data={data.datas}
            />
        </div>
    )
}

const Text = styled.div`
    margin-bottom: 2.5rem;
    font-size: 1.55rem;
    font-weight: bold;
    text-align: left;
    color: ${({theme})=>theme.colors.black};
`;