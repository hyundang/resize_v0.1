import React, { useEffect, useState } from "react";
import styled from "styled-components";
// recoil
import { useRecoilState } from "recoil";
import { PageNumState, CheckedListState } from "../../states/website_atom";
// components
import { Bottom } from "../../components";
import { CheckBox, Question } from "../../components/common";
import Modal from "../../components/common/modal";
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
    const [modalVisible, setModalVisible] = useState(false);

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
            <div style={{height:'4.5rem'}}/>
            <Bottom
                pageNum={pageNum}
                setPageNum={setPageNum}
                kategorie={-1} lastQuesNum={3}
                isRightOkay={isNextOkay}
            />
        </Wrap>
        {modalVisible&&
        <Modal
            visible={modalVisible}
            closable={true}
            maskClosable={true}
            onClose={()=>setModalVisible(false)}
            title= {'개인정보 처리방침'}
        >
            <div style={{height:'1.5rem'}}/>
            <div style={{width:'26rem'}}>제 1조 [총칙]</div>
            <div style={{height:'1.5rem'}}/>
            <div>“리사이즈”는 이용자들의 개인정보를 중요시하며 고객들의 개인정보를 보호하기 
                위해 최선을 다하고 있습니다. 따라서 「통신비밀보호법」,
                「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등과 관련된 법규를 
                준수하기 위해 [개인정보 처리방침]을 제정하고 이를 준수하고 있습니다.
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>리사이즈는 다음 개인정보 처리방침을 통하여 이용자들의 개인정보가 
                어떠한 용도로 이용되고 있으며 어떠한 방식으로 관리되고 있는지 또한 
                개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려 드립니다.
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
                리사이즈의 개인정보 처리방침은 관련 법률 및 지침의 변경이나 회사 내부 운영방침의 
                변경 등으로 인하여 개정될 수 있습니다. 개인정보 처리방침 이 변경될 경우 변경사항은 
                홈페이지에 게시됩니다. 
            </div>
            <div style={{height:'1.5rem'}}/>
            <div style={{width:'26rem'}}>제 2 조 [개인정보 수집항목 및 이용목적]</div>
            <div style={{height:'1.5rem'}}/>
            <div>
                리사이즈가 개인정보 보호법 제32조에 따라 등록․공개하는 개인정보파일의 처리목적은 
                다음과 같습니다.
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
                - (필수) 성명, 아이디, 비밀번호, 휴대폰번호, 생년월일 : 회원제 서비스 이용에 따른 본인 확인 절차에 이용
            </div>
            <div>
            - (필수) 기타 선택항목(신체사이즈, 선호 스타일 등) : 개인맞춤 서비스를 제공하기 위한 자료
            </div>
            <div>
                - (필수) IP 주소, 방문일시, 쿠키, 기기정보 등 서비스 이용기록 : 서비스 개선, 불량회원 관리
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
                수집된 정보는 서비스의 발전, 알고리즘 개발, 회원관리, 마케팅 및 광고 등에 활용됩니다.
            </div>
        </Modal>
        }
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