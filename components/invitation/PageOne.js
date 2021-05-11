import React, { useEffect, useState } from "react";
import styled from 'styled-components';
// component
import { InputBox } from "../common";
import { Modal, CheckBox } from ".";
// hooks
import useInput from "../../hooks/useInput";
// api
import { postApi } from "../../lib/api";
// recoil
import { InvitationCodeState } from '../../states/invitation_atom';
import { useRecoilValue } from 'recoil';


export default ({setPageNum}) => {
    // 페이지 새로고침 막기
    useEffect(()=>{
        window.addEventListener('beforeunload', (e)=>{
            e.preventDefault();
            e.returnValue='refresh';
        })
    },[])

    const [isActive, setIsActive] = useState(false);

    const [isOneOpen, setIsOneOpen] = useState(false);
    const [isTwoOpen, setIsTwoOpen] = useState(false);
    const [isThreeOpen, setIsThreeOpen] = useState(false);
    const [isFourOpen, setIsFourOpen] = useState(false);
    const [isFiveOpen, setIsFiveOpen] = useState(false);
    const [isSixOpen, setIsSixOpen] = useState(false);
    const [isSevenOpen, setIsSevenOpen] = useState(false);
    const [isEightOpen, setIsEightOpen] = useState(false);

    const name = useInput('');
    const birth = useInput('');
    const [gender, setGender] = useState('');
    const job = useInput('');
    const workplace = useInput('');
    const position = useInput('');
    const phone = useInput('');
    const person = useInput('');
    const [checked, setChecked] = useState(false);
    const InvitationCode = useRecoilValue(InvitationCodeState);


    const handleRadioClick = (e) => {
        setGender(e.target.value);
    }

    const handleCheckboxClick = (e) => {
        setChecked(e.target.checked);
    }

    const handleBtnClick = async () => {
        // 데이터 전송
        const body = {
            password: InvitationCode,
            name: name.value,
            birth: birth.value,
            gender: (gender==='여성'? 1 : 0),
            job: job.value,
            workplace: workplace.value,
            position: position.value,
            phone: phone.value,
            invited_person: person.value,
            is_privacy_policy: checked
        }
        const response = await postApi.postInvitation(body);
        setPageNum(2);
    }

    const handleError = () => {
        if(name.value===''){
            setIsOneOpen(true);
        }
        else if(birth.value.length!==4){
            setIsTwoOpen(true);
        }
        else if(gender===''){
            setIsThreeOpen(true);
        }
        else if(job.value===''){
            setIsFourOpen(true);
        }
        else if(workplace.value===''){
            setIsFiveOpen(true);
        }
        else if(position.value===''){
            setIsSixOpen(true);
        }
        else if(phone.value.length!==11){
            setIsSevenOpen(true);
        }
        else if(!checked){
            setIsEightOpen(true);
        }
    }

    useEffect(()=>{
        if(name.value!=='' & birth.value.length===4 & gender!=='' & job.value!=='' & workplace.value!=='' & position.value!=='' & phone.value.length===11 & checked===true){
            setIsActive(true);
        }
        else{
            setIsActive(false);
        }
    }, [name, birth, gender, job, workplace, position, phone, checked])
    
    return(
        <>
        <Wrap>
            <About>
                <div style={{height:'2.4rem'}}/>
                <Text style={{height:'4rem',color:'#f4f4f4',fontSize:'2.8rem',fontWeight:'bold',letterSpacing:'-0.07rem'}}>
                    About us
                </Text>
                <div style={{height:'1.6rem'}}/>
                <Text style={{height:'35rem',color:'#f4f4f4',fontSize:'1.35rem',lineHeight:'2.14',letterSpacing:'-0.035rem'}}>
                    {"클라이언트의 취향과 체형을 분석하여 세상에 단 하나뿐인 코디를 추천하는  Private personal shopper 서비스를 모바일로 제공합니다.\n\n서비스 제공에 앞서 클라이언트의 의견을 듣고 더욱 만족스러운 서비스를 만들고자 합니다. 인터뷰에 응해주시면 서비스 출시 후, 퍼스널쇼퍼 서비스 무료이용권을 지급해드립니다. 지인 추천 시, 의류 구매에 사용하실 수 있는 적립금 최대 20,000W 을 함께 제공해드립니다.\n\n아래에서 정보를 기입해주시면 자동으로 신청이 완료됩니다. 인터뷰 시간 조율을 위해 개별 연락을 드릴 예정입니다."}
                </Text>
            </About>
            <InfoWrap>
                <div style={{height:'2.8rem'}}/>
                <Text style={{height:'2.8rem',fontSize:'2.8rem',fontWeight:'bold',letterSpacing:'-0.07rem'}}>
                    Information
                </Text>
                <div style={{height:'3.6rem'}}/>
                <Text style={{marginBottom:'1.2rem'}}>1. Name</Text>
                <InputBox
                    text={"ex) 홍길동"}
                    input={name}
                    maxLength="10"
                />
                <div style={{height:'3.2rem'}}/>
                <Text style={{marginBottom:'1.2rem'}}>2. Year of Birth</Text>
                <InputBox
                    text={"ex) 1992"}
                    input={birth}
                    type={"number"}
                    maxLength="10"
                />
                <div style={{height:'3.2rem'}}/>
                <Text style={{marginBottom:'1.2rem'}}>3. Gender</Text>
                <RadioWrap>
                    <Item>
                        <InputGender 
                            type="radio" 
                            name="gender" 
                            value="여성" 
                            checked={gender === '여성'} 
                            onChange={handleRadioClick}
                        />
                        <RadioBtnLabel/>
                        <div style={{marginLeft:'1.2rem'}}>여성</div>
                    </Item>
                    <Item>
                        <InputGender 
                            type="radio" 
                            name="gender" 
                            value="남성" 
                            checked={gender === '남성'} 
                            onChange={handleRadioClick}
                        />
                        <RadioBtnLabel/>
                        <div style={{marginLeft:'1.2rem'}}>남성</div>
                    </Item>
                </RadioWrap>
                <div style={{height:'1.6rem'}}/>
                <Text style={{marginBottom:'1.2rem'}}>4. Job</Text>
                <InputBox
                    text={"ex) 마케터/개발자/변호사/치과 의사"}
                    input={job}
                    maxLength="30"
                />
                <div style={{height:'3.2rem'}}/>
                <Text style={{marginBottom:'1.2rem'}}>5. Workplace</Text>
                <InputBox
                    text={"ex) 네이버/분당서울대병원/현대자동차"}
                    input={workplace}
                    maxLength="30"
                />
                <div style={{height:'3.2rem'}}/>
                <Text style={{marginBottom:'1.2rem'}}>6. Position</Text>
                <InputBox
                    text={"ex) 대리/레지던트"}
                    input={position}
                    maxLength="20"
                />
                <div style={{height:'3.2rem'}}/>
                <Text style={{marginBottom:'1.2rem'}}>7. Phone Number</Text>
                <InputBox
                    text={"ex) 01012345678"}
                    input={phone}
                    type={"number"}
                />
                <div style={{height:'3.2rem'}}/>
                <div style={{width:'32rem',marginBottom:'1.2rem',display:'flex',flexDirection:'row'}}>
                    <Text style={{width:'auto'}}>8. Who invited you?&nbsp;</Text>
                    <Text style={{width:'auto',fontSize:'1.2rem',lineHeight:'2.7',color:'#707070'}}>(optional)</Text>
                </div>
                <InputBox
                    text={"추천인 이름을 입력해주세요."}
                    input={person}
                    maxLength="10"
                />
                <div style={{height:'3.2rem'}}/>
                <div style={{width:'100vw',height:'1rem',backgroundColor:'#f4f4f4'}}/>
                <div style={{height:'2.2rem'}}/>
                <Text style={{marginBottom:'1.6rem'}}>9. Collection of personal information</Text>
                <label style={{width:'32rem'}}>
                    <CheckBox 
                        checked={checked} 
                        onChange={handleCheckboxClick}
                    />
                    <span style={{fontSize:'1.4rem',fontWeight:'bold',color:'#333333',textAlign:'left',marginLeft:'1.2rem'}}>동의합니다.</span>
                </label>
                <Text style={{fontSize:'1.2rem',marginTop:'0.9rem'}}>
                    수집된 정보는 인터뷰와 서비스 제공 목적으로만 사용됩니다.
                </Text>
                <div style={{height:'12rem'}}/>
            </InfoWrap>
            <Btn isActive={isActive} onClick={isActive? handleBtnClick : handleError}>SAVE</Btn>
        </Wrap>
        {isOneOpen&&<Modal text="Name을 입력해주세요." setIsOpen={setIsOneOpen}/>}
        {isTwoOpen&&<Modal text="Year of Birth를 입력해주세요." setIsOpen={setIsTwoOpen}/>}
        {isThreeOpen&&<Modal text="Gender를 입력해주세요." setIsOpen={setIsThreeOpen}/>}
        {isFourOpen&&<Modal text="Job를 입력해주세요." setIsOpen={setIsFourOpen}/>}
        {isFiveOpen&&<Modal text="Workplace를 입력해주세요." setIsOpen={setIsFiveOpen}/>}
        {isSixOpen&&<Modal text="Position를 입력해주세요." setIsOpen={setIsSixOpen}/>}
        {isSevenOpen&&<Modal text="Phone Number를 입력해주세요." setIsOpen={setIsSevenOpen}/>}
        {isEightOpen&&<Modal text="개인정보수집동의를 해주세요." setIsOpen={setIsEightOpen}/>}
        </>
    )
}

const Text = styled.div`
    width: 32rem;
    height: 2.7rem;

    color: ${({theme})=>theme.colors.black};
    font-size: 1.6rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.88;
    letter-spacing: -0.04rem;
    text-align: left;
    white-space: pre-line;
`;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
`;

const About = styled.div`
    width: 100vw;
    height: 45.8rem;
    background-color: black;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InfoWrap = styled.div`
    position: relative;

    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const RadioWrap = styled.div`
    width: 32rem;
    
    display: flex;
    flex-direction: column;

    font-size: 1.4rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #333333;
`;


const Item = styled.div`
    position: relative;
    
    width: 32rem;
    margin-bottom: 1.6rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    
`;

const RadioBtnLabel = styled.label`
    position: absolute;

    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: white;
    border: 1px solid ${({theme})=>theme.colors.gray};
`;

const InputGender = styled.input`
    opacity: 0;
    z-index: 1;
    margin: 0;

    width: 2rem;
    height: 2rem;

    &:checked + ${RadioBtnLabel} {
        border: 0.5rem solid ${({theme})=>theme.colors.black};
    }
`;



const Btn = styled.div`
    position: fixed;
    z-index: 3;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, 0);

    width: 32rem;
    height: 5.2rem;
    padding: 1.7rem 0;
    border-radius: 0.4rem;
    box-shadow: 0 1rem 3rem 0 rgba(0, 0, 0, 0.25);
    background-color: ${props=>props.isActive? ({theme})=>theme.colors.black : ({theme})=>theme.colors.very_light_pink};

    color: ${props=>props.isActive? ({theme})=>theme.colors.white : ({theme})=>theme.colors.black};
    font-size: 1.6rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6rem;
    letter-spacing: normal;
    text-align: center;

    transition: 0.5s;
`;