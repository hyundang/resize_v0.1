import styled from 'styled-components';
// assets
import gray_arrow_left from "../assets/img/icons/gray_arrow_left.svg";
import gray_arrow_right from "../assets/img/icons/gray_arrow_right.svg";
import black_arrow_left from "../assets/img/icons/black_arrow_left.svg";
import black_arrow_right from "../assets/img/icons/black_arrow_right.svg";


export default () => {
    
    
    return(
        <>
        <Wrap>
            <BtnWrap>
                <BtnIcon src={gray_arrow_left}/>
                <BtnText>이전</BtnText>
            </BtnWrap>
            <BtnWrap>
                <BtnText>다음</BtnText>
                <BtnIcon src={gray_arrow_right}/>
            </BtnWrap>
        </Wrap>
        </>
    )
}

const Wrap = styled.div`
    position: fixed;
    bottom: 0;
    z-index: 10;
    width: 100%;
    height: 8.6rem;
    padding: 0rem 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${({theme}) => theme.colors.off_white};
`;

const BtnWrap = styled.div`
    width: 8rem;
    height: 5.2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const BtnText = styled.div`
    font-size: 1.6rem;
    color: ${({theme}) => theme.colors.brown_grey};
    line-height: 1.6rem;
`;

const BtnIcon = styled.img`
    width: 5rem;
`;