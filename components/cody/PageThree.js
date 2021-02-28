import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { Header, Bottom } from "../../components";
import { OverlapBtns, QuestionTwo, Squares } from "../../components/common";
// function
import cody_case_F from "../../lib/cody_case_F";
import cody_case_M from "../../lib/cody_case_M";
// recoil
import { useRecoilState } from "recoil";
import { CodyCaseState } from "../../states/cody_atom";



export default ({quesNum, lastQuesNum, setPageNum, user_datas, sex}) => {
    const [innerPageNum, setInnerPageNum] = useState(0);
    const [itemList, setItemList] = useState([]);
    
    const [selectData, setSelectData] = useState([]);


    const [codyCase, setCodyCase] = useRecoilState(CodyCaseState);

    useEffect(()=>{
        window.scrollTo(0,0);
    }, [])

    useEffect(()=>{
        if(sex===0){
            //recoil을 이용한 페이지 데이터 들어감
            setItemList(cody_case_M(codyCase));
            // console.log(itemList)
            // console.log(user_datas[itemList[0]].question)
        }
        else{
            //recoil을 이용한 페이지 데이터 들어감
            setItemList(cody_case_F(codyCase));
        }
    }, [codyCase])

    
    switch (innerPageNum) {
        case 1:
            return(
                <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
                    <Header kategorie={2} quesNum={quesNum} lastQuesNum={lastQuesNum}/>
                    <Wrap>
                        <QuestionTwo
                            quesNum={0}
                            quesTextOne={"해당 코디에 포함하고 싶지 않은"}
                            quesTextTwo={`${user_datas[itemList[0]].question} 종류는 무엇인가요?`}
                            overlapText={"중복선택"}
                        />
                        <div style={{height:'3.6rem'}}/>
                        <OverlapBtns 
                            data={user_datas[itemList[0]].datas}
                            data_num={user_datas[itemList[0]].datas.length}
                            btnType={1}
                            isOverlap={true}
                            isNoneExist={true}
                            selectData={selectData} setSelectData={setSelectData}
                            otherTextOne={"이외에 포함하고 싶지 않은"}
                            otherTextTwo={`${user_datas[itemList[0]].question}가 있다면 알려주세요!`}
                            inputText={user_datas[itemList[0]].inputText}
                        />
                    </Wrap>
                    <Bottom 
                        setPageNum={setPageNum} pageNum={quesNum} 
                        isCody={true} 
                        setInnerPageNum={setInnerPageNum} innerPageNum={innerPageNum} 
                        lastInnerPageNum={itemList.length}
                    />
                </div>
            )
        case 2:
            return(
                <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
                    <Header kategorie={2} quesNum={quesNum} lastQuesNum={lastQuesNum}/>
                    <Wrap>
                        <QuestionTwo
                            quesNum={0}
                            quesTextOne={"해당 코디에 포함하고 싶지 않은"}
                            quesTextTwo={`${user_datas[itemList[1]].question} 종류는 무엇인가요?`}
                            overlapText={"중복선택"}
                        />
                        <div style={{height:'3.6rem'}}/>
                        <OverlapBtns 
                            data={user_datas[itemList[1]].datas}
                            data_num={user_datas[itemList[1]].datas.length}
                            btnType={1}
                            isOverlap={true}
                            isNoneExist={true}
                            selectData={selectData} setSelectData={setSelectData}
                            otherTextOne={"이외에 포함하고 싶지 않은"}
                            otherTextTwo={`${user_datas[itemList[1]].question}가 있다면 알려주세요!`}
                            inputText={user_datas[itemList[1]].inputText}
                        />
                    </Wrap>
                    <Bottom 
                        setPageNum={setPageNum} pageNum={quesNum} 
                        isCody={true} 
                        setInnerPageNum={setInnerPageNum} innerPageNum={innerPageNum} 
                        lastInnerPageNum={itemList.length}
                    />
                </div>
            )
        case 3:
            return(
                <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
                    <Header kategorie={2} quesNum={quesNum} lastQuesNum={lastQuesNum}/>
                    <Wrap>
                        <QuestionTwo
                            quesNum={0}
                            quesTextOne={"해당 코디에 포함하고 싶지 않은"}
                            quesTextTwo={`${user_datas[itemList[2]].question} 종류는 무엇인가요?`}
                            overlapText={"중복선택"}
                        />
                        <div style={{height:'3.6rem'}}/>
                        <OverlapBtns 
                            data={user_datas[itemList[2]].datas}
                            data_num={user_datas[itemList[2]].datas.length}
                            btnType={1}
                            isOverlap={true}
                            isNoneExist={true}
                            selectData={selectData} setSelectData={setSelectData}
                            otherTextOne={"이외에 포함하고 싶지 않은"}
                            otherTextTwo={`${user_datas[itemList[2]].question}가 있다면 알려주세요!`}
                            inputText={user_datas[itemList[2]].inputText}
                        />
                    </Wrap>
                    <Bottom 
                        setPageNum={setPageNum} pageNum={quesNum} 
                        isCody={true} 
                        setInnerPageNum={setInnerPageNum} innerPageNum={innerPageNum} 
                        lastInnerPageNum={itemList.length}
                    />
                </div>
            )
        case 4:
            return(
                <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
                    <Header kategorie={2} quesNum={quesNum} lastQuesNum={lastQuesNum}/>
                    <Wrap>
                        <QuestionTwo
                            quesNum={0}
                            quesTextOne={"해당 코디에 포함하고 싶지 않은"}
                            quesTextTwo={`${user_datas[itemList[3]].question} 종류는 무엇인가요?`}
                            overlapText={"중복선택"}
                        />
                        <div style={{height:'3.6rem'}}/>
                        <OverlapBtns 
                            data={user_datas[itemList[3]].datas}
                            data_num={user_datas[itemList[3]].datas.length}
                            btnType={1}
                            isOverlap={true}
                            isNoneExist={true}
                            selectData={selectData} setSelectData={setSelectData}
                            otherTextOne={"이외에 포함하고 싶지 않은"}
                            otherTextTwo={`${user_datas[itemList[3]].question}가 있다면 알려주세요!`}
                            inputText={user_datas[itemList[3]].inputText}
                        />
                    </Wrap>
                    <Bottom 
                        setPageNum={setPageNum} pageNum={quesNum} 
                        isCody={true} 
                        setInnerPageNum={setInnerPageNum} innerPageNum={innerPageNum} 
                        lastInnerPageNum={itemList.length}
                    />
                </div>
            )
        case 5:
            return(
                <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
                    <Header kategorie={2} quesNum={quesNum} lastQuesNum={lastQuesNum}/>
                    <Wrap>
                        <QuestionTwo
                            quesNum={0}
                            quesTextOne={"해당 코디에 포함하고 싶지 않은"}
                            quesTextTwo={`${user_datas[itemList[4]].question} 종류는 무엇인가요?`}
                            overlapText={"중복선택"}
                        />
                        <div style={{height:'3.6rem'}}/>
                        <OverlapBtns 
                            data={user_datas[itemList[4]].datas}
                            data_num={user_datas[itemList[4]].datas.length}
                            btnType={1}
                            isOverlap={true}
                            isNoneExist={true}
                            selectData={selectData} setSelectData={setSelectData}
                            otherTextOne={"이외에 포함하고 싶지 않은"}
                            otherTextTwo={`${user_datas[itemList[4]].question}가 있다면 알려주세요!`}
                            inputText={user_datas[itemList[4]].inputText}
                        />
                    </Wrap>
                    <Bottom 
                        setPageNum={setPageNum} pageNum={quesNum} 
                        isCody={true} 
                        setInnerPageNum={setInnerPageNum} innerPageNum={innerPageNum} 
                        lastInnerPageNum={itemList.length}
                    />
                </div>
            )
        default:
            return(
                <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
                    <Header kategorie={2} quesNum={quesNum} lastQuesNum={lastQuesNum}/>
                    <Wrap>
                        <QuestionTwo
                            quesNum={quesNum}
                            quesTextOne={"받아보고 싶은 코디에 포함하고"}
                            quesTextTwo={"싶은 옷의 조합은 무엇인가요?"}
                            overlapText={"최대 2개"}
                        />
                        <div style={{height:'4rem'}}/>
                        <Squares
                            data={user_datas[0].datas}
                            data_num={user_datas[0].datas.length}
                            isOverlap={false} maxNum={2}
                            isNoneExist={false}
                            selectData={codyCase}
                            setSelectData={setCodyCase}
                        />
                        <div style={{height:'3.6rem'}}/>
                    </Wrap>
                    <Bottom 
                        setPageNum={setPageNum} pageNum={quesNum} 
                        isCody={true} 
                        setInnerPageNum={setInnerPageNum} innerPageNum={innerPageNum}
                        lastInnerPageNum={5}
                    />
                </div>
            )
    }
}

const Wrap = styled.div`
    margin-top: 11.6rem;
    margin-bottom: 8.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;