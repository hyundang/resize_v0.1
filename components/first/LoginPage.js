import React, { useEffect, useState } from "react";
import styled from "styled-components";
// recoil
import { useRecoilState } from "recoil";
import { PageNumState } from "../../states/website_atom";
// components
import { Bottom } from "../../components";
// hooks
import useInput from "../../hooks/useInput";


export default () => {
    const [pageNum, setPageNum] = useRecoilState(PageNumState);

    const input = useInput("");

    const [isRightOkay, setIsRightOkay] = useState(false);

    useEffect(()=>{
        console.log(input.value)
        if(input.value.length===11){
            setIsRightOkay(true);
        }
        else{
            setIsRightOkay(false);
        }
    }, [input.value])


    return(
        <Wrap>
            <Header>STYLING ROOM</Header>
            <div style={{height:'7.9rem'}}/>
            <Text>{"이전에 입력한 큐레이션 정보를 불러오고\n싶다면 휴대폰 번호를 입력해주세요."}</Text>
            <div style={{height:'13.7rem'}}/>
            <InputBox
                style={{imeMode:'disabled'}}
                placeholder={"휴대폰 번호를 입력하세요."}
                value={input.value}
                onChange={input.onChange}
                type="number" pattern="\d*"
            />
            <Bottom
                pageNum={pageNum}
                setPageNum={setPageNum}
                kategorie={-1} lastQuesNum={2}
                isLeftOkay={true}
                isRightOkay={isRightOkay}
            />
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

const Header = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 11.6rem;
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

const InputBox = styled.input`
    width: 32rem;
    height: 4.4rem;
    padding: 1.2rem;
    border-radius: 0.5rem;
    border: solid 0.1rem #bdbdbd;
    background-color: ${({ theme }) => theme.colors.white};
    font-size: 1.6rem;
    font-weight: 500;
    font-family: 'Noto Sans KR';
    text-align: left;
    color: #767676;
    ::placeholder{
        color: #bdbdbd;
        font-size: 1.4rem;
    }
    &:focus{
        outline: none;
        border: solid 0.1rem #767676;
    }
`;

const Text = styled.div`
    width: 32rem;
    white-space: pre-line;
    font-size: 1.8rem;
    font-weight: bold;
    line-height: 1.67;
    letter-spacing: -0.45px;
     text-align: left;
    color: ${({theme})=>theme.colors.black};
`;