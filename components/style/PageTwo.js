import React, {useState} from "react";
import styled from "styled-components";
// recoil
import { useRecoilValue } from "recoil";
// components
import { Header, Bottom } from "../../components";
import { QuestionTwo, Styles } from "../../components/common";
// hooks
import useWindowSize from '../../hooks/useWindowSize';
// data
import user_datas from "../../data/userdata/user_datas_F";


export default ({quesNum, lastQuesNum, setPageNum}) => {
    const [size, setSize] = useState(useWindowSize());


    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <Header kategorie={0} quesNum={quesNum} lastQuesNum={lastQuesNum}/>
            <Wrap height={size.height}>
                <QuestionTwo
                    quesNum={quesNum}
                    quesTextOne={"평소 선호하는 브랜드/쇼핑몰의"}
                    quesTextTwo={"이름을 적어주실래요?"}
                    overlapText={"최대 3개"}
                />
                <div style={{height:'4.1rem'}}/>
                <Styles data={user_datas.style_F[quesNum-1].answers}/>
                <div style={{height:'8.6rem'}}/>
            </Wrap>
            <Bottom setPageNum={setPageNum} pageNum={quesNum}/>
        </div>
    )
}

const Wrap = styled.div`
    margin-top: 11.6rem;
    height: ${props=>(props.height/10-20)}rem;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`;