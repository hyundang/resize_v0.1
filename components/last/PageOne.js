import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { Header } from "../../components";
import { InputBox, Question, CheckBox, OverlapBtns } from "../../components/common";
import Modal from "../../components/common/modal";
// hooks
import useInput from "../../hooks/useInput";
// router
import { useRouter } from "next/router";
// assets
import arrow from "../../assets/img/icons/brown_arrow_right.svg";


export default ({user_datas}) => {
    const [modalVisible, setModalVisible] = useState(false)

    const router = useRouter();
    const handleClick = () => {
        // 스타일링 끝내기 눌렀을 때
        router.push('/website_dev/result');
    }

    // 5개 만들기(유저 정보 데이터)
    const input = useInput("");
    // 직업 데이터
    const [selectData, setSelectData] = useState([]);
    // 약관동의 전체동의 여부
    const [checked, setChecked] = useState(false);
    // 약관동의 된 리스트
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
        <>
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
            <div style={{marginTop:'3.6rem'}}/>
            <OverlapBtns
                btnType={2}
                data={user_datas}
            />
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
                handleBtnClick={()=>setModalVisible(true)}
            />
            <PolicyBox
                id={2}
                text={"리사이즈 개인 정보 처리방침"}
                checkedList={checkedList} 
                handleCheckClick={handleCheckClick}
                handleBtnClick={()=>setModalVisible(true)}
            />
            <PolicyBox
                id={3}
                text={"[선택] 마케팅 활용동의"}
                checkedList={checkedList} 
                handleCheckClick={handleCheckClick}
                handleBtnClick={()=>setModalVisible(true)}
            />
            <div style={{marginTop:'3.6rem'}}/>
            <Bottom onClick={handleClick}>스타일링 끝내기</Bottom>
        </Wrap>
        {modalVisible&&
        <Modal
            visible={modalVisible}
            closable={true}
            maskClosable={true}
            onClose={()=>setModalVisible(false)}
            title= {'개인정보 처리방침'}
        >
            <div>제 1조 [총칙]</div>
            <div>“리사이즈”는 이용자들의 개인정보를 중요시하며 고객들의 개인정보를 보호하기 위해 최선을 다하고 있습니다. 따라서 「통신비밀보호법」 ,「정보통신망 이용촉진 및 정보보호 등에 관한 법률」  등과 관련된 법규를 준수하기 위해  [개인정보 처리방침]을 제정하고 이를 준수하고 있습니다.</div>
            <div>리사이즈는 다음 개인정보 처리방침을 통하여 이용자들의 개인정보가 어떠한 용도로 이용되고 있으며 어떠한 방식으로 관리되고 있는지 또한 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려 드립니다.</div>
        </Modal>
        }
        </>
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

const PolicyBox = ({id, checkedList, handleCheckClick, text, handleBtnClick}) => {
    return(
        <BoxWrap>
            <div style={{width:'2rem',height:'2rem',marginLeft:'1.3rem'}} >
                <Icon viewBox="0 0 24 24" checked={checkedList.includes(`${id}`)?true:false} onClick={handleCheckClick} id={id}>
                    <polyline points="19 7 10 17 5 12"/>
                </Icon>
            </div>
            <Text>{text}</Text>
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
