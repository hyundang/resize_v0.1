import React, {useState, useEffect} from "react";
import styled from "styled-components";
// assets
import del_icon from "../../assets/img/icons/del_icon.svg";

// text: placeholder 문구
// value: input값 
// setvalue: set 함수
export default ({text, value, setvalue}) => {
    const [isBtnShown, setIsBtnShown] = useState(false);
    
    useEffect(()=> {
        console.log(value);
        if(value !== ''){
            setIsBtnShown(true);
        }
        else{
            setIsBtnShown(false);
        }
    }, [value])

    return(
        <>
        <Wrap>
            <Box placeholder={text} onChange={(e) => setvalue(e.target.value)} value={value}/>
            <DelBtn isShown={isBtnShown} onClick={() => setvalue('')} src={del_icon}>x</DelBtn>
        </Wrap>
        </>
    )
}

const Wrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Box = styled.input`
    width: 29.6rem;
    height: 4.4rem;
    padding-left: 1.2rem;
    padding-right: 5.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    border: solid 0.1rem #bdbdbd;
    background-color: ${({ theme }) => theme.colors.white};
    font-size: 1.6rem;
    font-weight: 500;
    font-family: 'Noto Sans KR';
    /* color: ${({ theme }) => theme.colors.brown_grey}; */
    color: #767676;
    ::placeholder{
        color: #bdbdbd;
        font-size: 1.6rem;
    }
    &:focus{
        outline: none;
        border: solid 0.1rem #767676;
    }
`;

const DelBtn = styled.image`
    display: ${props=>props.isShown? 'box' : 'none'};
    /* justify-content: center; */
    position: relative;
    z-index: 2;
    right: 4rem;
    width: 2.1rem;
    height: 2.1rem;
    /* border-radius: 1.05rem;
    background-color: #bdbdbd; */
    /* font-size: 1.6rem; */
    /* color: white;
    line-height: 1.6rem; */
`;