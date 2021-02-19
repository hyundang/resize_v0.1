import React, {useState} from "react";
import styled from "styled-components";
// recoil
import { useSetRecoilState } from "recoil";
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

    const setSex = useSetRecoilState(SexState);

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
            <Bottom setPageNum={setPageNum} pageNum={quesNum}/>
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