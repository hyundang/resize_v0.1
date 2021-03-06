import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { Header, Bottom } from "../../components";
import { Question } from "../../components/common";
// hooks
import useRecoilInput from "../../hooks/useRecoilInput";
import useWindowSize from "../../hooks/useWindowSize";
// recoil
import { UserHnWState } from "../../states/size_atom";


export default ({quesNum, lastQuesNum, setPageNum}) => {
    useEffect(()=>{
        window.scrollTo(0,0);
    }, [])
    
    const size = useWindowSize();

    // 유저 input 데이터
    const user_height = useRecoilInput(UserHnWState(0));
    const user_weight = useRecoilInput(UserHnWState(1));
    
    const [isRightOkay, setIsRightOkay] = useState(false);

    useEffect(()=>{
        if(user_height.value.length>=3 & user_weight.value.length>=2){
            setIsRightOkay(true);
        }
        else{
            setIsRightOkay(false);
        }
    }, [user_height, user_weight])


    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
            <Header kategorie={1} quesNum={quesNum} lastQuesNum={lastQuesNum}/>
            <Wrap>
                <Question
                    quesNum={quesNum}
                    quesText={"키와 몸무게"}
                />
                <div style={{width:'100%', height:'3.6rem'}}/>
                <Text>키</Text>
                <div style={{width:'32rem', height:'4.4rem'}}>
                    <InputBox
                        placeholder="키를 입력해주세요"
                        value={user_height.value}
                        onChange={user_height.onChange}
                        type="number" pattern="\d*"
                    />
                    <Unit width={size.width}>cm</Unit>
                </div>
                <div style={{width:'100%', height:'2.6rem'}}/>
                <Text>몸무게</Text>
                <div style={{width:'32rem', height:'4.4rem'}}>
                    <InputBox
                        placeholder="몸무게를 입력해주세요"
                        value={user_weight.value}
                        onChange={user_weight.onChange}
                        type="number" pattern="\d*"
                    />
                    <Unit width={size.width}>kg</Unit>
                </div>
            </Wrap>
            <Bottom 
                setPageNum={setPageNum} pageNum={quesNum}
                isRightOkay={isRightOkay}
            />
        </div>
    )
}

const Wrap = styled.div`
    margin-top: 11.6rem;
    margin-bottom: 8.6rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Text = styled.div`
    height: 2.4rem;
    font-size: 1.55rem;
    font-weight: bold;
    text-align: left;
    color: ${({theme})=>theme.colors.black};
    margin-bottom: 1rem;
`;

const InputBox = styled.input`
    position: absolute;
    z-index: 1;
    width: 32rem;
    height: 4.4rem;
    padding-left: 1.2rem;
    padding-right: 5.4rem;
    border-radius: 0.5rem;
    border: solid 0.1rem #bdbdbd;
    background-color: ${({ theme }) => theme.colors.white};
    font-size: 1.6rem;
    font-family: 'Noto Sans KR';
    text-align: left;
    font-weight: normal;
    color: #767676;
    ::placeholder{
        color: #bdbdbd;
    }
    &:focus{
        outline: none;
        border: solid 0.1rem #767676;
    }
`;

const Unit = styled.div`
    position: absolute;
    z-index: 2;
    margin-top: 1.1rem;
    right: ${props=>(props.width/10-32)/2+1.7}rem;
    @media screen and (min-width: 500px) {
        right: ${props=>(props.width/18-32)/2+1.7}rem;
    }
    width: 2rem;
    height: 2rem;
    font-size: 1.35rem;
    font-weight: 500;
    text-align: left;
    color: #767676;
`;