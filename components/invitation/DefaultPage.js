import React, { useEffect, useState } from "react";
import styled from 'styled-components';
// hooks
import useInput from "../../hooks/useInput";
// components
import Modal from "./Modal";


export default ({setPageNum}) => {
    const [isActive, setIsActive] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const password = useInput('');

    useEffect(()=>{
        if(password.value.length === 5)
            setIsActive(true);
        else
            setIsActive(false);
    }, [password.value])
    

    const handleBtnClick = () => {
        if(password.value[0] === 'A' & password.value[1] ==='1'){
            if(Number(password.value.slice(2,)) > 0 & Number(password.value.slice(2,)) <= 200){
                setPageNum(1);
            }
            else{
                setIsOpen(true);
                password.setValue('');
            }
        }
        else{
            setIsOpen(true);
            password.setValue('');
        }
    }

    return(
        <>
            <Background/>
            <Background style={{zIndex:'2',height:'45vh',backgroundColor:'#191919'}}/>
            <Wrap>
                <TextWrap>
                    <Text>WELCOME</Text>
                    <div style={{height:'0.8rem'}}/>
                    <Text style={{height:'4.5rem',fontSize:'1.4rem',fontWeight:'normal',lineHeight:'1.71',letterSpacing:'-0.35px'}}>
                        {"exclusive VIP personal shopper of\nNEW PREMIUM SERVICE"}
                    </Text>
                </TextWrap>
                <InputWrap>
                    <div style={{height:'3rem'}}/>
                    <Text style={{height:'3.8rem',color:'#191919',fontSize:'2.6rem',fontWeight:'900',lineHeight:'1.35',letterSpacing:'-0.65px'}}>
                        ENTER PASSWORD
                    </Text>
                    <Text style={{height:'2rem',color:'#191919',fontSize:'1.2rem',fontWeight:'normal',letterSpacing:'-0.3px'}}>
                        비밀번호를 입력해주세요.
                    </Text>
                    <div style={{height:'3rem'}}/>
                    <InputBox
                        type="text"
                        maxLength="5" 
                        value={password.value} 
                        onChange={password.onChange}
                    />
                </InputWrap>
                <Btn isActive={isActive} onClick={isActive? handleBtnClick : ()=>{}}>NEXT</Btn>
            </Wrap>
            {isOpen && <Modal setIsOpen={setIsOpen} text={"올바른 비밀번호를 입력해주세요."}/>}
        </>
    )
}

const Background = styled.div`
    position: absolute;
    z-index: 1;

    width: 100%;
    height: 100vh;
    background-color: ${({theme})=>theme.colors.very_light_pink};
`;

const Wrap = styled.div`
    position: absolute;
    z-index: 3;

    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
`;


const TextWrap = styled.div`
    position: absolute;
    top: 10%;
`;

const Text = styled.div`
    width: 32rem;
    height: 6rem;
    
    display: flex;
    justify-content: center;
    align-items: flex-end;

    color: ${({theme})=>theme.colors.white};
    font-size: 4.8rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.94;
    letter-spacing: -1.2px;
    text-align: center;
    white-space: pre-line;
`;


const InputWrap = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);

    width: 32rem;
    height: 20rem;
    border-radius: 3.2rem;
    background-color: ${({theme})=>theme.colors.white};

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InputBox = styled.input`
    width: 24rem;
    height: 3.5rem;
    padding-bottom: 0.5rem;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: solid 0.2rem ${({theme})=>theme.colors.gray};

    outline: none;
 
    color: ${({theme})=>theme.colors.black};
    font-size: 2.6rem;
    font-weight: 900;
    text-align: center;
`;



const Btn = styled.div`
    position: fixed;
    bottom: 5%;

    width: 32rem;
    height: 5.2rem;
    padding: 1.7rem 0;
    border-radius: 0.4rem;
    box-shadow: 0 1rem 3rem 0 rgba(0, 0, 0, 0.25);
    background-color: ${props=>props.isActive? ({theme})=>theme.colors.black : ({theme})=>theme.colors.very_light_pink};

    color: ${props=>props.isActive? ({theme})=>theme.colors.white : ({theme})=>theme.colors.black};
    font-family: 'Roboto';
    font-size: 1.6rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;

    transition: 0.5s;
`;

