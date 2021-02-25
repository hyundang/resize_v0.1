import styled from 'styled-components';
// assets
import gray_arrow_left from "../assets/img/icons/gray_arrow_left.svg";
import gray_arrow_right from "../assets/img/icons/gray_arrow_right.svg";
import black_arrow_left from "../assets/img/icons/black_arrow_left.svg";
import black_arrow_right from "../assets/img/icons/black_arrow_right.svg";
// router
import { useRouter } from "next/router";


export default ({
    setPageNum, pageNum, 
    isCody, setInnerPageNum, innerPageNum, lastInnerPageNum,
    lastQuesNum, kategorie
}) => {
    const router = useRouter();
    
    
    const handleLastPage = () => {
        switch (kategorie) {
            case 0:
                router.push('/website_dev/size');
                break;
            case 1:
                router.push('/website_dev/cody');
                break;
            case 2:
                router.push('/website_dev/last');
                break;
            case 3:
                break;
            default:
                break;
        }
    }
    
    return(
        <>
        <Wrap>
            <BtnWrap 
                onClick={
                    isCody&(innerPageNum!==0)? 
                        ()=>setInnerPageNum(innerPageNum-1) 
                        :() => setPageNum(pageNum-1)}
                pageNum={pageNum}
            >
                <BtnIcon src={gray_arrow_left}/>
                <BtnText>이전</BtnText>
            </BtnWrap>
            <Space pageNum={pageNum}/>
            <BtnWrap 
                onClick={
                    (lastQuesNum===pageNum)?
                        handleLastPage
                        :(isCody&(innerPageNum!==lastInnerPageNum)?
                            ()=>setInnerPageNum(innerPageNum+1)
                            :() => setPageNum(pageNum+1)
                    )
                }
                pageNum={0}
            >
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
    /* box-shadow: 0 0 1rem 1rem rgba(255,255,255,1);  */
`;

const Space = styled.div`
    width: 8rem;
    height: 5.2rem;
    display: ${props=>(props.pageNum===1)? 'box': 'none'};
`;

const BtnWrap = styled.div`
    width: 8rem;
    height: 5.2rem;
    display: ${props=>(props.pageNum===1)? 'none' : 'flex'};
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