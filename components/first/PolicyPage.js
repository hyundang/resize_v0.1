import React, { useEffect, useState } from "react";
import styled from "styled-components";
// recoil
import { useRecoilState } from "recoil";
import { PageNumState, CheckedListState } from "../../states/website_atom";
// components
import { Bottom } from "../../components";
import { CheckBox, Question } from "../../components/common";
import ModalOne from './ModalOne';
import ModalTwo from './ModalTwo';
import ModalThree from './ModalThree';
// assets
import arrow from "../../public/images/website/icon/brown_arrow_right.svg";


export default ( ) => {
    const [pageNum, setPageNum] = useRecoilState(PageNumState);

    // 약관동의 전체동의 여부
    const [checked, setChecked] = useState(false);
    // 약관동의 된 리스트
    const [checkedList, setCheckedList] = useRecoilState(CheckedListState);
    // 다음 단계 진행 가능 여부
    const [isNextOkay, setIsNextOkay] = useState(false);
    // 모달
    const [modalOneVisible, setModalOneVisible] = useState(false);
    const [modalTwoVisible, setModalTwoVisible] = useState(false);
    const [modalThreeVisible, setModalThreeVisible] = useState(false);

    const handleCheckboxClick = (e) => {
        if(e.target.checked){
            setChecked(e.target.checked);
            setCheckedList(['1', '2', '3']);
        }
        else{
            setChecked(e.target.checked);
            setCheckedList([]);
        }
    }

    const handleCheckClick = (e) => {
        if(checkedList.includes(e.target.id)){
            setCheckedList(checkedList.filter((item, idx)=>{
                return e.target.id != item;
            }))
        }
        else{
            setCheckedList(checkedList.concat(e.target.id))
        }
    }

    useEffect(()=>{
        checkedList.length===3? setChecked(true) : setChecked(false);

        if(checkedList.includes('1') & checkedList.includes('2')){
            setIsNextOkay(true);
        }
        else{
            setIsNextOkay(false);
        }
    },[checkedList])

    return(
        <>
        <Wrap>
            <Header>리사이즈 약관동의</Header>
            <div style={{height:'7.4rem'}}/>
            <Text>"동의하시나요?"</Text>
            <div style={{height:'4.8rem'}}/>
            <Question
                quesNum={0}
                quesText={"약관동의"}
            />
            <label style={{width:'32rem',marginTop:'2.1rem',marginBottom:'2.1rem'}}>
                <CheckBox 
                    checked={checked} 
                    onChange={handleCheckboxClick}
                />
                <span style={{fontSize:'1.6rem',color:'#333333',textAlign:'left',marginLeft:'0.8rem'}}>전체동의</span>
            </label>
            <PolicyBox
                id={1}
                text={"이용약관 동의"}
                checkedList={checkedList} 
                handleCheckClick={handleCheckClick}
                handleBtnClick={()=>setModalOneVisible(true)}
            />
            <PolicyBox
                id={2}
                text={"개인정보 수집 및 이용 동의"}
                checkedList={checkedList} 
                handleCheckClick={handleCheckClick}
                handleBtnClick={()=>setModalTwoVisible(true)}
            />
            <PolicyBox
                id={3}
                text={"[선택] 마케팅 활용동의"}
                checkedList={checkedList} 
                handleCheckClick={handleCheckClick}
                handleBtnClick={()=>setModalThreeVisible(true)}
            />
            <div style={{height:'4.5rem'}}/>
            <Bottom
                pageNum={pageNum}
                setPageNum={setPageNum}
                kategorie={-1} lastQuesNum={3}
                isRightOkay={isNextOkay}
            />
        </Wrap>
        {modalOneVisible&&<ModalOne setModalVisible={setModalOneVisible}/>}
        {modalTwoVisible&&<ModalTwo setModalVisible={setModalTwoVisible}/>}
        {modalThreeVisible&&<ModalThree setModalVisible={setModalThreeVisible}/>}
        </>
    )
}

const Wrap = styled.div`
    margin-top: 8.3rem;
    margin-bottom: 8.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 8.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 0.6rem 0 rgba(0, 0, 0, 0.16);
    background-color: white;
    font-size: 2rem;
    font-weight: bold;
    line-height: 4.5;
    letter-spacing: -0.5px;
    text-align: center;
    color: ${({theme})=>theme.colors.black};
`;

const Text = styled.div`
    width: 32rem;
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.5;
    text-align: center;
    color: ${({theme})=>theme.colors.black};
`;


const PolicyBox = ({id, checkedList, handleCheckClick, text, handleBtnClick}) => {
    return(
        <BoxWrap>
            <div style={{width:'2rem',height:'2rem',marginLeft:'1.3rem'}} id={id} onClick={handleCheckClick}>
                <Icon viewBox="0 0 24 24" checked={checkedList.includes(`${id}`)?true:false} id={id}>
                    <polyline points="19 7 10 17 5 12" id={id} onClick={handleCheckClick}/>
                </Icon>
            </div>
            <CheckBoxText>{text}</CheckBoxText>
            <img src={arrow} style={{width:'4rem',height:'4rem'}} onClick={handleBtnClick}/>
        </BoxWrap>
    )
}

const BoxWrap = styled.div`
    width: 32.7rem;
    height: 4.8rem;
    margin-bottom: 0.8rem;
    border-radius: 0.3rem;
    border: solid 0.1rem #f5f3f0;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Icon = styled.svg`
fill: none;
stroke: ${props=>props.checked? '#a99174': '#e5e5e5'};
stroke-width: 2px;
`;

const CheckBoxText = styled.span`
    width: 26.4rem;
    height: 1.8rem;
    margin-left: 0.7rem;
    font-size: 1.4rem;
    text-align: left;
    color: ${({theme})=>theme.colors.black};
`;