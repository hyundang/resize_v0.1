import React, { useEffect } from "react";
import styled from "styled-components";
// components
import { Header, Bottom } from "../../components";
import { Question, Circles, RatioStep, Rectangles } from "../../components/common";



export default ({quesNum, lastQuesNum, setPageNum, user_datas}) => {
    useEffect(()=>{
        window.scrollTo(0,0);
    }, [])

    
    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
            <Header kategorie={1} quesNum={quesNum} lastQuesNum={lastQuesNum}/>
            <Wrap>
                <Question
                    quesNum={quesNum}
                    quesText={"체형을 함께 분석해볼까요?"}
                />
                <SmallText>
                    {"객관적인 기준을 적용하지 않아도 됩니다.\n본인이 생각하는 자신의 체형에 대해 알려주세요!"}
                </SmallText>
                <div style={{marginBottom:'4.8rem'}}>
                    <Text>{user_datas[0].question}</Text>
                    <RatioStep
                        data={user_datas[0].datas}
                    />
                </div>
                <div style={{marginBottom:'4.8rem'}}>
                    <Text>{user_datas[1].question}</Text>
                    <Rectangles
                        data={user_datas[1].datas}
                        data_num={user_datas[1].datas.length}
                        isOverlap={false}
                    />
                </div>
                <div style={{marginBottom:'4.8rem'}}>
                    <Text>{user_datas[2].question}</Text>
                    <Circles
                        data={user_datas[2].datas}
                        data_num={user_datas[2].datas.length}
                        isThree={true}
                        isOverlap={false}
                    />
                </div>
                <div style={{marginBottom:'4.8rem'}}>
                    <Text>{user_datas[3].question}</Text>
                </div>
                <div style={{marginBottom:'4.8rem'}}>
                    <Text>{user_datas[4].question}</Text>
                    <Circles
                        data={user_datas[4].datas}
                        data_num={user_datas[4].datas.length}
                        isThree={true}
                        isOverlap={false}
                    />
                </div>
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

const Text = styled.div`
    margin-bottom: 2.5rem;
    font-size: 1.55rem;
    font-weight: bold;
    text-align: left;
    color: ${({theme})=>theme.colors.black};
`;