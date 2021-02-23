import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { Header, Bottom } from "../../components";
import { QuestionTwo, OverlapBtnThree } from "../../components/common";
// hooks
import useWindowSize from "../../hooks/useWindowSize";
// aos



export default ({quesNum, lastQuesNum, setPageNum, user_datas, sex}) => {
    const size = useWindowSize();
    // 항목 개수에 맞게 만들기
    const [selectData, setSelectData] = useState(-1);

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
            <Header kategorie={1} quesNum={quesNum} lastQuesNum={lastQuesNum}/>
            <Wrap>
                <QuestionTwo
                    quesNum={quesNum}
                    quesTextOne={"평소 착용하는"}
                    quesTextTwo={"상의 사이즈는 무엇인가요?"}
                    overlapText={"중복선택"}
                />
                <div style={{marginBottom:'2.3rem'}}/>
                <div style={{width:'32rem', display:'flex', flexDirection:'column', marginBottom:'1.6rem'}}>
                    <Text>{user_datas[0].question}</Text>
                    <BtnOutterWrap width={size.width}>
                    <BtnsInnerWrap num={user_datas[0].datas.length}>
                        {user_datas[0].datas.map((item, idx)=>{
                            return <OverlapBtnThree
                                key={idx}
                                id={idx}
                                text={item}
                                selectData={selectData}
                                setSelectData={setSelectData}
                            />
                        })}
                    </BtnsInnerWrap>
                    </BtnOutterWrap>
                </div>
                <div style={{width:'32rem', display:'flex', flexDirection:'column', marginBottom:'1.6rem'}}>
                    <Text>{user_datas[1].question}</Text>
                    <BtnOutterWrap width={size.width}>
                    <BtnsInnerWrap num={user_datas[1].datas.length}>
                        {user_datas[0].datas.map((item, idx)=>{
                            return <OverlapBtnThree
                                key={idx}
                                id={idx}
                                text={item}
                                selectData={selectData}
                                setSelectData={setSelectData}
                            />
                        })}
                    </BtnsInnerWrap>
                    </BtnOutterWrap>
                </div>
                {(sex===1)&&
                <div style={{width:'32rem', display:'flex', flexDirection:'column', marginBottom:'1.6rem'}}>
                    <Text>{user_datas[2].question}</Text>
                    <BtnOutterWrap width={size.width}>
                    <BtnsInnerWrap num={user_datas[2].datas.length}>
                        {user_datas[2].datas.map((item, idx)=>{
                            return <OverlapBtnThree
                                key={idx}
                                id={idx}
                                text={item}
                                selectData={selectData}
                                setSelectData={setSelectData}
                            />
                        })}
                    </BtnsInnerWrap>
                    </BtnOutterWrap>
                </div>}
                <div style={{marginBottom:'2.7rem'}}/>
                <QuestionTwo
                    quesNum={0}
                    quesTextOne={"평소 착용하는"}
                    quesTextTwo={"바지 사이즈는 무엇인가요?"}
                    overlapText={"중복선택"}
                />
                <div style={{marginBottom:'2.3rem'}}/>
                {(sex===0)&&
                <>
                <div style={{width:'32rem', display:'flex', flexDirection:'column', marginBottom:'1.6rem'}}>
                    <Text>{user_datas[2].question}</Text>
                    <BtnOutterWrap width={size.width}>
                    <BtnsInnerWrap num={user_datas[2].datas.length}>
                        {user_datas[2].datas.map((item, idx)=>{
                            return <OverlapBtnThree
                                key={idx}
                                id={idx}
                                text={item}
                                selectData={selectData}
                                setSelectData={setSelectData}
                            />
                        })}
                    </BtnsInnerWrap>
                    </BtnOutterWrap>
                </div>
                <div style={{width:'32rem', display:'flex', flexDirection:'column', marginBottom:'1.6rem'}}>
                    <Text>{user_datas[3].question}</Text>
                    <BtnOutterWrap width={size.width}>
                    <BtnsInnerWrap num={user_datas[3].datas.length}>
                        {user_datas[3].datas.map((item, idx)=>{
                            return <OverlapBtnThree
                                key={idx}
                                id={idx}
                                text={item}
                                selectData={selectData}
                                setSelectData={setSelectData}
                            />
                        })}
                    </BtnsInnerWrap>
                    </BtnOutterWrap>
                </div>
                </>
                }
                {(sex===1)&&
                <>
                <div style={{width:'32rem', display:'flex', flexDirection:'column', marginBottom:'1.6rem'}}>
                    <Text>{user_datas[3].question}</Text>
                    <BtnOutterWrap width={size.width}>
                    <BtnsInnerWrap num={user_datas[3].datas.length}>
                        {user_datas[3].datas.map((item, idx)=>{
                            return <OverlapBtnThree
                                key={idx}
                                id={idx}
                                text={item}
                                selectData={selectData}
                                setSelectData={setSelectData}
                            />
                        })}
                    </BtnsInnerWrap>
                    </BtnOutterWrap>
                </div>
                <div style={{width:'32rem', display:'flex', flexDirection:'column', marginBottom:'1.6rem'}}>
                    <Text>{user_datas[4].question}</Text>
                    <BtnOutterWrap width={size.width}>
                    <BtnsInnerWrap num={user_datas[4].datas.length}>
                        {user_datas[4].datas.map((item, idx)=>{
                            return <OverlapBtnThree
                                key={idx}
                                id={idx}
                                text={item}
                                selectData={selectData}
                                setSelectData={setSelectData}
                            />
                        })}
                    </BtnsInnerWrap>
                    </BtnOutterWrap>
                </div>
                </>
                }
            </Wrap>
            <Bottom 
                setPageNum={setPageNum} pageNum={quesNum}
                lastQuesNum={lastQuesNum} kategorie={1}
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

const Text = styled.div`
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
    text-align: left;
    color: ${({theme})=>theme.colors.black};
`;


const BtnOutterWrap = styled.div`
    width: ${props=>(props.width/10-32)/2+32}rem;
    overflow: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    ::-webkit-scrollbar {
        display: none;
    }
`;

const BtnsInnerWrap = styled.div`
    width: ${props=>props.num*6 + (props.num-1)*0.5}rem;
    height: 3.3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;