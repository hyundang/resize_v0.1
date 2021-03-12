import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { Header, Bottom, Loading } from "../../components";
import { OverlapBtns, QuestionTwo, Squares } from "../../components/common";
// function
import cody_case_F from "../../lib/cody_case_F";
import cody_case_M from "../../lib/cody_case_M";
// hooks
import useRecoilInput from "../../hooks/useRecoilInput";
// recoil
import { useRecoilValue, useRecoilState } from "recoil";
import { CodyCaseState, CodyItemListState, CodyOtherState, CodyQuesThreeState, CodyTagState } from "../../states/cody_atom";
import { VisitState } from "../../states/website_atom";
// axios
import { getApi } from "../../lib/api";
// lib
import SortData from "../../lib/SortData";
import { set } from "react-ga";


export default ({quesNum, lastQuesNum, setPageNum, user_datas, sex}) => {
    const isVisited = useRecoilValue(VisitState);
    
    const [codyCase, setCodyCase] = useRecoilState(CodyCaseState);

    const [innerPageNum, setInnerPageNum] = useState(0);
    const [itemList, setItemList] = useRecoilState(CodyItemListState);
    
    // 선택될 데이터 담김.
    const [selectDataOne, setSelectDataOne] = useRecoilState(CodyTagState(2));
    const [selectDataTwo, setSelectDataTwo] = useRecoilState(CodyTagState(3));
    const [selectDataThree, setSelectDataThree] = useRecoilState(CodyTagState(4));
    const [selectDataFour, setSelectDataFour] = useRecoilState(CodyTagState(5));
    const [selectDataFive, setSelectDataFive] = useRecoilState(CodyTagState(6));

    const inputOne = useRecoilInput(CodyOtherState(2));
    const inputTwo = useRecoilInput(CodyOtherState(3));
    const inputThree = useRecoilInput(CodyOtherState(4));
    const inputFour = useRecoilInput(CodyOtherState(5));
    const inputFive = useRecoilInput(CodyOtherState(6));
    
    const [isEct, setIsEct] = useState(false);


    const [isRightOkay, setIsRightOkay] = useState(false);
    const [res, setRes] = useRecoilState(CodyQuesThreeState);
    
    const [combination, setCombination] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        window.scrollTo(0,0);
        // 서버로 부터 데이터 받아오기
        getData();
    },[])

    const getData = async () => {
        let isMorF = 'M';
        if(sex===0){
            isMorF = 'M';
        }
        else{
            isMorF = 'F';
        }
        const combination_result = await getApi.getImgData('cody', isMorF, 'Cody_Combination');
        setCombination(combination_result.results);
        const sorted_data = await SortData(combination_result.results);
        setCombination(sorted_data);
        setIsLoading(false);
    }

    // useEffect(()=>{
    //     console.log(res);
    // },[res])

    useEffect(()=>{
        if(sex===0){
            //recoil을 이용한 페이지 데이터 들어감
            setItemList(cody_case_M(codyCase));
        }
        else{
            //recoil을 이용한 페이지 데이터 들어감
            setItemList(cody_case_F(codyCase));
        }
        // console.log(codyCase)
        // console.log(itemList[0])
    }, [codyCase])


    // 다음 페이지로 넘어갈 수 있는지 판단
    useEffect(()=>{
        setIsEct(false);
        switch (innerPageNum) {
            case 1:
                if(selectDataOne.length!==0){
                    if(isEct){
                        if(inputOne.value.length!==0){setIsRightOkay(true);}
                        else{setIsRightOkay(false);}
                    }
                    else{setIsRightOkay(true);}
                }
                else{
                    setIsRightOkay(false);
                }
                break;
            case 2:
                if(selectDataTwo.length!==0){
                    if(isEct){
                        if(inputTwo.value.length!==0){setIsRightOkay(true);}
                        else{setIsRightOkay(false);}
                    }
                    else{setIsRightOkay(true);}
                }
                else{
                    setIsRightOkay(false);
                }
                break;
            case 3:
                if(selectDataThree.length!==0){
                    if(isEct){
                        if(inputThree.value.length!==0){setIsRightOkay(true);}
                        else{setIsRightOkay(false);}
                    }
                    else{setIsRightOkay(true);}
                }
                else{
                    setIsRightOkay(false);
                }
                break;
            case 4:
                if(selectDataFour.length!==0){
                    if(isEct){
                        if(inputFour.value.length!==0){setIsRightOkay(true);}
                        else{setIsRightOkay(false);}
                    }
                    else{setIsRightOkay(true);}
                }
                else{
                    setIsRightOkay(false);
                }
                break;
            case 5:
                if(selectDataFive.length!==0){
                    if(isEct){
                        if(inputFive.value.length!==0){setIsRightOkay(true);}
                        else{setIsRightOkay(false);}
                    }
                    else{setIsRightOkay(true);}
                }
                else{
                    setIsRightOkay(false);
                }
                break;
            default:
                if(codyCase.length!==0){
                    setIsRightOkay(true);
                }
                else{
                    setIsRightOkay(false);
                }
                break;
        }
    }, [res, innerPageNum])



    switch (innerPageNum) {
        case 1:
            return(
                <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
                    {(isVisited.includes("네"))&&<Header kategorie={2} quesNum={quesNum} lastQuesNum={lastQuesNum}/>}
                    <Wrap isVisited={isVisited.includes("네")}>
                        <QuestionTwo
                            quesNum={0}
                            quesTextOne={"해당 코디에 ❌포함하고 싶지 않은❌"}
                            quesTextTwo={`${user_datas[itemList[0]].question} 종류는 무엇인가요?`}
                            overlapText={"중복선택"}
                        />
                        <div style={{height:'3.6rem'}}/>
                        <OverlapBtns 
                            data={user_datas[itemList[0]].datas}
                            data_num={user_datas[itemList[0]].datas.length}
                            btnType={1}
                            isOverlap={true} isNoneExist={true}
                            selectData={selectDataOne} setSelectData={setSelectDataOne}
                            otherTextOne={"이외에 ❌포함하고 싶지 않은❌"}
                            otherTextTwo={`${user_datas[itemList[0]].question}가 있다면 알려주세요!`}
                            inputText={user_datas[itemList[0]].inputText}
                            input={inputOne}
                            innerPageNum={innerPageNum}
                            isEssential={true}
                            setIsEct={setIsEct}
                        />
                    </Wrap>
                    <Bottom 
                        setPageNum={setPageNum} pageNum={quesNum} 
                        isCody={true} 
                        setInnerPageNum={setInnerPageNum} innerPageNum={innerPageNum} 
                        lastInnerPageNum={itemList.length}
                        isLeftOkay={true} isRightOkay={isRightOkay}
                    />
                </div>
            )
        case 2:
            return(
                <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
                    {(isVisited.includes("네"))&&<Header kategorie={2} quesNum={quesNum} lastQuesNum={lastQuesNum}/>}
                    <Wrap isVisited={isVisited.includes("네")}>
                        <QuestionTwo
                            quesNum={0}
                            quesTextOne={"해당 코디에 ❌포함하고 싶지 않은❌"}
                            quesTextTwo={`${user_datas[itemList[1]].question} 종류는 무엇인가요?`}
                            overlapText={"중복선택"}
                        />
                        <div style={{height:'3.6rem'}}/>
                        <OverlapBtns 
                            data={user_datas[itemList[1]].datas}
                            data_num={user_datas[itemList[1]].datas.length}
                            btnType={1}
                            isOverlap={true} isNoneExist={true}
                            selectData={selectDataTwo} setSelectData={setSelectDataTwo}
                            otherTextOne={"이외에 ❌포함하고 싶지 않은❌"}
                            otherTextTwo={`${user_datas[itemList[1]].question}가 있다면 알려주세요!`}
                            inputText={user_datas[itemList[1]].inputText}
                            input={inputTwo}
                            innerPageNum={innerPageNum}
                            isEssential={true}
                            setIsEct={setIsEct}
                        />
                    </Wrap>
                    <Bottom 
                        setPageNum={setPageNum} pageNum={quesNum} 
                        isCody={true} 
                        setInnerPageNum={setInnerPageNum} innerPageNum={innerPageNum} 
                        lastInnerPageNum={itemList.length}
                        isLeftOkay={true} isRightOkay={isRightOkay}
                    />
                </div>
            )
        case 3:
            return(
                <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
                    {(isVisited.includes("네"))&&<Header kategorie={2} quesNum={quesNum} lastQuesNum={lastQuesNum}/>}
                    <Wrap isVisited={isVisited.includes("네")}>
                        <QuestionTwo
                            quesNum={0}
                            quesTextOne={"해당 코디에 ❌포함하고 싶지 않은❌"}
                            quesTextTwo={`${user_datas[itemList[2]].question} 종류는 무엇인가요?`}
                            overlapText={"중복선택"}
                        />
                        <div style={{height:'3.6rem'}}/>
                        <OverlapBtns 
                            data={user_datas[itemList[2]].datas}
                            data_num={user_datas[itemList[2]].datas.length}
                            btnType={1}
                            isOverlap={true} isNoneExist={true}
                            selectData={selectDataThree} setSelectData={setSelectDataThree}
                            otherTextOne={"이외에 ❌포함하고 싶지 않은❌"}
                            otherTextTwo={`${user_datas[itemList[2]].question}가 있다면 알려주세요!`}
                            inputText={user_datas[itemList[2]].inputText}
                            input={inputThree}
                            innerPageNum={innerPageNum}
                            isEssential={true}
                            setIsEct={setIsEct}
                        />
                    </Wrap>
                    <Bottom 
                        setPageNum={setPageNum} pageNum={quesNum} 
                        isCody={true} 
                        setInnerPageNum={setInnerPageNum} innerPageNum={innerPageNum} 
                        lastInnerPageNum={itemList.length}
                        innerPageNum={innerPageNum}
                        isLeftOkay={true} isRightOkay={isRightOkay}
                    />
                </div>
            )
        case 4:
            return(
                <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
                    {(isVisited.includes("네"))&&<Header kategorie={2} quesNum={quesNum} lastQuesNum={lastQuesNum}/>}
                    <Wrap isVisited={isVisited.includes("네")}>
                        <QuestionTwo
                            quesNum={0}
                            quesTextOne={"해당 코디에 ❌포함하고 싶지 않은❌"}
                            quesTextTwo={`${user_datas[itemList[3]].question} 종류는 무엇인가요?`}
                            overlapText={"중복선택"}
                        />
                        <div style={{height:'3.6rem'}}/>
                        <OverlapBtns 
                            data={user_datas[itemList[3]].datas}
                            data_num={user_datas[itemList[3]].datas.length}
                            btnType={1}
                            isOverlap={true} isNoneExist={true}
                            selectData={selectDataFour} setSelectData={setSelectDataFour}
                            otherTextOne={"이외에 ❌포함하고 싶지 않은❌"}
                            otherTextTwo={`${user_datas[itemList[3]].question}가 있다면 알려주세요!`}
                            inputText={user_datas[itemList[3]].inputText}
                            input={inputFour}
                            innerPageNum={innerPageNum}
                            isEssential={true}
                            setIsEct={setIsEct}
                        />
                    </Wrap>
                    <Bottom 
                        setPageNum={setPageNum} pageNum={quesNum} 
                        isCody={true} 
                        setInnerPageNum={setInnerPageNum} innerPageNum={innerPageNum} 
                        lastInnerPageNum={itemList.length}
                        isLeftOkay={true} isRightOkay={isRightOkay}
                    />
                </div>
            )
        case 5:
            return(
                <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
                    {(isVisited.includes("네"))&&<Header kategorie={2} quesNum={quesNum} lastQuesNum={lastQuesNum}/>}
                    <Wrap isVisited={isVisited.includes("네")}>
                        <QuestionTwo
                            quesNum={0}
                            quesTextOne={"해당 코디에 ❌포함하고 싶지 않은❌"}
                            quesTextTwo={`${user_datas[itemList[4]].question} 종류는 무엇인가요?`}
                            overlapText={"중복선택"}
                        />
                        <div style={{height:'3.6rem'}}/>
                        <OverlapBtns 
                            data={user_datas[itemList[4]].datas}
                            data_num={user_datas[itemList[4]].datas.length}
                            btnType={1}
                            isOverlap={true} isNoneExist={true}
                            selectData={selectDataFive} setSelectData={setSelectDataFive}
                            otherTextOne={"이외에 ❌포함하고 싶지 않은❌"}
                            otherTextTwo={`${user_datas[itemList[4]].question}가 있다면 알려주세요!`}
                            inputText={user_datas[itemList[4]].inputText}
                            input={inputFive}
                            innerPageNum={innerPageNum}
                            isEssential={true}
                            setIsEct={setIsEct}
                        />
                    </Wrap>
                    <Bottom 
                        setPageNum={setPageNum} pageNum={quesNum} 
                        isCody={true} 
                        setInnerPageNum={setInnerPageNum} innerPageNum={innerPageNum} 
                        lastInnerPageNum={itemList.length}
                        isLeftOkay={true} isRightOkay={isRightOkay}
                    />
                </div>
            )
        default:
            return(
                <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
                    {(isVisited.includes("네"))&&<Header kategorie={2} quesNum={quesNum} lastQuesNum={lastQuesNum}/>}
                    <Wrap isVisited={isVisited.includes("네")}>
                    {!isLoading? 
                        <>
                        <QuestionTwo
                            quesNum={quesNum}
                            quesTextOne={"받아보고 싶은 코디에 포함하고"}
                            quesTextTwo={"싶은 옷의 조합은 무엇인가요?"}
                            overlapText={"최대 2개"}
                        />
                        <div style={{height:'4rem'}}/>
                        <Squares
                            data={combination}
                            // data={user_datas[0].datas}
                            isOverlap={false} maxNum={2}
                            isBorderLine={true}
                            selectData={codyCase}
                            setSelectData={setCodyCase}
                        />
                        <div style={{height:'3.6rem'}}/>
                        </>
                        : <Loading/>
                    }
                    </Wrap>
                    <Bottom 
                        setPageNum={setPageNum} pageNum={quesNum} 
                        isCody={true} 
                        setInnerPageNum={setInnerPageNum} innerPageNum={innerPageNum}
                        lastInnerPageNum={5}
                        isLeftOkay={true} isRightOkay={isRightOkay}
                    />
                </div>
            )
    }
}

const Wrap = styled.div`
    margin-top: ${props=>props.isVisited? '11.6' : '4'}rem;
    margin-bottom: 8.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;