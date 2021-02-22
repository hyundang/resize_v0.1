import React, { useEffect } from "react";
import styled from "styled-components";
// components
import { Header, Bottom } from "../../components";
import { Question } from "../../components/common";
// hooks
import useInput from "../../hooks/useInput";
import useWindowSize from "../../hooks/useWindowSize";


export default ({quesNum, lastQuesNum, setPageNum}) => {
    const size = useWindowSize();
    const user_height = useInput("");
    const user_weight = useInput("");
    
    useEffect(()=>{
        window.scrollTo(0,0);
    }, [])



    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
            <Header kategorie={0} quesNum={quesNum} lastQuesNum={lastQuesNum}/>
            <Wrap>
                <Question
                    quesNum={quesNum}
                    quesText={"당신의 키와 몸무게를 알려주실래요?"}
                />
                <div style={{width:'100%', height:'3.6rem'}}/>
                <Text>키</Text>
                <div style={{width:'32rem', height:'4.4rem'}}>
                    <InputBox
                        placeholder="키를 입력해주세요"
                        value={user_height.value}
                        onChange={user_height.onChange}
                    />
                    <Unit width={size.width}>cm</Unit>
                </div>
                <div style={{width:'100%', height:'2.6rem'}}/>
                <Text>몸무게</Text>
                <div style={{width:'32rem', height:'4.4rem'}}>
                    <InputBox
                        placeholder="몸무게를 입력해주세요"
                        value={user_weight.value}
                        onChange={user_weight.onChange}
                    />
                    <Unit width={size.width}>kg</Unit>
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

const Text = styled.div`
    height: 2.4rem;
    font-size: 1.55rem;
    font-weight: bold;
    text-align: left;
    color: ${({theme})=>theme.colors.black};
    margin-bottom: 1rem;
`;

const InputBox = styled.input`
    position: absolute;
    z-index: 1;
    width: 32rem;
    height: 4.4rem;
    padding-left: 1.2rem;
    padding-right: 5.4rem;
    border-radius: 0.5rem;
    border: solid 0.1rem #bdbdbd;
    background-color: ${({ theme }) => theme.colors.white};
    font-size: 1.6rem;
    font-family: 'Noto Sans KR';
    text-align: left;
    font-weight: normal;
    color: #767676;
    ::placeholder{
        color: #bdbdbd;
    }
    &:focus{
        outline: none;
        border: solid 0.1rem #767676;
    }
`;

const Unit = styled.div`
    position: absolute;
    z-index: 2;
    margin-top: 1.1rem;
    right: ${props=>(props.width/10-32)/2+1.7}rem;
    width: 2rem;
    height: 2rem;
    font-size: 1.35rem;
    font-weight: 500;
    text-align: left;
    color: #767676;
`;