import React, {useState, useEffect} from "react";
import styled from "styled-components";
// assets
import del_icon from "../../assets/img/icons/del_icon.svg";
// hooks
import useWindowSize from "../../hooks/useWindowSize";


// text: placeholder 문구
// value: input값 
// setvalue: set 함수
export default ({text, value, setvalue}) => {
    const [isBtnShown, setIsBtnShown] = useState(false);
    const size = useWindowSize();

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
            <Box isShown={isBtnShown} placeholder={text} onChange={(e) => setvalue(e.target.value)} value={value}/>
            <DelBtn width={size.width} isShown={isBtnShown} onClick={() => setvalue('')} src={del_icon}/>
        </Wrap>
        </>
    )
}

const Wrap = styled.div`
    width: 32rem;
    height: 4.4rem;
    /* display: flex;
    flex-direction: row;
    align-items: center; */
`;

const Box = styled.input`
    width: 32rem;
    height: 4.4rem;
    padding-left: 1.2rem;
    padding-right: ${props=>props.isShown? '5.4rem' : '1.2rem'};
    /* display: flex;
    align-items: center;
    justify-content: center; */
    border-radius: 0.5rem;
    border: solid 0.1rem #bdbdbd;
    background-color: ${({ theme }) => theme.colors.white};
    font-size: 1.6rem;
    font-weight: 500;
    font-family: 'Noto Sans KR';
    text-align: left;
    /* color: ${({ theme }) => theme.colors.brown_grey}; */
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

const DelBtn = styled.img`
    display: ${props=>props.isShown? 'box' : 'none'};
    position: absolute;
    z-index: 2;
    margin-top: 1.1rem;
    right: ${props=>(props.width/10-32)/2+1.7}rem;
    width: 2.1rem;
    height: 2.1rem;
`;