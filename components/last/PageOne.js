import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { Header } from "../../components";
import { InputBox, OverlapBtnTwo, Question, CheckBox } from "../../components/common";
// hooks
import useInput from "../../hooks/useInput";
// router
import { useRouter } from "next/router";
// assets
import arrow from "../../assets/img/icons/brown_arrow_right.svg";


export default () => {
    // 5개 만들기
    const input = useInput("");
    // const checked = useInput(false);

    const router = useRouter();
    const handleClick = () => {
        // 스타일링 끝내기 눌렀을 때
        router.push('/website_dev/result');
    }

    const [checked, setChecked] = useState(false);
    const [checkedList, setCheckedList] = useState([]);

    const handleCheckboxClick = (e) => {
        if(e.target.checked){
            setChecked(e.target.checked);
            setCheckedList(['1', '2', '3']);
            // console.log(1);
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
        if(checkedList.length === 3){
            setChecked(true);
        }
        else{
            setChecked(false);
        }
    },[checkedList])

    return(
        <Wrap>
            <Header  kategorie={3} quesNum={1} lastQuesNum={1}/>
            <Question
                quesNum={0}
                quesText={"이름"}
                overlapText={"*"}
            />
            <div style={{marginTop:'2.4rem'}}/>
            <InputBox
                text={"예) 홍길동"}
                input={input}
            />
            <div style={{marginTop:'3.2rem'}}/>
            <Question
                quesNum={0}
                quesText={"생년월일"}
                overlapText={"*"}
            />
            <div style={{marginTop:'2.4rem'}}/>
            <InputBox
                text={"예) 2021.01.01"}
                input={input}
            />
            <div style={{marginTop:'3.2rem'}}/>
            <Question
                quesNum={0}
                quesText={"휴대폰 번호"}
                overlapText={"*"}
            />
            <div style={{marginTop:'2.4rem'}}/>
            <InputBox
                text={"예) 01012345678"}
                input={input}
            />
            <div style={{marginTop:'3.2rem'}}/>
            <Question
                quesNum={0}
                quesText={"이메일"}
                overlapText={"*"}
            />
            <div style={{marginTop:'2.4rem'}}/>
            <InputBox
                text={"예) resize@gmail.com"}
                input={input}
            />
            <div style={{marginTop:'3.2rem'}}/>
            <Question
                quesNum={0}
                quesText={"인스타그램 계정"}
            />
            <div style={{marginTop:'2.4rem'}}/>
            <InputBox
                text={"예) instagram"}
                input={input}
            />
            {/* <OverlapBtnTwo/> 직업태그넣기 */}
            <div style={{marginTop:'3.6rem'}}/>
            <Question
                quesNum={0}
                quesText={"약관동의"}
            />
            <label style={{width:'32rem',marginTop:'2.1rem',marginBottom:'2.1rem'}}>
                <CheckBox 
                    checked={checked} 
                    onChange={handleCheckboxClick}
                />
                <span style={{fontSize:'1.4rem',color:'#333333',textAlign:'left',marginLeft:'0.8rem'}}>전체동의</span>
            </label>
            <PolicyBox
                id={1}
                text={"리사이즈 이용약관"}
                checkedList={checkedList} 
                handleCheckClick={handleCheckClick}
            />
            <PolicyBox
                id={2}
                text={"리사이즈 개인 정보 처리방침"}
                checkedList={checkedList} 
                handleCheckClick={handleCheckClick}
            />
            <PolicyBox
                id={3}
                text={"[선택] 마케팅 활용동의"}
                checkedList={checkedList} 
                handleCheckClick={handleCheckClick}
            />
            <div style={{marginTop:'3.6rem'}}/>
            <Bottom onClick={handleClick}>스타일링 끝내기</Bottom>
        </Wrap>
    )
}


const Wrap = styled.div`
    margin-top: 11.6rem;
    margin-bottom: 8.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Bottom = styled.div`
    position: fixed;
    bottom: 0;
    z-index: 10;
    width: 100%;
    height: 8.6rem;
    padding: 0rem 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.off_white};
    font-size: 1.6rem;
    font-weight: bold;
    color: black;
    letter-spacing: -0.4px;

`;

const PolicyBox = ({id, checkedList, handleCheckClick, text}) => {
    return(
        <BoxWrap>
            <div style={{width:'2rem',height:'2rem',marginLeft:'1.3rem'}} >
                <Icon viewBox="0 0 24 24" checked={checkedList.includes(`${id}`)?true:false} onClick={handleCheckClick} id={id}>
                    <polyline points="19 7 10 17 5 12"/>
                </Icon>
            </div>
            <Text>{text}</Text>
            <img src={arrow} style={{width:'4rem',height:'4rem'}}/>
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
stroke: ${props=>props.checked? '#a99174': 'black'};
stroke-width: 2px;
`;

const Text = styled.span`
    width: 26.4rem;
    height: 1.8rem;
    margin-left: 0.7rem;
    font-size: 1.2rem;
    text-align: left;
    color: ${({theme})=>theme.colors.black};
`;
