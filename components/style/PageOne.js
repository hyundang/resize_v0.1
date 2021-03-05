import React, {useEffect, useState} from "react";
import styled from "styled-components";
// recoil
import { useRecoilState } from "recoil";
import { SexState } from "../../states/website_atom";
// components
import { Header, Bottom } from "../../components";
import { Question, ChoiceBtn } from "../../components/common";
// hooks
import useWindowSize from '../../hooks/useWindowSize';



export default ({quesNum, lastQuesNum, setPageNum}) => {
    const [size, setSize] = useState(useWindowSize());
    const [isManClick, setIsManClick] = useState(false);
    const [isWomanClick, setIsWomanClick] = useState(false);

    const [isRightOkay, setIsRightOkay] = useState(false);

    const [sex, setSex] = useRecoilState(SexState);

    useEffect(()=>{
        if(sex===0){
            setIsManClick(true);
        }
        else if(sex===1){
            setIsWomanClick(true);
        }
    }, [])

    useEffect(()=>{
        if(sex!==-1){
            setIsRightOkay(true);
        }
        else{
            setIsRightOkay(false);
        }
    }, [sex])

    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <Header kategorie={0} quesNum={quesNum} lastQuesNum={lastQuesNum}/>
            <Wrap height={size.height}>
                <Question
                    quesNum={quesNum}
                    quesText={"당신의 성별은 무엇인가요?"}
                />
                <BtnWrap>
                    <ChoiceBtn 
                        text={"남"} 
                        isClick={isManClick}
                        onClick={()=>{setIsManClick(true);setIsWomanClick(false);setSex(0)}}
                    />
                    <ChoiceBtn 
                        text={"여"} 
                        isClick={isWomanClick}
                        onClick={()=>{setIsManClick(false);setIsWomanClick(true);setSex(1)}}
                    />
                </BtnWrap>
            </Wrap>
            <Bottom 
                setPageNum={setPageNum} pageNum={quesNum}
                isRightOkay={isRightOkay}
            />
        </div>
    )
}

const Wrap = styled.div`
    margin-top: 11.6rem;
    width: 32rem;
    height: ${props=>(props.height/10-20)}rem;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`;

const BtnWrap = styled.div`
    margin-top: 11rem;
    width: 32rem;
    height: 3.6rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;