import React, { useEffect } from "react";
import styled from "styled-components";
// components
import { Header, Bottom } from "../../components";
import { QuestionTwo, OverlapBtns } from "../../components/common";
// hooks
import useInput from "../../hooks/useInput";
import useWindowSize from "../../hooks/useWindowSize";


export default ({quesNum, lastQuesNum, setPageNum, user_datas, data_num}) => {
    const size = useWindowSize();
    const user_height = useInput("");
    const user_weight = useInput("");
    
    useEffect(()=>{
        window.scrollTo(0,0);
    }, [])



    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
            <Header kategorie={2} quesNum={quesNum} lastQuesNum={lastQuesNum}/>
            <Wrap>
                <QuestionTwo
                    quesNum={quesNum}
                    quesTextOne={"해당 코디를 어떻게"}
                    quesTextTwo={"활용하실건가요?"}
                    overlapText={"최대 2개"}
                />
                <div style={{width:'100%', height:'3.6rem'}}/>
                <OverlapBtns
                    data={user_datas}
                    data_num={data_num}
                    btnType={1}
                    isOverlap={false}
                    maxNum={2}
                    isNoneExist={false}
                    otherTextOne={"이외에 연출하고 싶은"}
                    otherTextTwo={"스타일이 있다면 알려주세요!"}
                    inputText={"예) 상견례룩을 추천해주세요!"}
                />
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